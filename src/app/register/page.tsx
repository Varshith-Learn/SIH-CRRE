'use client';

import { useEffect } from 'react';

export default function RegisterPage() {
  useEffect(() => {
    window.location.replace('https://sih-crre.vercel.app/register');
  }, []);

  return null;
}
