import Link from "next/link";
import Image from "next/image";

export default function BaseFooter() {
  return (
    <div className="mx-auto relative">
      <div className="absolute w-full py-8 z-10 flex items-center justify-between">
        <div className="text-white text-xs flex w-2/5 justify-evenly">
          <div>
            <Link href="/">
              <button className="">Kms</button>
            </Link>
          </div>
          <div>
            <Link href="/">
              <button className="">Gas</button>
            </Link>
          </div>
        </div>
        <div className="text-white text-xs flex w-2/5 justify-evenly">
        <div>
            <Link href="/">
              <button className="">Resumo</button>
            </Link>
          </div>
          <div>
            <Link href="/">
              <button className="">Gas</button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className=" absolute"
        src="/assets/base-footer.svg"
        alt="baseFooter"
        width={350}
        height={80}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
}
