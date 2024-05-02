import Link from "next/link"
import { H3Title } from "../bosons/TitleStyles"
//trying to make dynamic but start col works weirdly
type CategoryItemType = {
    title: string,
    linkTo: string,
    index: number
}

const CategoryItem = ({title, linkTo, index}: CategoryItemType) => {
    const startCol = index === 0? index += 2 : index += 4
    return (
        <Link
          className={`col-span-2 col-start-${startCol} justify-self-center`}
          href={linkTo}
        >
          <H3Title title={title} />
        </Link>
    )

}

export default CategoryItem