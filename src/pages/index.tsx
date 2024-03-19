import Head from "next/head";
import Link from "next/link";
import DiscoverBar from "~/components/atoms/DiscoverBar";
import NavBar from "~/components/organisms/NavBar";

import { api } from "~/utils/api";

export default function Home() {
  const {data: gowns} = api.product.getAll.useQuery()
  console.log(gowns, 'gowns!')

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />


        {gowns?.map((gown) => {
          return (

            <h3 key={gown.categoryId}>{gown.productName}</h3>
          )

        })}

      </main>
    </>
  );
}
