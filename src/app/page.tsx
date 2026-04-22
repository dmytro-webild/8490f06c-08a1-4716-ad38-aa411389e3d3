"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Produk",
          id: "products",
        },
        {
          name: "Tentang",
          id: "features",
        },
        {
          name: "Target",
          id: "target",
        },
        {
          name: "Order",
          id: "order",
        },
      ]}
      brandName="KO-CHA!!"
      button={{
        text: "Order Sekarang →",
        href: "#order",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="KO-CHA!!"
      description="Minuman espresso & matcha dalam kemasan pouch yang praktis. Bisa langsung diminum atau dikreasikan sesuai selera kamu."
      tag="Kopi × Matcha Pouch Base"
      buttons={[
        {
          text: "Coba Sekarang →",
          href: "#products",
        },
        {
          text: "Lihat Produk ↓",
          href: "#products",
        },
      ]}
      carouselItems={[
        {
          id: "c1",
          imageSrc: "http://img.b2bpic.net/free-photo/refreshing-drink-with-peach-arrangement_23-2150928925.jpg?_wi=1",
          imageAlt: "Espresso and Matcha pouches",
        },
        {
          id: "c2",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bn4stty86bjdNHjdG2tFpepV0q/uploaded-1775112398796-p757pisr.jpg?_wi=1",
          imageAlt: "KO-CHA branding",
        },
        {
          id: "c3",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-very-peri-instagram-story-collection_23-2149277398.jpg?_wi=1",
          imageAlt: "Espresso pouch",
        },
        {
          id: "c4",
          imageSrc: "http://img.b2bpic.net/free-vector/matcha-tea-squared-flyer-template_23-2148876924.jpg?_wi=1",
          imageAlt: "Matcha pouch",
        },
        {
          id: "c5",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-negroni-cocktails-arrangement_23-2149438817.jpg?_wi=1",
          imageAlt: "Creative base",
        },
        {
          id: "c6",
          imageSrc: "http://img.b2bpic.net/free-photo/refreshing-drink-with-peach-arrangement_23-2150928925.jpg?_wi=2",
          imageAlt: "Lifestyle shot",
        },
      ]}
      tagIcon={Sparkles}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "KO-CHA!!",
          name: "Espresso Pouch",
          price: "Rp 15.000",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-very-peri-instagram-story-collection_23-2149277398.jpg?_wi=2",
        },
        {
          id: "p2",
          brand: "KO-CHA!!",
          name: "Matcha Pouch",
          price: "Rp 15.000",
          rating: 5,
          reviewCount: "1.5k",
          imageSrc: "http://img.b2bpic.net/free-vector/matcha-tea-squared-flyer-template_23-2148876924.jpg?_wi=2",
        },
        {
          id: "p3",
          brand: "KO-CHA!!",
          name: "Kreasi Bebas",
          price: "Varies",
          rating: 5,
          reviewCount: "2k",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-negroni-cocktails-arrangement_23-2149438817.jpg?_wi=2",
        },
      ]}
      title="PILIHAN MINUMAN"
      description="Minuman base ready-to-drink dalam kemasan pouch praktis."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Praktis Dibawa",
          description: "Kemasan pouch ringan dan fleksibel, cocok untuk ke sekolah, kampus, atau hangout.",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-very-peri-instagram-story-collection_23-2149277398.jpg?_wi=3",
        },
        {
          id: 2,
          title: "Bebas Dikreasikan",
          description: "Jadikan base drink sesuai selera. Tambahkan topping favorit kamu!",
          imageSrc: "http://img.b2bpic.net/free-vector/matcha-tea-squared-flyer-template_23-2148876924.jpg?_wi=3",
        },
        {
          id: 3,
          title: "Harga Terjangkau",
          description: "Dirancang untuk kantong pelajar dan mahasiswa tanpa mengorbankan kualitas rasa.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-negroni-cocktails-arrangement_23-2149438817.jpg?_wi=3",
        },
        {
          id: 4,
          title: "Estetik & Instagrammable",
          description: "Desain kemasan yang menarik, worth it buat konten feed dan stories kamu.",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-very-peri-instagram-story-collection_23-2149277398.jpg?_wi=4",
        },
      ]}
      title="INOVASI YANG KAMU BUTUHKAN"
      description="Kenapa kamu harus pilih KO-CHA!! untuk menemani harimu?"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Jejak KO-CHA!!"
      description="Pertumbuhan kami dalam angka."
      metrics={[
        {
          id: "m1",
          value: "50k+",
          description: "Pouch Terjual",
        },
        {
          id: "m2",
          value: "15+",
          description: "Kota Cabang",
        },
        {
          id: "m3",
          value: "4.9",
          description: "Rating Rata-rata",
        },
        {
          id: "m4",
          value: "200+",
          description: "Kreasi Resep",
        },
        {
          id: "m5",
          value: "100%",
          description: "Bahan Alami",
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Kata Mereka"
      description="Apa kata teman-teman yang sudah cobain kesegaran KO-CHA!!"
      testimonials={[
        {
          id: "t1",
          name: "Budi Santoso",
          handle: "@budis",
          testimonial: "Praktis banget buat dibawa ke kampus!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bn4stty86bjdNHjdG2tFpepV0q/uploaded-1775112398796-p757pisr.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Siti Aminah",
          handle: "@siti_a",
          testimonial: "Matcha-nya kerasa banget, nggak kaleng-kaleng.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bn4stty86bjdNHjdG2tFpepV0q/uploaded-1775112398796-p757pisr.jpg?_wi=3",
        },
        {
          id: "t3",
          name: "Andi Wijaya",
          handle: "@andi_w",
          testimonial: "Suka banget bisa dikreasikan sesuka hati.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bn4stty86bjdNHjdG2tFpepV0q/uploaded-1775112398796-p757pisr.jpg?_wi=4",
        },
        {
          id: "t4",
          name: "Dewi Lestari",
          handle: "@dewi_l",
          testimonial: "Harga pelajar tapi kualitas juara.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bn4stty86bjdNHjdG2tFpepV0q/uploaded-1775112398796-p757pisr.jpg?_wi=5",
        },
        {
          id: "t5",
          name: "Rian Hidayat",
          handle: "@rian_h",
          testimonial: "Desain pouch-nya emang paling estetik!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bn4stty86bjdNHjdG2tFpepV0q/uploaded-1775112398796-p757pisr.jpg?_wi=6",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Tentang",
          items: [
            {
              label: "Visi Kami",
              href: "#",
            },
            {
              label: "Karir",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Hubungi Kami",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Kocha! · Espresso & Matcha Pouch Base"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
