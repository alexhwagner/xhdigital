import { motion } from "framer-motion";
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

const ProblemSection = () => {
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
            O problema
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Você está <span className="text-gradient-gold">perdendo dinheiro</span>{" "}
            sem perceber.
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
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
