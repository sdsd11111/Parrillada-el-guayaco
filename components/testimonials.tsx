"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María González",
    rating: 5,
    comment:
      "¡Las costillas más deliciosas que he probado en Loja! El sabor costeño es auténtico y las porciones son generosas. Definitivamente volveré.",
    location: "Loja, Ecuador",
    avatar: "/mujer-sonriente-cliente-restaurante-perfil.jpg",
  },
  {
    name: "Carlos Mendoza",
    rating: 5,
    comment:
      "La parrillada familiar es perfecta para compartir. La carne está en su punto exacto y el ambiente es muy acogedor. Excelente servicio.",
    location: "Loja, Ecuador",
    avatar: "/hombre-sonriente-cliente-restaurante-perfil.jpg",
  },
  {
    name: "Ana Rodríguez",
    rating: 5,
    comment:
      "Desde que probé sus hamburguesas, no he encontrado nada igual en la ciudad. El sabor es único y los precios son justos. ¡Recomendado 100%!",
    location: "Loja, Ecuador",
    avatar: "/mujer-joven-sonriente-cliente-restaurante-perfil.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={`${testimonials[currentIndex].name} profile`}
                  className="w-20 h-20 rounded-full object-cover border-4 border-accent"
                />
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              <div>
                <p className="font-semibold text-accent text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
