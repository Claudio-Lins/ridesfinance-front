import Head from "next/head";
import Image from "next/image";
import Clock from '../components/datas/clock'
import DaysOfWeek from '../components/datas/DaysOfWeek'
import Logo from '../components/logo'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 bg-black sm:bg-purple-50">
      <Head>
        <title>Ride$Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-screen w-full md:h-[712px] md:w-[350px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black">
        <Image className=" absolute"
          src="https://res.cloudinary.com/joanitafestacomarte-com/image/upload/v1627503330/Screen-iphone_xk98rm.png"
          alt="Picture of the author"
          layout="fill"
        />
        <div className="absolute top-0 inset-x-0">
          <div className="h-6 w-40 mx-auto bg-black rounded-b-2xl"></div>
        </div>
        <div className="relative">
          <div className="mt-2 mr-5 flex justify-end space-x-1 text-white">
            <Clock />
          </div>
        </div>
        <div className='relative flex flex-col items-center min-h-screen py-2'>
          <Logo />
          <div>
            <DaysOfWeek />
          </div>
        </div>
      </main>
    </div>
  );
}
