import { TextButton } from "../bosons/TextButton"

export const BagOrFavourite = () => {


    return(
        <div className="items-center justify-items-center "><TextButton primary={true} action={}>Add to Bag</TextButton>
        <TextButton primary={false} action={}>Add to Wishlist</TextButton></div>
    )
}