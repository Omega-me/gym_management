'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <></>;
};

export default Redirect;
