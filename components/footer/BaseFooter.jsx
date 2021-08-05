
import Image from 'next/image'

export default function BaseFooter(){
    return (
        <div className="mx-auto">
          <Image
            src='/assets/base-footer.svg'
            alt='baseFooter'
            width={350}
            height={80}
            layout='responsive'
            objectFit='cover'
            />
          </div>
    )}