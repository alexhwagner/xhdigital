import BarbHero from "@/components/barbearia/HeroSection";
import BarbAbout from "@/components/barbearia/AboutSection";
import BarbServices from "@/components/barbearia/ServicesSection";
import BarbGallery from "@/components/barbearia/GallerySection";
import BarbDifferentials from "@/components/barbearia/DifferentialsSection";
import BarbTestimonials from "@/components/barbearia/TestimonialsSection";
import BarbFinalCTA from "@/components/barbearia/FinalCTASection";
import BarbFooter from "@/components/barbearia/FooterSection";

const Barbearia = () => {
  return (
    <main className="bg-black text-white font-sans">
      <BarbHero />
      <BarbAbout />
      <BarbServices />
      <BarbGallery />
      <BarbDifferentials />
      <BarbTestimonials />
      <BarbFinalCTA />
      <BarbFooter />
    </main>
  );
};

export default Barbearia;
