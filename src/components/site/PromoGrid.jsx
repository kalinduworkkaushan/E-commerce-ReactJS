import milk from "@/assets/promo-milk.jpg";
import snacks from "@/assets/promo-snacks.jpg";
import meat from "@/assets/promo-meat.jpg";
import flowers from "@/assets/promo-flowers.jpg";
import beauty from "@/assets/promo-beauty.jpg";

const promos = [
  { title: "100% French Milk", img: milk, tint: "bg-brand-green/20" },
  { title: "Light Bites, Big Flavor", img: snacks, tint: "bg-brand-sky/20" },
  { title: "All Natural No Nasties", img: meat, tint: "bg-brand-red/20" },
  { title: "Flowers By Kibsons", img: flowers, tint: "bg-brand-pink/20" },
  { title: "K-Beauty Glow", img: beauty, tint: "bg-brand-red/20" },
];

export function PromoGrid() {
  return (
    <section className="bg-secondary py-6">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-5">
        {promos.map((p) => (
          <a key={p.title} className="group relative block overflow-hidden rounded-lg bg-card shadow-sm">
            <img src={p.img} alt={p.title} loading="lazy" className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <h3 className="max-w-[55%] text-lg font-bold leading-tight text-white drop-shadow">{p.title}</h3>
              <button className="w-fit rounded-md bg-white px-3 py-1.5 text-xs font-bold text-primary shadow hover:bg-primary hover:text-primary-foreground">
                Shop now
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
