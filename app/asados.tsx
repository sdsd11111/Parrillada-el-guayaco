"use client"

import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import Image from "next/image";

const combos = [
  {
    name: "Combo Parrillero Familiar",
    description: "Un festín para toda la familia con costillas, chorizo, y más.",
    price: "$25.00",
    image: "/images/combo-parrillero-familiar.jpg",
    whatsappLink: "https://wa.me/593984347001?text=Quiero%20el%20Combo%20Parrillero%20Familiar",
  },
  {
    name: "Combo Costilla Familiar",
    description: "Costillas jugosas acompañadas de guarniciones tradicionales.",
    price: "$20.00",
    image: "/images/combo-costilla-familiar.jpg",
    whatsappLink: "https://wa.me/593984347001?text=Quiero%20el%20Combo%20Costilla%20Familiar",
  },
  {
    name: "Parrillada Personal",
    description: "Una experiencia individual con los mejores cortes de carne.",
    price: "$15.00",
    image: "/images/parrillada-personal.jpg",
    whatsappLink: "https://wa.me/593984347001?text=Quiero%20la%20Parrillada%20Personal",
  },
  {
    name: "Chuletón Guayaco",
    description: "El chuletón más jugoso y lleno de sabor que probarás.",
    price: "$18.00",
    image: "/images/chuleton-guayaco.jpg",
    whatsappLink: "https://wa.me/593984347001?text=Quiero%20el%20Chuletón%20Guayaco",
  },
  {
    name: "Punta de Lomo",
    description: "Corte premium con el balance perfecto de sabor y textura.",
    price: "$22.00",
    image: "/images/punta-de-lomo.jpg",
    whatsappLink: "https://wa.me/593984347001?text=Quiero%20la%20Punta%20de%20Lomo",
  },
];

export default function Asados() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-asados-poster.jpg"
        >
          <source src="/videos/hero-asados.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Asados al carbón que cuentan una historia.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Prepárate para la auténtica experiencia guayaca. Sabor y tradición en cada bocado.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
            onClick={() => {
              const combosSection = document.getElementById("combos");
              combosSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver todos los Combos
          </Button>
        </div>
      </section>

      {/* Combos Section */}
      <section id="combos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Combos y Platos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {combos.map((combo, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={combo.image}
                  alt={combo.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{combo.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{combo.price}</span>
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => window.open(combo.whatsappLink, "_blank")}
                    >
                      Pedir por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <TestimonialCarousel />
        </div>
      </section>
    </main>
  );
}