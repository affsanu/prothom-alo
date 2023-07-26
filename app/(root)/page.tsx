"use client";
import Banner2 from '@/components/Banner2';
import HeroSection from '@/components/sections/HeroSection';
import { useState, useEffect } from 'react'

const SettingPage = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null
  }

  return (
    <div>
      <HeroSection />
      <Banner2 />
    </div>
  )
}

export default SettingPage;