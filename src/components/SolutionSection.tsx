import { motion } from "framer-motion";
import { Zap, Target, PenTool, TrendingUp } from "lucide-react";

const points = [
  { icon: Zap, text: "Não criamos sites comuns" },
  { icon: Target, text: "Criamos máquinas de conversão" },
  { icon: PenTool, text: "Unimos design, copywriting e código" },
  { icon: TrendingUp, text: "Foco em aumentar leads e vendas" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-dark-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              A solução
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              A <span className="text-gradient-gold">XH Digital</span> é diferente.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Enquanto outros entregam páginas genéricas, nós construímos estratégias
              completas de conversão. Cada pixel, cada palavra e cada linha de código
              são pensados para transformar tráfego em resultado.
            </p>
            <div className="glow-line w-full mb-8" />
            <a
              href="#contato"
              className="inline-block bg-gold-gradient text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
            >
              Falar com especialista
            </a>
          </motion.div>

          {/* Points */}
          <div className="space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex items-center gap-5 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-medium">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
