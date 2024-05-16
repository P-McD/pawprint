import Link from "next/link";

const DiscoverBar = () => {
  return (
    <section className="bg-warmGrey border-b-20px  h-10 w-screen border-red-900 pb-1 pt-2  text-center text-sm">
      New season just launched - <Link className="underline" href="/new-in">discover more</Link> 
    </section>
  );
};
export default DiscoverBar;
