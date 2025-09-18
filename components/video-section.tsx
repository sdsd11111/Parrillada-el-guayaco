"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Vive la Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre el proceso artesanal detrás de nuestros asados al carbón
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative bg-black rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src="/parrilla-asados-proceso-cocina-carb-n-humo.jpg"
              alt="Video de propaganda del negocio"
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">El Arte del Asado</h3>
              <p className="text-sm opacity-90">Mira cómo preparamos nuestras famosas costillas</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-accent"
                onClick={() => setIsVideoOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="bg-black rounded-lg overflow-hidden">
                <video controls autoPlay className="w-full h-[300px] md:h-[500px]" poster="/parrilla-asados-proceso.jpg">
                  <source src="/placeholder.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
