import { motion } from "framer-motion";
import { Code2, Palette, BarChart3, Smartphone, Gauge, Megaphone } from "lucide-react";

const differentials = [
  { icon: Code2, title: "Código próprio", desc: "HTML, CSS e JS puro — sem dependência de plataformas lentas." },
  { icon: Palette, title: "Layout exclusivo", desc: "Design único para sua marca, sem templates repetidos." },
  { icon: BarChart3, title: "Estratégia de conversão", desc: "Cada elemento é posicionado para gerar ação." },
  { icon: Smartphone, title: "Design responsivo", desc: "Perfeito em qualquer tela, do celular ao desktop." },
  { icon: Gauge, title: "Performance máxima", desc: "Páginas ultra-rápidas que não perdem visitantes." },
  { icon: Megaphone, title: "Pronta para anúncios", desc: "Estrutura otimizada para campanhas de tráfego pago." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-28 bg-section-alt relative overflow-hidden">
      <div className="floating-orb w-[350px] h-[350px] bg-primary/4 top-[5%] right-[5%]" />

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
            Diferenciais
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Por que escolher a{" "}
            <span className="text-gradient-gold">XH Digital?</span>
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl p-8 text-center card-glow gradient-border group cursor-default"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
