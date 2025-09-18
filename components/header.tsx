"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black/20"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="text-2xl font-bold">
              <span className="text-accent">La Parrillada del</span>
              <br />
              <span className="text-primary text-3xl">GUAYACO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="/asados" className="text-foreground hover:text-accent transition-colors">
              Asados
            </a>
            <a href="/hamburguesas" className="text-foreground hover:text-accent transition-colors">
              Hamburguesas
            </a>
            <a href="/platos" className="text-foreground hover:text-accent transition-colors">
              Platos a la carta
            </a>
            <a href="/bebidas" className="text-foreground hover:text-accent transition-colors">
              Bebidas y porciones
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-glow"
              onClick={() => window.open("https://wa.me/593984347001", "_blank")}
            >
              Pide a domicilio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="/" className="text-foreground hover:text-accent transition-colors">
                Inicio
              </a>
              <a href="/asados" className="text-foreground hover:text-accent transition-colors">
                Asados
              </a>
              <a href="/hamburguesas" className="text-foreground hover:text-accent transition-colors">
                Hamburguesas
              </a>
              <a href="/platos" className="text-foreground hover:text-accent transition-colors">
                Platos a la carta
              </a>
              <a href="/bebidas" className="text-foreground hover:text-accent transition-colors">
                Bebidas y porciones
              </a>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full mt-4"
                onClick={() => window.open("https://wa.me/593984347001", "_blank")}
              >
                Pide a domicilio
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
