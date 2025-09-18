"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Award, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    src: "/costillas-gigantes-al-carb-n-parrilla-restaurante.jpg",
    alt: "Costillas gigantes al carbón",
    caption: "Costillas de más de 1 kilo",
  },
  {
    src: "/interior-del-restaurante-parrillada-ambiente-acoge.jpg",
    alt: "Interior del restaurante",
    caption: "Ambiente acogedor y familiar",
  },
  {
    src: "/parrilla-con-brasas-carb-n-fuego-asados.jpg",
    alt: "Parrilla con brasas",
    caption: "Cocción tradicional al carbón",
  },
]

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={carouselImages[currentImageIndex].src || "/placeholder.svg"}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-[500px] object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold">{carouselImages[currentImageIndex].caption}</p>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-accent" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Quiénes Somos</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Somos <span className="text-accent font-semibold">La Parrillada del Guayaco</span>, el único lugar en
                Loja donde puedes disfrutar del auténtico sabor de Guayaquil.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos especializamos en las{" "}
                <span className="text-primary font-semibold">gigantescas costillas al carbón de más de un kilo</span>,
                preparadas con la sazón tradicional costeña que ha conquistado el paladar de los lojanos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">El Original</h3>
                <p className="text-sm text-muted-foreground">Auténtico sabor costeño</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-semibold text-foreground">Tradición</h3>
                <p className="text-sm text-muted-foreground">Recetas familiares</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">Único en Loja</h3>
                <p className="text-sm text-muted-foreground">Costillas gigantes</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-8"
              onClick={() => window.open("https://wa.me/593984347001", "_blank")}
            >
              Conoce Más Sobre Nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
