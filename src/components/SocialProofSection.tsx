import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "CEO — Mendes Consultoria",
    text: "Depois que a XH Digital refez nossa landing page, nosso custo por lead caiu 47%. Resultado real, sem enrolação.",
    stars: 5,
    metric: "-47% CPL",
  },
  {
    name: "Carla Souza",
    role: "Diretora de Marketing — Bella Estética",
    text: "A página ficou impecável. Profissional, rápida e com uma taxa de conversão que nunca tivemos antes. Recomendo de olhos fechados.",
    stars: 5,
    metric: "+320% conversões",
  },
  {
    name: "Lucas Ferreira",
    role: "Fundador — LF Investimentos",
    text: "Investimos pesado em tráfego e finalmente sentimos retorno. A landing page da XH Digital fez toda a diferença.",
    stars: 5,
    metric: "3.2x ROI",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-28 bg-section-alt relative overflow-hidden">
      <div className="floating-orb w-[300px] h-[300px] bg-primary/5 bottom-[10%] right-[-5%]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary font-semibold uppercase text-sm mb-4"
          >
            Prova social
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Quem contrata,{" "}
            <span className="text-gradient-gold">recomenda.</span>
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl p-8 relative card-glow gradient-border cursor-default group"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              
              {/* Metric badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 200 }}
                className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4"
              >
                {t.metric}
              </motion.div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.08 + index * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="glow-line w-full mb-4" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
