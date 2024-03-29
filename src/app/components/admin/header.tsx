'use client';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border border-x-0 shadow-sm flex justify-end items-center">
      <Image
        className="rounded-full p-2"
        src="/assets/avatar.png"
        width={64}
        height={64}
        alt="BR Rifas"
      />
    </header>
  );
}
