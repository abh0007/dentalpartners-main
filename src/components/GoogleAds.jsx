import React, { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    if (window) {
      // Initialize Google Ads script
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1538238081728138"
        data-ad-slot="4249380625"
        data-ad-format="auto"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </div>
  );
};

export default GoogleAd;
