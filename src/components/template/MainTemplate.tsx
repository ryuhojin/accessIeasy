import { Noto_Sans_KR } from "next/font/google";
import { Footer, Header } from "../base";
import styles from "./styles/MainTemplate.module.css";

interface BaseTemplateProp {
  children: JSX.Element | JSX.Element[];
}

const font = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

const BaseTemplate = ({ children }: BaseTemplateProp) => {
  return (
    <main className={`${styles.Container} ${font.className}`}>
      <Header />
      <div className={styles.Wrapper}>{children}</div>
      <Footer />
    </main>
  );
};
export default BaseTemplate;
