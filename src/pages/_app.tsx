import { type AppType } from "next/app";
import { Inter, Mandali } from "next/font/google";
import NavBar from "~/components/organisms/NavBar";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mandali = Mandali({
  subsets : ["latin"],
  weight: "400"
})
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={mandali.className}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
