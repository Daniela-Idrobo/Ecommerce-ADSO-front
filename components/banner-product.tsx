import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Experiencia unica para todos</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Gothic Elegance</h4>
        <p className="my-2 text-lg">
          Despierta tus sentidos.
        </p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] lg:h-[600px] bg-[url('/baneer.jpeg')] bg-center mt-5" />
    </>
  );
};

export default BannerProduct;