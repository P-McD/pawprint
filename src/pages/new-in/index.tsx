import Head from "next/head";
import ItemCardList from "~/components/organisms/ItemCardList";


import { api } from "~/utils/api";

export default function NewIn() {
  const { data: gowns } = api.product.getAll.useQuery();
  console.log(gowns, "gowns!");

  return (
    <>
      <Head>
        <title>Pawprint</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {gowns && <ItemCardList dataToList={gowns} />}
      </main>
    </>
  );
}
