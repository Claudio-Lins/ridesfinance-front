import Link from "next/link";
import Image from "next/image";

export default function BaseFooter() {
  return (
    <div className="">
      {/* <div className="text-white text-5xl text-center pb-2 w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center hover:text-gray-400 cursor-pointer">+</div> */}
      <div className=" mx-auto w-[60px] cursor-pointer">
        <Link href="/transaction">
          <a>
            <Image
              src="/assets/btn-footer.svg"
              alt="baseFooter"
              width={60}
              height={60}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
