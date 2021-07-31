import Image from "next/image";


export default function Logo() {


  return (
    <div className="mt-2 drop-shadow-lg">
      <Image
      src='/assets/logo.svg'
      width={260}
      height={36}
      />

    </div>
  );
}