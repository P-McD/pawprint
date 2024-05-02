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
        <section key={productId} className="col-span-2 lg:col-span-3">

            <img className="w-[168px] h-[241px] lg:w-[250px] mb-[10px]"src={productImage} alt={productName} />
            <H3Title title={productName} />
            <div className="relative bottom-0">
            <MediumText>£{productPrice}</MediumText>
            </div>

        </section>
    )
}
export default ItemCard