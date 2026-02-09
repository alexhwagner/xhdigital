import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "CEO — Mendes Consultoria",
    text: "Depois que a XH Digital refez nossa landing page, nosso custo por lead caiu 47%. Resultado real, sem enrolação.",
    stars: 5,
  },
  {
    name: "Carla Souza",
    role: "Diretora de Marketing — Bella Estética",
    text: "A página ficou impecável. Profissional, rápida e com uma taxa de conversão que nunca tivemos antes. Recomendo de olhos fechados.",
    stars: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Fundador — LF Investimentos",
    text: "Investimos pesado em tráfego e finalmente sentimos retorno. A landing page da XH Digital fez toda a diferença.",
    stars: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            Prova social
          </p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
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
