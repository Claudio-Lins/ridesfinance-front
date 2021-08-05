import Head from "next/head";
import Image from "next/image";
import Clock from "../components/datas/clock";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo";

export default function transaction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 bg-purple-500 sm:bg-purple-50">
      <Head>
        <title>Ride$Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen w-full md:h-[800px] md:w-[350px] tablet:max-w-[400px] tablet:max-h-[800px] rounded-[60px] shadow-xl overflow-hidden">
        <div className="top-0 inset-x-0">
          <Image
            className=" absolute"
            src="/Screen-iphone.png"
            // src="https://res.cloudinary.com/joanitafestacomarte-com/image/upload/v1627503330/Screen-iphone_xk98rm.png"
            alt="Picture of the author"
            layout="fill"
          />
        </div>
        <Image
          className=" absolute"
          src="/assets/frame.svg"
          alt="Picture of the author"
          layout="fill"
        />
        <div className="mt-5 mr-9 flex justify-end space-x-1 text-white relative">
          <Clock />
        </div>
        <div className=" absolute w-full flex justify-center items-end bottom-0">
            <Footer />
        </div>
        <div className="relative flex flex-col items-center min-h-screen py-2">
          <Logo />
        </div>
      </main>
    </div>
  );
}
