import {
  Sparkles, Tag, Moon, Leaf, Package, Award, Snowflake, Sprout,
  WheatOff, Droplet, Sprout as Vegan, Flame, ChefHat, Gift, Box, Star, MapPin,
} from "lucide-react";

const pills = [
  { label: "New", icon: Sparkles, color: "bg-brand-blue" },
  { label: "Promotion", icon: Tag, color: "bg-brand-red" },
  { label: "Eid Adha", icon: Moon, color: "bg-brand-yellow" },
  { label: "Imperfect", icon: Leaf, color: "bg-brand-green" },
  { label: "Qurbani", icon: Package, color: "bg-brand-beige" },
  { label: "Buy Bulk", icon: Box, color: "bg-brand-gray" },
  { label: "Taste SA", icon: Award, color: "bg-foreground" },
  { label: "Frozen", icon: Snowflake, color: "bg-brand-sky" },
  { label: "Organic", icon: Sprout, color: "bg-brand-green" },
  { label: "Gluten-free", icon: WheatOff, color: "bg-brand-blue" },
  { label: "No Added Sugar", icon: Droplet, color: "bg-brand-blue" },
  { label: "Vegan", icon: Vegan, color: "bg-brand-green-dark" },
  { label: "Keto", icon: Flame, color: "bg-brand-pink" },
  { label: "Recipes", icon: ChefHat, color: "bg-primary" },
  { label: "E-Gift Cards", icon: Gift, color: "bg-brand-yellow" },
  { label: "Must Try", icon: Star, color: "bg-brand-blue" },
  { label: "Local", icon: MapPin, color: "bg-brand-red" },
];

export function FeaturedPills() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-8">
      <h2 className="mb-5 text-xl font-bold text-primary">Featured Categories</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        {pills.map(({ label, icon: Icon, color }) => (
          <button key={label} className="group flex w-20 flex-col items-center gap-2 text-center">
            <div className={`${color} grid h-14 w-14 place-items-center rounded-full text-white shadow-sm transition-transform group-hover:scale-105`}>
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <span className="text-[11px] font-medium text-foreground leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
