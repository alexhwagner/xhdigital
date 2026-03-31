import { motion } from "framer-motion";
import { Scissors, Sparkles, Eye, Crown, Palette, Ruler } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Masculino",
    desc: "Cortes modernos e clássicos executados com precisão e técnica.",
  },
  {
    icon: Ruler,
    title: "Barba",
    desc: "Alinhamento e modelagem de barba com navalha e toalha quente.",
  },
  {
    icon: Eye,
    title: "Sobrancelha",
    desc: "Design de sobrancelha masculina com acabamento natural.",
  },
  {
    icon: Crown,
    title: "Corte + Barba",
    desc: "O combo completo para quem quer sair renovado e impecável.",
  },
  {
    icon: Palette,
    title: "Pigmentação",
    desc: "Pigmentação capilar para um visual mais denso e jovem.",
  },
  {
    icon: Sparkles,
    title: "Acabamento",
    desc: "Acabamento com máquina e navalha para contornos perfeitos.",
  },
];

const ServicesSection = () => {
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
            Nossos serviços
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Serviços que fazem a <span className="text-red-500">diferença.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 group hover:border-red-600/40 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors">
                <s.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
