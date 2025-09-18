"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    comment:
      "¡Las costillas más deliciosas que he probado en Loja! El sabor costeño es auténtico y las porciones son generosas. Definitivamente volveré.",
    avatar: "/images/maria-gonzalez.jpg",
  },
  {
    name: "Carlos Mendoza",
    comment:
      "La parrillada familiar es perfecta para compartir. La carne está en su punto exacto y el ambiente es muy acogedor. Excelente servicio.",
    avatar: "/images/carlos-mendoza.jpg",
  },
  {
    name: "Ana Rodríguez",
    comment:
      "Desde que probé sus hamburguesas, no he encontrado nada igual en la ciudad. El sabor es único y los precios son justos. ¡Recomendado 100%!",
    avatar: "/images/ana-rodriguez.jpg",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Card className="p-6">
        <CardContent>
          <div className="flex items-center gap-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].comment}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </div>
  );
}