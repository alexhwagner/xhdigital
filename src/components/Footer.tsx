import { motion } from "framer-motion";
import logo from "@/assets/logo-xh-digital.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img src={logo} alt="XH Digital" className="w-16 mx-auto mb-4 opacity-50" />
          <div className="glow-line w-32 mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} XH Digital. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
