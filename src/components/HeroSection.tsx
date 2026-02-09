import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-xh-digital.png";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay }}
  />
);

const particles = [
  { delay: 0, x: "10%", y: "20%", size: 4 },
  { delay: 1.2, x: "85%", y: "30%", size: 3 },
  { delay: 0.5, x: "25%", y: "70%", size: 5 },
  { delay: 2, x: "70%", y: "60%", size: 3 },
  { delay: 1.5, x: "50%", y: "80%", size: 4 },
  { delay: 0.8, x: "90%", y: "15%", size: 3 },
  { delay: 1.8, x: "15%", y: "50%", size: 4 },
  { delay: 2.5, x: "60%", y: "25%", size: 3 },
];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgX = useTransform(smoothX, [0, typeof window !== "undefined" ? window.innerWidth : 1920], [10, -10]);
  const bgY = useTransform(smoothY, [0, typeof window !== "undefined" ? window.innerHeight : 1080], [10, -10]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const headlineWords = "Landing Pages que transformam".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-[-20px]" style={{ x: bgX, y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Floating orbs */}
      <div className="floating-orb w-[500px] h-[500px] bg-primary/5 top-[-10%] right-[-10%]" />
      <div className="floating-orb w-[400px] h-[400px] bg-primary/3 bottom-[-10%] left-[-10%]" />

      {/* Particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          </div>
          <img
            src={logo}
            alt="XH Digital - Web Agency"
            className="mx-auto w-48 md:w-64 lg:w-80 drop-shadow-2xl relative z-10"
          />
        </motion.div>

        {/* Headline word by word */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-2 max-w-4xl mx-auto">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-8 max-w-4xl mx-auto"
        >
          <span className="text-gradient-gold">visitantes em clientes.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Criamos páginas estratégicas com design premium, código próprio e foco
          total em conversão.
        </motion.p>

        {/* CTA with shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.a
            href="#contato"
            className="relative inline-block bg-gold-gradient text-primary-foreground font-bold text-lg px-12 py-5 rounded-xl shadow-gold-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Quero vender mais</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-7 h-11 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
