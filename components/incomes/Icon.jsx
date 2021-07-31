import Image from "next/image"

export default function Icon(props) {
    return (
        <>
            <div>
                <Image
                src={props.src || "/assets/check.svg"}
                layout='fixed'
                width={20} 
                height={20} 
                />
            </div>
        </>
    )
}