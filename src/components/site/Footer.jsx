import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Shop", links: ["Fruits", "Vegetables", "Meat", "Seafood", "Bakery", "Dairy"] },
    { title: "Help", links: ["FAQ", "Delivery", "Returns", "Contact us", "Track order"] },
    { title: "About", links: ["Our story", "Sustainability", "Careers", "Press", "Blog"] },
  ];
  return (
    <footer className="mt-10 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-4 py-12 md:grid-cols-5">
        <div className="col-span-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold">KIB</span>
            <span className="text-3xl font-extrabold text-brand-red">SONS</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Sustainable grocery shopping delivered all over the UAE. Farm fresh, market wholesale prices.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide">{c.title}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {c.links.map((l) => <li key={l}><a className="hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} bit64. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> 800 KIBSONS</span>
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> hello@kibsons.com</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Dubai, UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
