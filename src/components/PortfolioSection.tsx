import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import gabirobScreenshot from "@/assets/Captura de tela 2026-02-09 101818.png";

const PortfolioSection = () => {
  const portfolio = [
    {
      id: 1,
      title: "Barbearia Gabiroba",
      description:
        "Landing page premium para barbearia com alta taxa de conversão e design moderno.",
      image: gabirobScreenshot,
      link: "https://barbeariagabiroba.netlify.app",
      category: "Barbearia",
    },
    {
      id: 2,
      title: "Seu Projeto Aqui",
      description:
        "Seu projeto pode estar aqui! Trabalhe com a XH Digital e apareça no nosso portfólio.",
      image: null,
      link: null,
      category: "Em Breve",
    },
    {
      id: 3,
      title: "Seu Projeto Aqui",
      description:
        "Seu projeto pode estar aqui! Trabalhe com a XH Digital e apareça no nosso portfólio.",
      image: null,
      link: null,
      category: "Em Breve",
    },
    {
      id: 4,
      title: "Seu Projeto Aqui",
      description:
        "Seu projeto pode estar aqui! Trabalhe com a XH Digital e apareça no nosso portfólio.",
      image: null,
      link: null,
      category: "Em Breve",
    },
    {
      id: 5,
      title: "Seu Projeto Aqui",
      description:
        "Seu projeto pode estar aqui! Trabalhe com a XH Digital e apareça no nosso portfólio.",
      image: null,
      link: null,
      category: "Em Breve",
    },
    {
      id: 6,
      title: "Próximo Projeto",
      description:
        "Seu projeto pode estar aqui! Trabalhe com a XH Digital e apareça no nosso portfólio.",
      image: null,
      link: null,
      category: "Em Breve",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-background to-dark-gradient relative overflow-hidden">
      {/* Ambient glows */}
      <div className="floating-orb w-[500px] h-[400px] bg-primary/5 top-[10%] left-[5%]" />
      <div className="floating-orb w-[400px] h-[350px] bg-primary/8 bottom-[5%] right-[5%]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold uppercase text-sm mb-4 tracking-widest">
            Nosso Trabalho
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Portfólio de{" "}
            <span className="text-gradient-gold">Casos de Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja as landing pages que criamos e que estão gerando resultados reais
            para nossos clientes.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-lg overflow-hidden bg-muted/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="w-full" style={{ minHeight: "300px", flex: "0 0 auto" }}>
                {item.image ? (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    onClick={() => item.link && window.open(item.link, "_blank")}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <p className="text-primary/60 font-semibold">Próximo Projeto</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex-1 flex flex-col justify-end">
                <div className="text-primary/80 text-sm font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>

                {/* Link Button */}
                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors w-fit"
                    whileHover={{ x: 4 }}
                  >
                    Ver projeto
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Quer seu projeto no nosso portfólio?
          </p>
          <motion.a
            href="https://wa.me/5547997889669?text=Ol%C3%A1%2C%20tive%20interesse%20e%20quero%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Começar Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
