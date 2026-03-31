import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    text: "Melhor barbearia da região. Atendimento impecável e corte perfeito.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    text: "Ambiente top, profissionais de primeira. Saio de lá me sentindo outro homem.",
    stars: 5,
  },
  {
    name: "Carlos H.",
    text: "Desde que conheci a Boa Vista, não troco por nada. Qualidade absurda.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 uppercase text-sm tracking-[0.3em] font-semibold mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Quem corta aqui, <span className="text-red-500">recomenda.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-black border border-neutral-800 rounded-xl p-8 relative hover:border-red-600/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-red-600/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="h-px w-full bg-neutral-800 mb-4" />
              <p className="font-semibold text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
