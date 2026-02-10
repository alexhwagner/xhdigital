import { motion } from "framer-motion";
import logo from "@/assets/logo-xh-digital.png";

const FinalCTA = () => {
  return (
    <section id="contato" className="py-28 bg-dark-gradient relative overflow-hidden">
      {/* Multiple ambient glows */}
      <div className="floating-orb w-[600px] h-[400px] bg-primary/8 top-[20%] left-[30%]" />
      <div className="floating-orb w-[300px] h-[300px] bg-primary/5 bottom-[10%] right-[10%]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Mini logo */}
          <motion.img
            src={logo}
            alt="XH Digital"
            className="w-40 mx-auto mb-8 opacity-80"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary font-semibold uppercase text-sm mb-4"
          >
            Próximo passo
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Se você quer uma Landing Page que{" "}
            <span className="text-gradient-gold">realmente vende,</span> a XH Digital
            é a escolha certa.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Pare de perder clientes com páginas que não convertem. Solicite agora
            sua landing page premium e comece a ver resultados reais.
          </p>

          <motion.a
            href="https://wa.me/5547997889669?text=Ol%C3%A1%2C%20tive%20interesse%20e%20quero%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-gold-gradient text-primary-foreground font-bold text-lg px-14 py-5 rounded-xl shadow-gold-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 0 30px -5px hsl(42 60% 50% / 0.3)",
                "0 0 60px -5px hsl(42 60% 50% / 0.5)",
                "0 0 30px -5px hsl(42 60% 50% / 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="relative z-10"> CLIQUE AQUI </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5 }}
            />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground text-sm mt-6"
          >
            Resposta em até 24 horas • Sem compromisso
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
