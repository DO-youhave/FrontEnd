import { useEffect, useState } from 'react';

import { Profile, userProfile } from './../apis/User';

const useGetProfile = () => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setisLoading] = useState<boolean>(false);

  const getProfile = async () => {
    setisLoading(true);
    const profile = await userProfile();
    setProfile(profile);
    setisLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return { profile, isLoading };
};

export default useGetProfile;
