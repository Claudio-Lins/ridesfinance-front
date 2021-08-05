import Link from "next/link";
import Image from "next/image"

export default function Footer(){
    return (
        <div className="z-10 absolute px-2 h-[100px] w-full flex justify-evenly items-center">
            <Link href="/">
                <button className=" cursor-pointer w-[60px] h-[60px] p-2 text-white">
                    <Image src="/assets/FooterIcons/007-gas-station.svg"
                    width={30}
                    height={30}
                    />
                </button>
            </Link>
            <Link href="/">
                <button className=" cursor-pointer w-[60px] h-[60px] p-2 text-white">
                <Image src="/assets/FooterIcons/006-dashboard.svg"
                    width={35}
                    height={35}
                    />
                </button>
            </Link>
            <Link href="/">
                <button className=" cursor-pointer w-[60px] h-[60px] p-2 mb-5 text-white">
                    <Image src="/assets/FooterIcons/009-coin.svg"
                    width={60}
                    height={60}
                    />
                </button>
            </Link>
            <Link href="/">
                <button className=" cursor-pointer w-[60px] h-[60px] p-2 text-white">
                <Image src="/assets/FooterIcons/004-stats.svg"
                    width={30}
                    height={30}
                    />
                </button>
            </Link>
            <Link href="/">
                <button className=" cursor-pointer w-[60px] h-[60px] p-2 text-white">
                <Image src="/assets/FooterIcons/001-finance.svg"
                    width={30}
                    height={30}
                    />
                </button>
            </Link>
        </div>
    )}