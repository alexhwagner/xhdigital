import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  { text: "Mais leads qualificados todos os dias", detail: "Estrutura pensada para capturar contatos prontos para comprar." },
  { text: "Mais autoridade e confiança para sua marca", detail: "Design premium que posiciona sua empresa acima da concorrência." },
  { text: "Melhor aproveitamento de cada real em tráfego", detail: "Cada visitante tem mais chances de se tornar cliente." },
  { text: "Aumento real e mensurável nas conversões", detail: "Resultados que você acompanha, não promessas vazias." },
];

const BenefitsSection = () => {
  return (
    <section className="py-28 bg-dark-gradient relative overflow-hidden">
      <div className="floating-orb w-[500px] h-[300px] bg-primary/5 top-[30%] left-[-10%]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-primary font-semibold uppercase text-sm mb-4"
            >
              Benefícios
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Resultados que você{" "}
              <span className="text-gradient-gold">vai sentir.</span>
            </h2>
            <div className="glow-line w-24 mx-auto mb-14" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-card rounded-xl p-7 card-glow gradient-border group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-lg font-semibold mb-1">{benefit.text}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.detail}</p>
                  </div>
                </div>
                <motion.div
                  className="flex items-center gap-1 text-primary text-sm font-medium mt-4 ml-10 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Saiba mais <ArrowRight className="w-3 h-3" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
