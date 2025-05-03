import { Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FoodCard from "@/components/food-card"
import HeroSection from "@/components/hero-section"
import { foodVendors } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">UBM's Culinary</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Beranda
            </Link>
            <Link href="#vendors" className="text-sm font-medium">
              Kantin
            </Link>
            <Link href="#locations" className="text-sm font-medium">
              Lokasi
            </Link>
            <Link href="#about" className="text-sm font-medium">
              Tentang
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Cari menu..." className="w-[200px] pl-8" />
            </div>
            <Button>Info Kantin</Button>
          </div>
        </div>
      </header>

      <HeroSection />

      <section id="vendors" className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kantin Kampus</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Temukan berbagai pilihan makanan yang tersedia di kantin kampus UBM
          </p>
        </div>

        <Tabs defaultValue="semua" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="semua">Semua</TabsTrigger>
              <TabsTrigger value="b1">Kantin B1</TabsTrigger>
              <TabsTrigger value="lt10">Kantin Lt.10</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="semua" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {foodVendors.map((vendor, index) => (
                <FoodCard key={index} vendor={vendor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="b1" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {foodVendors
                .filter((vendor) => vendor.description?.includes("B1"))
                .map((vendor, index) => (
                  <FoodCard key={index} vendor={vendor} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="lt10" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {foodVendors
                .filter((vendor) => vendor.description?.includes("lt.10"))
                .map((vendor, index) => (
                  <FoodCard key={index} vendor={vendor} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="locations" className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lokasi Kantin</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Informasi lokasi kantin di kampus UBM
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 transition-all group-hover:from-black/70"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Kantin B1"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Kantin Basement (B1)</h3>
                <p className="text-white/80">Lantai Basement Gedung Utama</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 transition-all group-hover:from-black/70"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Kantin Lt.10"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Kantin Lantai 10</h3>
                <p className="text-white/80">Lantai 10 Gedung Utama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="about" className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">UBM's Culinary</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Informasi menu makanan yang tersedia di kantin kampus Universitas Bunda Mulia
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jam Operasional Kantin</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Senin - Jumat: 08:00 - 20:00</li>
                <li>Sabtu: 08:00 - 17:00</li>
                <li>Kiamat: Tutup</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Kontak</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>UBM Tower, Alam Sutera, Jl. Jalur Sutera Bar. No.Kav.7-9, Panunggangan Tim., Kec. Pinang, Kota Tangerang, Banten 15143</li>
                <li>info@ubm.ac.id</li>
                <li>+62 857-7966-0661</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} UBM's Culinary. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>
    </main>
  )
}
