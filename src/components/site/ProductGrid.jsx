import { Plus, Heart } from "lucide-react";
import strawberry from "@/assets/p-strawberry.jpg";
import avocado from "@/assets/p-avocado.jpg";
import banana from "@/assets/p-banana.jpg";
import tomato from "@/assets/p-tomato.jpg";
import juice from "@/assets/p-juice.jpg";
import bread from "@/assets/p-bread.jpg";

const products = [
  { name: "Fresh Strawberries 250g", price: 14.5, oldPrice: 18, img: strawberry, unit: "Pack", tag: "-20%" },
  { name: "Hass Avocado", price: 9.95, oldPrice: 12, img: avocado, unit: "500g" },
  { name: "Baby Bananas Organic", price: 6.75, img: banana, unit: "1kg", tag: "Organic" },
  { name: "Vine Tomatoes", price: 8.25, oldPrice: 10, img: tomato, unit: "500g" },
  { name: "Fresh Orange Juice", price: 16, img: juice, unit: "750ml", tag: "New" },
  { name: "Whole Wheat Bread", price: 11.5, img: bread, unit: "Loaf" },
];

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-10">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-xl font-bold text-primary">Top Offers</h2>
        <a className="text-sm font-semibold text-primary hover:underline">View all →</a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {products.map((p) => (
          <article key={p.name} className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md">
            {p.tag && (
              <span className="absolute left-2 top-2 z-10 rounded bg-brand-red px-2 py-0.5 text-[10px] font-bold text-white">
                {p.tag}
              </span>
            )}
            <button className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-muted-foreground shadow hover:text-brand-red">
              <Heart className="h-4 w-4" />
            </button>
            <div className="aspect-square overflow-hidden bg-secondary/50">
              <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-3">
              <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium text-foreground">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.unit}</p>
              <div className="mt-auto flex items-center justify-between pt-1">
                <div>
                  <span className="text-base font-bold text-primary">AED {p.price.toFixed(2)}</span>
                  {p.oldPrice && (
                    <span className="ml-1 text-xs text-muted-foreground line-through">AED {p.oldPrice}</span>
                  )}
                </div>
                <button className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground hover:opacity-90">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
