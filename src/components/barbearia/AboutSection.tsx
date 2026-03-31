import { motion } from "framer-motion";
import { Award, Shield, Clock } from "lucide-react";

const highlights = [
  { icon: Award, label: "Profissionais qualificados" },
  { icon: Shield, label: "Excelência garantida" },
  { icon: Clock, label: "Pontualidade e respeito" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-red-500 uppercase text-sm tracking-[0.3em] font-semibold mb-4">
            Sobre nós
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mais que uma barbearia.{" "}
            <span className="text-red-500">Uma experiência.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Na Barbearia Boa Vista, cada detalhe é pensado para entregar uma
            experiência premium — desde o atendimento até o acabamento final. Aqui,
            você não corta apenas o cabelo: você eleva seu estilo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full border border-red-600/30 flex items-center justify-center mb-4 bg-red-600/5">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-sm text-neutral-300 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
