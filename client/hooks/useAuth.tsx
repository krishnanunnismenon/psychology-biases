'use client'

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

const useAuth = () => {
  const authContext = useContext(AuthContext);
  const user = authContext ? authContext.user : null;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/user/login');
    }
  }, [user, router]);

  return user;
};

export default useAuth;