const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-display font-bold mb-2">
          <span className="text-gradient-gold">XH</span>{" "}
          <span className="text-foreground">Digital</span>
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} XH Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
