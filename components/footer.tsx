"use client"

import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const schedules = [
    { day: "Lunes", hours: "3:00 p.m. - 10:30 p.m." },
    { day: "Martes", hours: "Cerrado" },
    { day: "Miércoles", hours: "3:30 p.m. - 10:30 p.m." },
    { day: "Jueves", hours: "3:30 p.m. - 10:30 p.m." },
    { day: "Viernes", hours: "3:30 p.m. - 10:30 p.m." },
    { day: "Sábado", hours: "1:30 p.m. - 9:30 p.m." },
    { day: "Domingo", hours: "12:30 p.m. - 5:30 p.m." },
  ]

  return (
    <footer id="contacto" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map and Location */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Ubicación
            </h3>
            <div className="bg-muted rounded-lg h-48 mb-4 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Mapa Interactivo
                <br />
                <span className="text-sm">Calle 24 de Mayo, entre Lourdes y Mercadillo</span>
              </p>
            </div>
            <p className="text-sm text-muted-foreground">Calle 24 de Mayo, entre Lourdes y Mercadillo, Loja</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Contacto
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Teléfono</p>
                <a href="tel:+593984347001" className="text-primary hover:text-primary/80 transition-colors text-lg">
                  098 434 7001
                </a>
              </div>

              <div>
                <p className="font-semibold mb-3">Síguenos en:</p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
                    onClick={() => window.open("https://facebook.com/parrillada-guayaco", "_blank")}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
                    onClick={() => window.open("https://instagram.com/parrillada-guayaco", "_blank")}
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white w-full"
                  onClick={() => window.open("https://wa.me/593984347001", "_blank")}
                >
                  Contáctanos por WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Horarios de Atención
            </h3>
            <div className="space-y-3">
              {schedules.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-muted/20">
                  <span
                    className={`font-medium ${schedule.hours === "Cerrado" ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {schedule.day}
                  </span>
                  <span className={`text-sm ${schedule.hours === "Cerrado" ? "text-muted-foreground" : "text-accent"}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted/20 mt-12 pt-8 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">
              <span className="text-accent">La Parrillada del</span>
              <span className="text-primary"> GUAYACO</span>
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            Diseñado por @cesarreyesjaramillo.com 2025. La Parrillada del Guayaco. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
