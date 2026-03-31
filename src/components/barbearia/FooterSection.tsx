import { Scissors, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-6 h-6 text-red-500" />
              <span className="text-lg font-bold">Barbearia Boa Vista</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Estilo, precisão e atendimento premium para o homem moderno.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Contato
            </h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 hover:text-red-500 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              @barbearia.boavista
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 hover:text-red-500 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              (00) 00000-0000
            </a>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Informações
            </h4>
            <p className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm">
              <MapPin className="w-4 h-4 text-red-500" />
              Rua Exemplo, 123 — Centro
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm">
              <Clock className="w-4 h-4 text-red-500" />
              Seg a Sáb — 9h às 20h
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Barbearia Boa Vista. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
