import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0">
        <Image
          src="/images/logo.png"
          alt="zishop-logo"
          width={120}
          height={25}
          style={{ objectFit: 'contain' }}
          className="cursor-pointer md:-mr-3"
        />
      </a>
    </Link>
  );
};

export default Logo;
