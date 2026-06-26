import { Search, Heart, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-4 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold tracking-tight text-primary">KIB</span>
            <span className="text-3xl font-extrabold tracking-tight text-brand-red">SONS</span>
          </div>
          <span className="ml-2 hidden text-[10px] font-semibold leading-tight text-muted-foreground sm:block">
            INTERNATIONAL
          </span>
          <div className="ml-3 hidden rotate-[-4deg] rounded border-2 border-brand-red px-2 py-0.5 text-[9px] font-bold leading-tight text-brand-red md:block">
            MARKET WHOLESALER<br />MEANS THE BEST PRICES
          </div>
        </a>

        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search for pantry"
            className="h-12 w-full rounded-md bg-secondary pl-11 pr-14 text-sm outline-none ring-primary/20 focus:ring-2"
          />
          <button
            aria-label="Search"
            className="absolute right-1 top-1 grid h-10 w-12 place-items-center rounded bg-primary text-primary-foreground hover:opacity-90"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative grid h-11 w-11 place-items-center rounded-md border border-primary/30 text-primary hover:bg-secondary">
            <Heart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-brand-red text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <button className="relative grid h-11 w-11 place-items-center rounded-md border border-primary/30 text-primary hover:bg-secondary">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-brand-red text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
