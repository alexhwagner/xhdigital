import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contato" className="py-24 bg-dark-gradient relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            Próximo passo
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Se você quer uma Landing Page que{" "}
            <span className="text-gradient-gold">realmente vende,</span> a XH Digital
            é a escolha certa.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Pare de perder clientes com páginas que não convertem. Solicite agora
            sua landing page premium e comece a ver resultados reais.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-gradient text-primary-foreground font-bold text-lg px-12 py-5 rounded-lg shadow-gold animate-pulse-gold hover:scale-105 transition-transform duration-300"
          >
            Solicitar Landing Page premium
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
