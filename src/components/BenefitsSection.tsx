import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mais leads qualificados todos os dias",
  "Mais autoridade e confiança para sua marca",
  "Melhor aproveitamento de cada real investido em tráfego",
  "Aumento real e mensurável nas conversões",
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-dark-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              Benefícios
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Resultados que você{" "}
              <span className="text-gradient-gold">vai sentir.</span>
            </h2>
            <div className="glow-line w-24 mx-auto mb-12" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
