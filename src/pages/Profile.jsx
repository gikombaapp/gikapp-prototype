import React from 'react'
import { supabase } from '../lib/supabase'
import { useEffect,useState } from 'react'



const Profile = () => {
  const [profile, setProfile] = useState(null)
useEffect(() => {
  const fetchProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user)

    if (!user) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setProfile(data);
  };

  fetchProfile();
}, [ ]);
  console.log(profile)

  return (
    <section className='flex flex-row flex-wrap h-screen w-full bg-[#F3F0F8]'>
        {/* profile grid */}
        <div className='flex flex-col h-[70%] w-full bg-white justify-self-center'>
            {/* profile main */}
                {/* banner */}
                <img src="" alt="" className="bg-[#0098B3] h-[50%]" />
                {/* profile pic */}
                <img src="" alt="" className='relative left-5 -top-25 text-center bg-[#0098B3] outline-4 outline-white w-50 h-50 rounded-[50%]'/>
            <div>
                {/* User info */}
                <span>Username</span>
                <span>Bio</span>
                <span>Rating:</span>
            </div>
        </div>
        {/* Shop */}
    </section>
  )
}

export default Profile