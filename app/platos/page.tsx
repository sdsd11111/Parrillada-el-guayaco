"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const platos = [
	{
		name: "Arroz con menestra y chuletón",
		description: "Un plato tradicional con arroz, menestra y chuletón jugoso.",
		price: "$8.50",
		image: "/Platos a la carta/Arroz con menestra y chuletón.jpg",
	},
	{
		name: "Picaña de res",
		description: "Carne de res premium con un sabor excepcional.",
		price: "$12.00",
		image: "/Platos a la carta/Picaña de res.jpg",
	},
	{
		name: "Lomo saltado guayaco",
		description: "Un clásico ecuatoriano con un toque especial.",
		price: "$10.00",
		image: "/Platos a la carta/Lomo saltado guayaco.jpg",
	},
	{
		name: "Camarones apanados",
		description: "Camarones crujientes acompañados de salsa tártara.",
		price: "$9.50",
		image: "/Platos a la carta/Camarones apanados.jpg",
	},
];

const sugerenciaDelChef = {
	name: "Sugerencia del Chef",
	description: "Prueba nuestro plato estrella: Picaña de res con salsa especial.",
	images: [
		"/Platos a la carta/Sugerencias del chef 1.jpg",
		"/Platos a la carta/Sugerencias del chef 2.jpg",
		"/Platos a la carta/Sugerencias del chef 3.jpg",
	],
};

export default function Platos() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sugerenciaDelChef.images.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

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
					poster="/Platos a la carta/Hero.png"
				>
					<source src="/videos/hero-platos.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
						Placeres a tu gusto.
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8">
						Explora un menú diverso, diseñado para satisfacer cada antojo. Calidad y
						sabor en cada elección.
					</p>
					<Button
						size="lg"
						className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
						onClick={() => {
							const menuSection = document.getElementById("menu");
							menuSection?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Explorar nuestro menú
					</Button>
				</div>
			</section>

			{/* Platos Section */}
			<section id="menu" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
						Nuestros Platos
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{platos.map((plato, index) => (
							<div
								key={index}
								className={`bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
									index === platos.length - 1 ? "mx-auto" : ""
								}`}
							>
								<Image
									src={plato.image}
									alt={plato.name}
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-xl font-bold mb-2 text-center">
										{plato.name}
									</h3>
									<p className="text-sm text-muted-foreground mb-4 text-center">
										{plato.description}
									</p>
									<span className="text-lg font-semibold text-primary block text-center">
										{plato.price}
									</span>
								</div>
							</div>
						))}
					</div>

					{/* Sugerencia del Chef Section */}
					<h3 className="text-2xl font-bold text-center mt-16 mb-8">
						Sugerencia del Chef
					</h3>
					<div className="relative w-full h-[600px] overflow-hidden">
						{sugerenciaDelChef.images.map((image, index) => (
							<div
								key={index}
								className={`absolute inset-0 transition-opacity duration-1000 ${
									index === currentImageIndex ? "opacity-100" : "opacity-0"
								}`}
							>
								<Image
									src={image}
									alt={sugerenciaDelChef.name}
									fill
									className="w-full h-full object-cover"
								/>
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