
import Image from 'next/image'

export default function BaseFooter(){
    return (
        <div className="mx-auto">
          <Image
            src='/assets/btn-footer.svg'
            alt='baseFooter'
            width={60}
            height={60}
            layout='responsive'
            />
          </div>
    )}