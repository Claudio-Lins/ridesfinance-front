import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Clock from "../components/datas/clock";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo";

export default function Login() {
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
        <div className="absolute w-full flex justify-center items-end bottom-0">
          <Footer />
        </div>

        <div className="relative sm:mr-7 mr-4 mt-6 flex justify-end text-white">
          <Clock />
        </div>
        <div className="flex flex-col items-center mt-6">
          <Logo />
        </div>
        <div className="relative w-full px-10 mt-16">
          <div className=" flex flex-col items-center bg-white rounded-xl shadow-md">
            <h2 className="mt-6 text-2xl font-bold tracking-wider">Welcome</h2>
            <form action="" className="w-full p-8">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className=" peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent text-gray-900 focus:outline-none focus:border-pink-600"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 transition-all text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs"
                >
                  Email Address
                </label>
              </div>
              <div className="mt-6 relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent text-gray-900 focus:outline-none focus:border-pink-600"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 transition-all text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs"
                >
                  Password
                </label>
              </div>
              <div className='w-full flex flex-col justify-center mt-6'>
                <Link href='/resume'><button className="bg-pink-600 p-2 rounded-md w-full text-white">Login</button></Link>
                <button className="text-xs text-pink-600 mt-2">Esqueceu seu password?</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
