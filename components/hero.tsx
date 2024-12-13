import { Coffee, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col max-w-3xl mx-auto mb-12 gap-12 px-8">
      <article className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="text-lg text-pretty order-2 md:order-1 leading-normal">
          <p>
            Bienvenidos 👋 a{" "}
            <strong className="text-white px-1 py-0.5">Gothic Elegance</strong>
            donde la oscuridad se convierte en estilo. 🌙
            Nos complace tenerte aquí en nuestra tienda online, donde la oscuridad y la elegancia se encuentran. Explora nuestra colección única de ropa gótica, diseñada para aquellos que buscan expresar su estilo con autenticidad y sofisticación.
            <strong className="text-white px-1 py-0.5">
            ¡Gracias por visitarnos y esperamos que encuentres todo lo que buscas para completar tu look gótico perfecto!
            </strong>{" "}
          </p>
          <section className="flex gap-4 flex-row flex-wrap my-4">
            <div className="flex gap-4 items-center">
              <Link
                href="/cart"
                className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-center text-black bg-white transition border border-[#400f44] rounded-lg md:px-4 md:py-2 gap-2 hover:bg-[#c971df] md:text-sm"
              >
                <ShoppingCart color="#400f44" />
                Tienda
              </Link>
            </div>
          </section>
        </div>
        <Image
          width={200}
          height={200}
          src="/logo-gotic-elegance3.png"
          alt="Gotic Elegance"
          className="order-1 object-cover w-52 h-full p-1 bg-coffe md:order-2 rotate-3 lg:p-2 aspect-square rounded-2xl dark:bg-red/70 object-center"
        />
      </article>
    </section>
  );
};

export default Hero;