'use client'; // Required if using App Router components inside pages/layout
import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      // Check if adsbygoogle is defined before pushing (runs only in browser)
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="w-full">
    <ins 
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6836466532865002"
      data-ad-slot="9563897694"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    </div>
  );
};
export default AdBanner;
