import Head from "next/head";
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { MenuGrid } from "@/components/menu-grid"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>La Parrillada del GUAYACO</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Bienvenido a La Parrillada del Guayaco" />
        <meta property="og:description" content="Disfruta de nuestros servicios." />
        <meta property="og:image" content="/Imagen destacada.png" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <MenuGrid />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}

const menuSections = [
  {
    title: "Bebidas y Porciones",
    image: "/Bebidas y Porciones.jpg",
    description: "El complemento perfecto para tu comida.",
    link: "/bebidas",
  },
]
