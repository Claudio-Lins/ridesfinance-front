import Head from "next/head";
import Image from "next/image";
import Clock from "../components/datas/clock";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo";
import DaysOfWeek from "../components/datas/DaysOfWeek";
import Incomes from "../components/incomes/Incomes";
import Resumes from "../components/resumes/Resumes";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black border-[14px] border-black md:border-none md:bg-purple-800">
      <Head>
        <title>Ride$Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen w-full md:w-[400px] md:h-[800px] rounded-[61px] shadow-xl overflow-hidden">
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
        <div className=" absolute w-full flex justify-center items-end bottom-0">
          <Footer />
        </div>

        <div className="relative min-h-screen  p-6">
          <div className="md:mr-2 mr-4 flex justify-end text-white">
            <Clock />
          </div>
          <div className="flex flex-col items-center py-2">
            <Logo />
          </div>
          <div>
            <DaysOfWeek />
          </div>
          <div className="w-full px-1 mt-4">
            <Incomes />
          </div>
          <div className="w-full px-2 mt-4">
            <Resumes />
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg bg-opacity-70 mt-4">
            tes
          </div>
        </div>
      </main>
    </div>
  );
}
