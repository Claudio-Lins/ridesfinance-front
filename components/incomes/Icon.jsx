import Image from "next/image"

export default function Icon(props) {
    return (
        <>
            <div>
                <Image
                src={props.src || "/assets/check.svg"}
                layout='fixed'
                width={13} 
                height={13} 
                />
            </div>
        </>
    )
}