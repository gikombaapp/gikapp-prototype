// authStore.js
import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";

// Create the Supabase client once (singleton)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export const useAuthStore = create((set) => ({
  supabase, // the client
  user: null, // current user
  session: null, // session info
  loading: true, // loading state for initialization

  // Initialize auth state
initAuth: async () => {
  const { data: { session } } = await supabase.auth.getSession();
  set({ 
    user: session?.user ?? null, 
    session: session ?? null,
    loading: false 
  });
},


  // Login function
  login: async (email, password) => {
  set({ loading: true, error: null });
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error(error);
    return set({ error: error.message, loading: false });
  }

  // login succeeded
  set({
    user: data.user,
    session: data.session,
    loading: false,
    error: null,
  });
},

  // Logout function
  logout: async () => {
    set({ loading: true });
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
    set({ user: null, session: null, loading: false });
  },
  register: async (email, password) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    // Supabase may send a confirmation email; user might be null until confirmed
    set({
      user: data.user || null,
      session: data.session || null,
      loading: false,
    });
    if (data.user) {
    // auto-create profile
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({ id: data.user.id });
    if (profileError) console.error("Failed to create profile:", profileError);
  }
  },

  // Subscribe to auth changes (auto updates user/session)
subscribeAuth: () => {
  const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
    set({ user: session?.user ?? null, session: session ?? null });
  });

  // If subscription exists, return unsubscribe function
  return () => subscription?.unsubscribe?.();
},
}));
