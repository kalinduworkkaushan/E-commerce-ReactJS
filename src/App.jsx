import { TopBar } from "@/components/site/TopBar.jsx";
import { Header } from "@/components/site/Header.jsx";
import { CategoryTiles } from "@/components/site/CategoryTiles.jsx";
import { FeaturedPills } from "@/components/site/FeaturedPills.jsx";
import { PromoGrid } from "@/components/site/PromoGrid.jsx";
import { ProductGrid } from "@/components/site/ProductGrid.jsx";
import { Footer } from "@/components/site/Footer.jsx";
import hero from "@/assets/hero-banner.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main>
        <section className="mx-auto max-w-[1400px] px-4 pt-4">
          <CategoryTiles />
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_240px]">
            <a className="block overflow-hidden rounded-lg">
              <img src={hero} alt="Festive Eid Grocery" width={1600} height={640} className="h-[260px] w-full object-cover sm:h-[340px]" />
            </a>
            <div className="grid grid-cols-2 gap-3">
              {["SuperValu", "redmart", "Morrisons", "Iceland"].map((s, i) => (
                <button
                  key={s}
                  className={`grid h-[78px] place-items-center rounded-lg font-extrabold tracking-tight shadow-sm ${
                    i === 0 ? "bg-brand-green text-white" :
                    i === 1 ? "bg-brand-red text-white" :
                    i === 2 ? "bg-brand-green-dark text-white" :
                    "bg-white text-brand-red border"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </section>

        <FeaturedPills />
        <PromoGrid />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}
