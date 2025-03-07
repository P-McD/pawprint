import Head from "next/head";
import { useParams } from "next/navigation";
import { H1Title, H2Title } from "~/components/bosons/TitleStyles";
import ItemCardList from "~/components/organisms/ItemCardList";


import { api } from "~/utils/api";

export default function SingleProduct(){
    let params = useParams<{id: string}>()
    const { data: product } =  api.product.getSingleProduct.useQuery(params);
    console.log(product)

    if (!product) return(<><H1Title title="404"/></>)
    return (
        <>
        <Head>
            <title>{product.productName} - pawprint</title>
        </Head>
        <main>
            <H2Title title={product.productName}></H2Title>
        </main>
        </>
    );
}
