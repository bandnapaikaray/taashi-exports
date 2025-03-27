'use client';

import { useState, useEffect } from 'react';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { ChevronDown, Mail, PhoneIcon } from 'lucide-react';
import {
  BsFacebook,
  BsLinkedin,
  BsPinterest,
  BsSpotify,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { usePathname } from 'next/navigation';

export default function SiteBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pathname = usePathname();
  if (pathname.includes('/shopify')) {
    return null;
  }

  return (
    <div
      className="group relative top-0 bg-teal-600 px-4 text-white transition-all duration-300"
      style={{
        width: isMobile ? '100%' : 'auto',
      }}
    >
      <div className="flex h-6 items-center justify-between">
        {isMobile ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs">
                <PhoneIcon className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 text-xs">
                <Mail className="h-4 w-4" />
              </div>
            </div>

            <div className="text-sm font-medium text-center underline">
              Ready-to-Ship Cut-Off: DEC 13
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 overflow-hidden rounded-full border border-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="India Flag"
                  className="h-full w-full object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs">
                <PhoneIcon className="h-4 w-4" />
                <span className="hidden lg:inline-block">+61 1300 977 619</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline-block">EMAIL US</span>
              </div>
            </div>

            <div className="text-sm font-medium text-center underline">
              Last Day For Ready to Ship Orders: December 13
            </div>

            <div className="flex items-center gap-2">
              <InstagramLogoIcon className="h-4 w-4" />
              <BsFacebook className="h-4 w-4" />
              <BsYoutube className="h-4 w-4" />
              <BsPinterest className="h-4 w-4" />
              <BsTiktok className="h-4 w-4" />
              <BsTwitter className="h-4 w-4" />
              <BsLinkedin className="h-4 w-4" />
              <BsSpotify className="h-4 w-4" />

              <div className="h-5 w-5 overflow-hidden rounded-full border border-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="India Flag"
                  className="h-full w-full object-cover"
                />
              </div>

              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
