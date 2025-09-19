"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const hamburguesas = [
	{
		name: "La Cheff",
		image: "/Hamburguesas/Generated Image September 17, 2025 - 5_23PM.png",
	},
	{
		name: "Tentadora",
		image: "/Hamburguesas/Generated Image September 17, 2025 - 5_24PM.png",
	},
	{
		name: "Doble Cuarto de Libra",
		image: "/Hamburguesas/Generated Image September 17, 2025 - 5_25PM.png",
	},
	{
		name: "Holly Chicken",
		image: "/Hamburguesas/Generated Image September 17, 2025 - 5_26PM.png",
	},
	{
		name: "Papas Fritas",
		image: "/Hamburguesas/Papas Fritas.png",
	},
	{
		name: "Aros de Cebolla",
		image: "/Hamburguesas/Aros de Cebolla.png",
	},
	{
		name: "Salsas",
		image: "/Hamburguesas/Salsas.png",
	},
];

const complementos = [
	{
		name: "Papas Fritas",
		price: "$3.00",
		image: "/Hamburguesas/Papas Fritas.png",
	},
	{
		name: "Aros de Cebolla",
		price: "$3.50",
		image: "/Hamburguesas/Aros de Cebolla.png",
	},
	{
		name: "Salsas",
		price: "$1.50",
		image: "/Hamburguesas/Salsas.png",
	},
];

export default function Hamburguesas() {
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
					poster="/Hamburguesas/Hero.png"
				>
					<source src="/videos/hero-hamburguesas.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
						Más que una hamburguesa, una obra de arte.
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8">
						Olvídate de lo tradicional. Nuestras creaciones te harán vivir una
						explosión de sabores inolvidable.
					</p>
					<Button
						size="lg"
						className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
						onClick={() => {
							const gallerySection = document.getElementById("gallery");
							gallerySection?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Descubre nuestras creaciones
					</Button>
				</div>
			</section>

			{/* Hamburguesas Section */}
			<section id="gallery" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
						Galería de Creaciones
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
						{hamburguesas.map((hamburguesa, index) => (
							<div
								key={index}
								className="bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
							>
								<Image
									src={hamburguesa.image}
									alt={hamburguesa.name}
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-xl font-bold mb-2 text-center">
										{hamburguesa.name}
									</h3>
								</div>
							</div>
						))}
					</div>

					{/* Complementos Section */}
					<h3 className="text-2xl font-bold text-center mt-16 mb-8">
						Complementos
					</h3>
					<div className="flex gap-4 overflow-x-auto justify-center">
						{complementos.map((complemento, index) => (
							<div
								key={index}
								className="bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-[200px]"
							>
								<Image
									src={complemento.image}
									alt={complemento.name}
									width={200}
									height={150}
									className="w-full h-32 object-cover"
								/>
								<div className="p-4">
									<h4 className="text-lg font-bold mb-2 text-center">
										{complemento.name}
									</h4>
									<span className="text-md font-semibold text-primary">
										{complemento.price}
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