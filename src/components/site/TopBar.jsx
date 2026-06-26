import { Truck, MapPin, Phone, User, Facebook, Instagram, ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-topbar text-primary-foreground text-xs">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            <span>Delivery All Over UAE</span>
          </div>
          <button className="flex items-center gap-2 rounded border border-white/30 px-3 py-1 hover:bg-white/10">
            <MapPin className="h-3.5 w-3.5" />
            <span>Add your Address</span>
          </button>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <Facebook className="h-4 w-4 cursor-pointer hover:opacity-80" />
          <Instagram className="h-4 w-4 cursor-pointer hover:opacity-80" />
          <span className="cursor-pointer hover:opacity-80"></span>
          <button className="flex items-center gap-1 hover:opacity-80">
            Sustainable Grocery Shopping <ChevronDown className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">800 KIBSONS</span>
          </div>
          <button className="flex items-center gap-1 hover:opacity-80">
            <User className="h-4 w-4" /> Login / Register <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
