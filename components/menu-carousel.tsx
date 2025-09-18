"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Flame, Zap, Beef, UtensilsCrossed } from "lucide-react"

const menuCategories = [
	{
		title: "Asados",
		icon: Flame,
		items: [
			"Combo Parrillero Familiar",
			"Combo Costilla Familiar",
			"Parrillada Personal",
		],
		color: "bg-primary",
		description: "Las costillas más gigantescas de Loja",
		link: "/asados",
	},
	{
		title: "Alitas",
		icon: Zap,
		items: ["Combo Personal", "Combo Ideal", "Combo Familiar"],
		color: "bg-accent",
		description: "Crujientes y jugosas",
	},
	{
		title: "Hamburguesas y Sanduches",
		icon: Beef,
		items: [
			"La Cheff",
			"Tentadora",
			"Doble Cuarto de Libra",
			"Holly Chicken",
			"Lomo Clásico",
		],
		color: "bg-primary",
		description: "Creaciones únicas y deliciosas",
		link: "/hamburguesas",
	},
	{
		title: "Platos a la Carta",
		icon: UtensilsCrossed,
		items: [
			"Arroz con menestra y chuletón",
			"Picaña de res",
			"Lomo saltado guayaco",
			"Camarones apanados",
		],
		color: "bg-accent",
		description: "Sabores tradicionales",
		link: "/platos",
	},
	{
		title: "Bebidas y Porciones",
		icon: UtensilsCrossed,
		items: [
			"Jugo de Naranja",
			"Coca-Cola",
			"Pilsener",
			"Papas Fritas",
			"Patacones",
		],
		color: "bg-accent",
		description: "El complemento perfecto",
		link: "/bebidas",
	},
]

export function MenuCarousel() {
	return (
		<section
			id="menu"
			className="py-20 bg-secondary/50 relative"
			style={{ marginTop: "-150px", zIndex: 10 }}
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Descubre la auténtica sazón costeña en cada uno de nuestros platos
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{menuCategories.map((category, index) => (
						<Card
							key={index}
							className="flex-shrink-0 w-full bg-card border-border hover:border-accent transition-all duration-300 group"
						>
							<CardContent className="p-6">
								<div
									className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
								>
									<category.icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-foreground mb-2">
									{category.title}
								</h3>
								<p className="text-sm text-accent mb-4">
									{category.description}
								</p>
								<ul className="space-y-2">
									{category.items
										.slice(0, 3)
										.map((item, itemIndex) => (
											<li
												key={itemIndex}
												className="text-sm text-muted-foreground flex items-center"
											>
												<div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
												{item}
											</li>
										))}
									{category.items.length > 3 && (
										<li className="text-sm text-accent font-semibold">
											+{category.items.length - 3} más...
										</li>
									)}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
