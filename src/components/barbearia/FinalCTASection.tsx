import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio";

const FinalCTASection = () => {
  return (
    <section className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-red-500 uppercase text-sm tracking-[0.3em] font-semibold mb-4">
            Agende agora
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Agende seu horário e{" "}
            <span className="text-red-500">eleve seu visual</span> hoje mesmo.
          </h2>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Não deixe para depois. Garanta seu horário com os melhores barbeiros
            da região.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-14 py-5 rounded-lg shadow-[0_0_50px_-10px_rgba(220,38,38,0.5)] transition-colors"
          >
            Falar no WhatsApp
          </motion.a>

          <p className="text-neutral-600 text-sm mt-6">
            Resposta rápida • Atendimento humanizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
