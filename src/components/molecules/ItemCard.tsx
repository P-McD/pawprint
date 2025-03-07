import { H3Title } from "../bosons/TitleStyles" //todo - change to card title vs font title
import { MediumText } from "../bosons/FontStyles"
import Link from "next/link"

export type ItemCardType = {
    productId: string
    productName: string
    productImage: string
    productPrice: number
}

const ItemCard = ({productId, productName, productImage, productPrice } : ItemCardType) => {

    return (
        <section key={productId} className="col-span-2 lg:col-span-3 w-full"><Link href={`/product/${productId}`}>

            <img className="w-full mb-[10px]"src={productImage} alt={productName} />
            <H3Title title={productName} />
            <div className="relative bottom-0">
            <MediumText>£{productPrice}</MediumText>
            </div>
</Link>
        </section>
    )
}
export default ItemCard