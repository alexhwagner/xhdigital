import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-red-600/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-red-600/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-red-600 flex items-center justify-center bg-black/60 backdrop-blur-sm shadow-[0_0_60px_-10px_rgba(220,38,38,0.4)]">
            <Scissors className="w-12 h-12 md:w-16 md:h-16 text-red-500" />
          </div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-xs md:text-sm uppercase text-red-500 font-semibold tracking-widest"
          >
            Barbearia Boa Vista
          </motion.p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          Seu estilo começa no{" "}
          <span className="text-red-500">corte certo.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Cortes modernos, barba impecável e atendimento premium para homens que
          valorizam presença e autoestima.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-5 rounded-lg shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] transition-colors"
        >
          Agendar pelo WhatsApp
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-red-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
