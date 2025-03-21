import Head from "next/head";
import { useParams } from "next/navigation";
import { H1Title, H2Title } from "~/components/bosons/TitleStyles";
import ItemCardList from "~/components/organisms/ItemCardList";
import SingleItemDetails from "~/components/organisms/SingleItemDetails";

import { api } from "~/utils/api";

export default function SingleProduct() {
  let params = useParams<{ id: string }>();
  const { data: product } = api.product.getSingleProduct.useQuery(params);
  console.log(product);

  if (!product)
    return (
      <>
        <H1Title title="404" />
      </>
    );
  return (
    <>
      <Head>
        <title>{product.productName} | pawprint</title>
      </Head>
      <main>
        <div className="mx-4 my-4 grid grid grid-cols-4 justify-center gap-[24px] md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-6 ">
          <SingleItemDetails product={product}></SingleItemDetails>
        </div>
      </main>
    </>
  );
}
