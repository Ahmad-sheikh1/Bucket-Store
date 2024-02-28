import Image from "next/image";
import styles from "./page.module.css";
import Products from "@/Components/Products";
import Bucket from "@/Components/Bucket";

export default function Home() {
  return (
    <main >
      <Products />
      <Bucket />
    </main>
  );
}
