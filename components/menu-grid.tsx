import { Card, CardContent } from "@/components/ui/card"
import { Flame, Beef, UtensilsCrossed } from "lucide-react"

const menuSections = [
	{
		title: "Asados",
		icon: Flame,
		description: "Costillas gigantes y parrilladas familiares",
		image: "/costillas-asadas-parrilla-carb-n-destacadas.jpg",
		color: "bg-primary",
		link: "/asados",
	},
	{
		title: "Hamburguesas y Sanduches",
		icon: Beef,
		description: "Creaciones únicas con sabor costeño",
		image: "/hamburguesas-gourmet-sanduches-artesanales.jpg",
		color: "bg-accent",
		link: "/hamburguesas",
	},
	{
		title: "Platos a la Carta",
		icon: UtensilsCrossed,
		description: "Tradicionales platos de la costa",
		image: "/platos-tradicionales-ecuatorianos-carta.jpg",
		color: "bg-primary",
		link: "/platos",
	},
	{
		title: "Bebidas y Porciones",
		icon: UtensilsCrossed,
		description: "El complemento perfecto",
		image: "/bebidas-y-porciones-complementos.jpg",
		color: "bg-accent",
		link: "/bebidas",
	},
]

export function MenuGrid() {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
						Menú Completo
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Explora todas nuestras categorías y encuentra tu plato favorito
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{menuSections.map((section, index) => (
						<Card
							key={index}
							className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-accent overflow-hidden"
						>
							<div className="relative">
								<img
									src={section.image || "/placeholder.svg"}
									alt={section.title}
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div
									className={`absolute top-4 left-4 w-12 h-12 ${section.color} rounded-full flex items-center justify-center`}
								>
									<section.icon className="h-6 w-6 text-white" />
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
									{section.title}
								</h3>
								<p className="text-sm text-muted-foreground mb-4">
									{section.description}
								</p>
								<a
									href={section.link}
									className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-3 py-2"
								>
									Ver Menú Completo
								</a>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
