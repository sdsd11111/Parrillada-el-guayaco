"use client"

import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "../../components/testimonial-carousel";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

const combos = [
	{
		name: "Combo Parrillero Familiar",
		description: "Un festín para toda la familia con costillas, chorizo, y más.",
		price: "$25.00",
		image: "/Asados/Combo Parrillero Familiar.png",
	},
	{
		name: "Combo Costilla Familiar",
		description: "Costillas jugosas acompañadas de guarniciones tradicionales.",
		price: "$20.00",
		image: "/Asados/Combo Costilla Familiar.png",
	},
	{
		name: "Parrillada Personal",
		description: "Una experiencia individual con los mejores cortes de carne.",
		price: "$15.00",
		image: "/Asados/Parrillada Personal.png",
	},
	{
		name: "Chuletón Guayaco",
		description: "El chuletón más jugoso y lleno de sabor que probarás.",
		price: "$18.00",
		image: "/Asados/Chuletón Guayaco.png",
	},
	{
		name: "Punta de Lomo",
		description: "Corte premium con el balance perfecto de sabor y textura.",
		price: "$22.00",
		image: "/Asados/Punta de Lomo.png",
	},
];

export default function Asados() {
	return (
		<main className="bg-background text-foreground">
			<Header />
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center overflow-hidden">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
					poster="/Asados/Hero.png"
				>
					<source src="/videos/hero-asados.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
						Asados al carbón que cuentan una historia.
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8">
						Prepárate para la auténtica experiencia guayaca. Sabor y tradición en
						cada bocado.
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
					{/* Adjusted 'Nuestros Combos y Platos' section to align the last two cards slightly to the right */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{combos.map((combo, index) => (
							<div
								key={index}
								className={`bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
									index >= 3 ? "lg:col-span-1 lg:ml-16" : ""
								}`}
							>
								<Image
									src={combo.image}
									alt={combo.name}
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-xl font-bold mb-2 text-center">
										{combo.name}
									</h3>
									<p className="text-sm text-muted-foreground mb-4 text-center">
										{combo.description}
									</p>
									<span className="text-lg font-semibold text-primary block text-center">
										{combo.price}
									</span>
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
					<Testimonials />
				</div>
			</section>
			<Footer />
		</main>
	);
}