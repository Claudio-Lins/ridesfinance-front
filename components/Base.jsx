import Image from "next/image";
import Clock from "../components/datas/clock";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo";

export default function Base() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black border-[14px] border-black md:border-none md:bg-purple-800">
      <div className="relative h-screen w-full md:w-[400px] md:h-[800px] rounded-[61px] shadow-xl overflow-hidden">
        <div className=" inset-x-0 w-full">
          <Image
            className=" absolute"
            src="/Screen-iphone.png"
            // src="https://res.cloudinary.com/joanitafestacomarte-com/image/upload/v1627503330/Screen-iphone_xk98rm.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="hidden xs:flex">
        <Image
          className="absolute"
          src="/assets/frame.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        </div>
        <div className="absolute w-full flex justify-center items-end bottom-0">
          <Footer />
        </div>

        <div className="relative min-h-screen p-6">
          <div className="sm:mr-2 mr-0 flex justify-end text-white">
            <Clock />
          </div>
          <div className="flex flex-col items-center py-2">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}
