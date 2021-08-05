import Head from "next/head";
import Image from "next/image";
import Clock from "../components/datas/clock";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo";

export default function transaction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 bg-black tablet:bg-yellow-600">
      <Head>
        <title>Ride$Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen w-full md:h-[800px] md:w-[350px] tablet:max-w-[400px] tablet:max-h-[800px] rounded-[61px] shadow-xl overflow-hidden">
        <div className=" inset-x-0">
          <Image
            className=" absolute"
            src="/Screen-iphone.png"
            // src="https://res.cloudinary.com/joanitafestacomarte-com/image/upload/v1627503330/Screen-iphone_xk98rm.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Image
          className="absolute"
          src="/assets/frame.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <div className=" absolute w-full flex justify-center items-end bottom-0">
          <Footer />
        </div>

        <div className="relative min-h-screen  p-6">
          <div className="tablet:mr-2 mr-4 flex justify-end text-white">
            <Clock />
          </div>
          <div className="flex flex-col items-center py-2">
            <Logo />
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg bg-opacity-70 mt-4 p-4">
            <div className="text-xl text-center">
                Base
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
