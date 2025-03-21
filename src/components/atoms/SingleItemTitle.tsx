import { LargeText } from '../bosons/FontStyles'
import { H2LargeTitle, H2Title } from '../bosons/TitleStyles'

import { ProductType } from '../organisms/SingleItemDetails'
const SingleItemTitle = ({product} : ProductType) => {
  return (
    <>
    <H2Title title={product.productName} />
    <LargeText>£{product.productPrice}</LargeText>
    </>
  )
}

export default SingleItemTitle