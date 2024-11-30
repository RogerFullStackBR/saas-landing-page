import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="relative w-[148px] h-[22px] flex">
      <Image src="/logo.svg" fill alt="" className="object-contain" />
    </Link>
  );
}
