import {
  Utensils, Apple, Carrot, Fish, Drumstick, Sandwich, Milk, Package,
  CupSoda, Snowflake, Home, Baby, PawPrint, SprayCan, Gift, Flower,
} from "lucide-react";

const tiles = [
  { label: "QUICK MEALS", icon: Utensils, bg: "bg-brand-red" },
  { label: "FRUITS", icon: Apple, bg: "bg-brand-green" },
  { label: "VEGETABLES", icon: Carrot, bg: "bg-brand-green-dark" },
  { label: "SEAFOOD", icon: Fish, bg: "bg-brand-blue" },
  { label: "MEAT", icon: Drumstick, bg: "bg-brand-red" },
  { label: "BAKERY", icon: Sandwich, bg: "bg-brand-gray" },
  { label: "DAIRY", icon: Milk, bg: "bg-brand-beige" },
  { label: "PANTRY", icon: Package, bg: "bg-brand-green" },
  { label: "DRINKS", icon: CupSoda, bg: "bg-brand-green-dark" },
  { label: "FROZEN", icon: Snowflake, bg: "bg-brand-sky" },
  { label: "HOME", icon: Home, bg: "bg-brand-blue" },
  { label: "KIDS", icon: Baby, bg: "bg-brand-red" },
  { label: "PETS", icon: PawPrint, bg: "bg-brand-gray" },
  { label: "SELF-CARE", icon: SprayCan, bg: "bg-brand-beige" },
  { label: "GIFTS", icon: Gift, bg: "bg-brand-yellow" },
  { label: "FLOWERS", icon: Flower, bg: "bg-brand-green" },
];

export function CategoryTiles() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8" style={{ gridTemplateColumns: undefined }}>
      {tiles.map(({ label, icon: Icon, bg }) => (
        <button
          key={label}
          className={`${bg} group flex aspect-square flex-col items-center justify-center gap-2 rounded-md p-2 text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg`}
        >
          <Icon className="h-7 w-7 opacity-90" strokeWidth={1.6} />
          <span className="text-center text-[10px] font-bold leading-tight">{label}</span>
        </button>
      ))}
    </div>
  );
}
