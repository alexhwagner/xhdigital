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
            Diferenciais
          </p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-7 text-center hover:border-primary/30 hover:shadow-gold transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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
