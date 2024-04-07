import { PropsWithChildren } from "react"
import Image from "next/image"
import { H3Title } from "../bosons/TitleStyles" //todo - change to card title vs font title
import { MediumText } from "../bosons/FontStyles"

export type ItemCardType = {
    productId: string
    productName: string
    productImage: string
    productPrice: number
}

const ItemCard = ({productId, productName, productImage, productPrice } : ItemCardType) => {
    return (
        <section key={productId} className=" w-[168px] h-[330px] lg:w-[252px] m-4">

            <img className=" w-168px h-[241px] mb-[10px]"src={productImage} alt={productName} />
            <H3Title title={productName} />
            <div className="absolute bottom-0">
            <MediumText>£{productPrice}</MediumText>
            </div>

        </section>
    )
}
export default ItemCard