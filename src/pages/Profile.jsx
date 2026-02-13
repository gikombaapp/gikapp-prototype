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
    <section className='flex flex-col h-screen w-full bg-[#F3F0F8]'>
        {/* profile grid */}
        <div className='flex flex-col h-[70%] w-full bg-white justify-self-center'>
            {/* profile main */}
                {/* banner */}
                <img src="" alt="" className="bg-[#0098B3] h-[50%]" />
                {/* profile pic */}
                <img src="" alt="" className='relative left-5 -top-25 text-center bg-[#0098B3] outline-4 outline-white w-50 h-50 rounded-[50%]'/>
            <div>
                {/* User info */}
                {profile ? <p>{profile.username}</p> : <p>Loading profile...</p>}
                {profile ? <p>{profile.bio}</p> : <p>Loading bio...</p>}
                <span>Rating:</span>
            </div>
        </div>
        {/* Shop */}
    <div className='bg-white w-full h-[50%] mb-10'> 
        {/* Shop view selection */}
        <div>
            <ul className='flex flex-row justify-around pt-8 mb-2 border-b border-gray-100 mx-4'>
                <li className='border-b-2 border-black w-30 text-center'>Selling</li>
                <li>Saved</li>
                <li>Purchases</li>
                <li>Wardrobe</li>
            </ul>
        </div>
    </div>
    </section>
  )
}

export default Profile