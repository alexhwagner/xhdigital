import { motion } from "framer-motion";

const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

const GallerySection = () => {
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
            Portfólio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Nosso <span className="text-red-500">trabalho.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {placeholders.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-neutral-800"
            >
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
                <span className="text-neutral-600 text-sm">Foto {n}</span>
              </div>
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300" />
              <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
