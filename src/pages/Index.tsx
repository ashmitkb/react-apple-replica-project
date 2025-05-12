
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import PromoStrip from '@/components/PromoStrip';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Promo strip */}
      <PromoStrip />
      
      {/* Main content with padding for header */}
      <main className="pt-[44px]">
        {/* Hero Section - iPhone 15 Pro */}
        <HeroSection
          title="iPhone 15 Pro"
          subtitle="Titanium. So strong. So light. So Pro."
          links={[
            { text: "Learn more", url: "#" },
            { text: "Buy", url: "#" }
          ]}
          backgroundImage="https://www.apple.com/v/home/az/images/heroes/iphone-15-pro/hero_iphone15pro_announce__gtc9rb5zs4i6_large.jpg"
          textColor="text-white"
          textPosition="top"
        />
        
        {/* Hero Section - iPhone 15 */}
        <HeroSection
          title="iPhone 15"
          subtitle="New camera. New design. Newphoria."
          links={[
            { text: "Learn more", url: "#" },
            { text: "Buy", url: "#" }
          ]}
          backgroundImage="https://www.apple.com/v/home/az/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_large.jpg"
          textColor="text-black"
          textPosition="top"
        />
        
        {/* Apple Watch */}
        <HeroSection
          title="WATCH"
          subtitle="SERIES 9"
          links={[
            { text: "Learn more", url: "#" },
            { text: "Buy", url: "#" }
          ]}
          backgroundImage="https://www.apple.com/v/home/az/images/heroes/apple-watch-series-9/hero_apple_watch_s9_order__d0fi9mb5mds2_large.jpg"
          textColor="text-white"
          textPosition="top"
          logoImage="https://www.apple.com/v/home/az/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large.png"
        />

        {/* Product Grid */}
        <ProductGrid
          tiles={[
            {
              title: "iPad",
              subtitle: "Lovable. Drawable. Magical.",
              backgroundImage: "https://www.apple.com/v/home/az/images/promos/ipad/promo_ipad__fioegapg12qi_large.jpg",
              links: [
                { text: "Learn more", url: "#" },
                { text: "Buy", url: "#" }
              ],
              textColor: "text-black"
            },
            {
              title: "MacBook Air 15\"",
              subtitle: "Impressively big. Impossibly thin.",
              backgroundImage: "https://www.apple.com/v/home/az/images/promos/macbook-air-15/promo_macbook_air_15_midnight__ck5rvqlq9qea_large.jpg",
              links: [
                { text: "Learn more", url: "#" },
                { text: "Buy", url: "#" }
              ],
              textColor: "text-white"
            },
            {
              title: "AirPods Pro",
              subtitle: "Adaptive Audio. Now playing.",
              backgroundImage: "https://www.apple.com/v/home/az/images/promos/airpods-pro/promo_airpods_pro_order__d8xv36p4uwae_large.jpg",
              links: [
                { text: "Learn more", url: "#" },
                { text: "Buy", url: "#" }
              ],
              textColor: "text-black"
            },
            {
              title: "Apple Card",
              subtitle: "Get up to 3% Daily Cash back with every purchase.",
              backgroundImage: "https://www.apple.com/v/home/az/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg",
              links: [
                { text: "Apply now", url: "#" },
                { text: "Learn more", url: "#" }
              ],
              textColor: "text-white"
            },
            {
              title: "Apple Trade In",
              subtitle: "Upgrade and save. It's that easy.",
              backgroundImage: "https://www.apple.com/v/home/az/images/promos/iphone-tradein/promo_iphone_tradein__dyuzfy04teie_large.jpg",
              links: [
                { text: "See what your device is worth", url: "#" }
              ],
              textColor: "text-black"
            },
            {
              title: "Apple TV+",
              subtitle: "The new season of Surface is now streaming.",
              backgroundImage: "https://www.apple.com/v/home/az/images/promos/tv-plus-surface-s2/promo_surface_coming_soon__c6fgnwedr8om_large.jpg",
              links: [
                { text: "Stream now", url: "#" }
              ],
              textColor: "text-white",
              logoImage: "https://www.apple.com/v/home/az/images/logos/tv-plus/logo__dcojfwkzna2q_large.png"
            }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
