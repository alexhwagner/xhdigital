import { motion } from "framer-motion";
import { Zap, Target, PenTool, TrendingUp } from "lucide-react";

const points = [
  { icon: Zap, text: "Não criamos sites comuns", desc: "Cada projeto é único e estratégico" },
  { icon: Target, text: "Criamos máquinas de conversão", desc: "Estrutura pensada para gerar resultado" },
  { icon: PenTool, text: "Unimos design, copy e código", desc: "Tudo integrado para máxima performance" },
  { icon: TrendingUp, text: "Foco em leads e vendas", desc: "Métricas reais, não vaidade" },
];

const SolutionSection = () => {
  return (
    <section className="py-28 bg-dark-gradient relative overflow-hidden">
      <div className="floating-orb w-[400px] h-[400px] bg-primary/5 bottom-[-15%] right-[-10%]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-primary font-semibold uppercase text-sm mb-4"
            >
              A solução
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              A <span className="text-gradient-gold">XH Digital</span> é diferente.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Enquanto outros entregam páginas genéricas, nós construímos estratégias
              completas de conversão. Cada pixel, cada palavra e cada linha de código
              são pensados para transformar tráfego em resultado.
            </p>
            <motion.div className="glow-line w-full mb-8" />
            <motion.a
              href="#contato"
              className="relative inline-block bg-gold-gradient text-primary-foreground font-semibold px-10 py-4 rounded-xl shadow-gold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Falar com especialista</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.a>
          </motion.div>

          {/* Points */}
          <div className="space-y-5">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-center gap-5 bg-card rounded-xl p-5 card-glow gradient-border group cursor-default"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <point.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <p className="text-lg font-semibold">{point.text}</p>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
