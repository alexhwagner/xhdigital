import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AlertTriangle, TrendingDown, UserX } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Site bonito não gera vendas",
    description:
      "Ter um site visualmente agradável não basta. Sem estratégia, ele é apenas uma vitrine que ninguém para pra olhar.",
  },
  {
    icon: TrendingDown,
    title: "Tráfego sem conversão é dinheiro jogado fora",
    description:
      "Cada clique no seu anúncio custa dinheiro. Se a página não converte, você está pagando para perder clientes.",
  },
  {
    icon: UserX,
    title: "Falta estratégia por trás da maioria das páginas",
    description:
      "A maioria das páginas na internet são genéricas. Sem estrutura pensada, não existe resultado previsível.",
  },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 97, suffix: "%", label: "dos sites não convertem" },
  { value: 73, suffix: "%", label: "do tráfego é desperdiçado" },
  { value: 5, suffix: "s", label: "para perder um visitante" },
];

const ProblemSection = () => {
  return (
    <section className="py-28 bg-section-alt relative overflow-hidden">
      <div className="floating-orb w-[300px] h-[300px] bg-destructive/5 top-[10%] left-[-5%]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary font-semibold uppercase text-sm mb-4"
          >
            O problema
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Você está <span className="text-gradient-gold">perdendo dinheiro</span>{" "}
            sem perceber.
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        {/* Animated stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-display">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground text-sm mt-2 max-w-[140px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl p-8 card-glow gradient-border group cursor-default"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <problem.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient-gold transition-all">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
