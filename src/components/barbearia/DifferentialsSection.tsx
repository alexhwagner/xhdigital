import { motion } from "framer-motion";
import { Users, Armchair, HeartHandshake, CalendarClock, Scissors, Gem } from "lucide-react";

const diffs = [
  { icon: Users, title: "Profissionais qualificados" },
  { icon: Armchair, title: "Ambiente confortável" },
  { icon: HeartHandshake, title: "Atendimento de qualidade" },
  { icon: CalendarClock, title: "Horários flexíveis" },
  { icon: Scissors, title: "Cortes modernos e clássicos" },
  { icon: Gem, title: "Produtos premium" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 uppercase text-sm tracking-[0.3em] font-semibold mb-4">
            Por que nos escolher
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Nossos <span className="text-red-500">diferenciais.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-red-600/30 flex items-center justify-center bg-red-600/5 group-hover:bg-red-600/15 transition-colors">
                <d.icon className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-neutral-300 font-medium">{d.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
