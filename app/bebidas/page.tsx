"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const bebidas = [
	{
		category: "Jugos Naturales",
		items: [
			{ name: "Jugo de Naranja", price: "$3.00", image: "/Bebidas y porciones/Jugo de Naranja.jpg" },
			{ name: "Jugo de Piña", price: "$3.00", image: "/Bebidas y porciones/Jugo de Piña.jpg" },
			{ name: "Jugo de Mora", price: "$3.50", image: "/Bebidas y porciones/Jugo de Mora.jpg" },
		],
	},
	{
		category: "Gaseosas",
		items: [
			{ name: "Coca-Cola", price: "$2.50", image: "/Bebidas y porciones/coca-cola.jpg" },
			{ name: "Sprite", price: "$2.50", image: "/Bebidas y porciones/Sprite.jpg" },
			{ name: "Fanta", price: "$2.50", image: "/Bebidas y porciones/Fanta.jpg" },
		],
	},
	{
		category: "Cervezas",
		items: [
			{ name: "Pilsener", price: "$3.50", image: "/Bebidas y porciones/Pilsener.jpg" },
			{ name: "Club", price: "$4.00", image: "/Bebidas y porciones/Club verde.jpg" },
			{ name: "Corona", price: "$5.00", image: "/Bebidas y porciones/Corona.jpg" },
		],
	},
];

const porciones = [
	{ name: "Papas Fritas", price: "$3.00", image: "/Bebidas y porciones/Papas Fritas.jpg" },
	{ name: "Patacones", price: "$3.50", image: "/Bebidas y porciones/Patacones.jpg" },
	{ name: "Maduros Fritos", price: "$3.00", image: "/Bebidas y porciones/Maduros Fritos.jpg" },
	{ name: "Arroz", price: "$2.00", image: "/Bebidas y porciones/Arroz.jpg" },
];

export default function Bebidas() {
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
					poster="/Bebidas y porciones/Hero.png"
				>
					<source src="/videos/hero-bebidas.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
						El complemento perfecto para tu comida.
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8">
						Desde jugos naturales hasta los mejores acompañamientos, todo para una experiencia
						completa.
					</p>
					<Button
						size="lg"
						className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
						onClick={() => {
							const bebidasSection = document.getElementById("bebidas");
							bebidasSection?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Ver Bebidas y Porciones
					</Button>
				</div>
			</section>

			{/* Bebidas Section */}
			<section id="bebidas" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Bebidas</h2>
					{bebidas.map((categoria, index) => (
						<div key={index} className="mb-12">
							<h3 className="text-2xl font-bold mb-6">{categoria.category}</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{categoria.items.map((item, itemIndex) => (
									<div
										key={itemIndex}
										className="bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
									>
										<Image
											src={item.image}
											alt={item.name}
											width={400}
											height={300}
											className="w-full h-48 object-cover"
										/>
										<div className="p-4">
											<h4 className="text-lg font-bold mb-2">{item.name}</h4>
											<span className="text-md font-semibold text-primary">
												{item.price}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Porciones Section */}
			<section className="py-20 bg-secondary/50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Porciones</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{porciones.map((porcion, index) => (
							<div
								key={index}
								className="bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
							>
								<Image
									src={porcion.image}
									alt={porcion.name}
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h4 className="text-lg font-bold mb-2">{porcion.name}</h4>
									<span className="text-md font-semibold text-primary">
										{porcion.price}
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