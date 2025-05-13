import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => (
  <span className="flex items-center gap-2 text-primary-main font-bold text-xl tracking-wide">
    <Image
      src="/assets/image/logo.png"
      alt="Malinau Maps Logo"
      width={32}
      height={32}
      priority
      className="rounded-full"
    />
    Malinau Maps
  </span>
);

export default Logo; 