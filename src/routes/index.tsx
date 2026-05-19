import { createFileRoute } from "@tanstack/react-router";
import heroProducts from "@/assets/hero-products.jpg";
import deliveryVan from "@/assets/delivery-van.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5519000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Agropet%20Bonini.";

const services = [
  { n: "01", title: "BANHO & TOSA", desc: "Estética profissional com produtos premium e equipe especializada." },
  { n: "02", title: "CASA DE RAÇÕES", desc: "Marcas premium e nutrição para todas as fases — filhote ao sênior." },
  { n: "03", title: "AGROPECUÁRIA", desc: "Medicamentos, ferramentas, sementes e insumos para o campo." },
  { n: "04", title: "PET SHOP", desc: "Brinquedos, acessórios, camas e tudo para o conforto do seu pet." },
  { n: "05", title: "DELIVERY", desc: "Ração e produtos entregues em toda Monte Mor no mesmo dia." },
  { n: "06", title: "TÁXI DOG", desc: "Buscamos e entregamos seu pet com segurança e pontualidade." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-foreground font-body">
      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center gap-3 bg-foreground text-background px-5 py-3.5 md:px-6 md:py-4 rounded-full shadow-2xl transition-transform active:scale-95 hover:-translate-y-0.5"
      >
        <span className="font-mono text-[10px] tracking-tighter text-primary hidden sm:inline">LIVE_CHAT</span>
        <span className="font-semibold text-sm md:text-base">WHATSAPP</span>
        <span className="size-2 rounded-full bg-primary animate-pulse" />
      </a>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-3xl tracking-tight leading-none">
            BONINI<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest">
            <a href="#services" className="hover:text-primary transition-colors">SERVIÇOS</a>
            <a href="#delivery" className="hover:text-primary transition-colors">DELIVERY</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTATO</a>
          </div>
          <div className="text-[10px] font-mono opacity-50 hidden sm:block">MONTE MOR / SP</div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="px-5 md:px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-end">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-foreground/20 rounded-full font-mono text-[10px] uppercase tracking-widest">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Aberto agora · Monte Mor · SP
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-[120px] leading-[0.85] tracking-tighter text-balance">
              PET SHOP & <br />
              <span className="text-primary">AGROPECUÁRIA</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-[44ch] text-base md:text-lg text-pretty text-muted-foreground">
              Rações premium, banho & tosa, delivery e táxi dog. Tudo o que seu pet
              e sua propriedade precisam — com o atendimento de quem é da cidade.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background px-8 py-4 font-bold text-sm tracking-widest hover:bg-primary hover:text-foreground transition-all text-center"
              >
                PEDIR PELO WHATSAPP
              </a>
              <a
                href="#services"
                className="border border-foreground px-8 py-4 font-bold text-sm tracking-widest hover:bg-foreground hover:text-background transition-all text-center"
              >
                VER SERVIÇOS
              </a>
            </div>
          </div>

          <div className="animate-reveal [animation-delay:150ms]">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-foreground/5">
              <img
                src={heroProducts}
                alt="Produtos premium para pets na Agropet Bonini"
                width={896}
                height={1120}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-5 left-5 bg-primary text-foreground px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
                Monte Mor · SP
              </div>
              <div className="absolute bottom-5 right-5 bg-background/90 backdrop-blur px-4 py-3 max-w-[200px]">
                <div className="font-mono text-[10px] opacity-60 uppercase tracking-widest mb-1">Resposta média</div>
                <div className="font-display text-2xl tracking-tight">&lt; 5 MIN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-foreground text-background py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 md:mb-16 border-b border-background/10 pb-6 md:pb-8">
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter">NOSSOS SERVIÇOS</h2>
            <span className="font-mono text-xs opacity-50">[ 01 — 06 ]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-background/10">
            {services.map((s) => (
              <a
                key={s.n}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground p-7 md:p-8 aspect-square flex flex-col justify-between group hover:bg-primary transition-colors"
              >
                <div className="font-mono text-xs text-primary group-hover:text-foreground">{s.n}.</div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-display mb-2 group-hover:text-foreground tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm opacity-60 group-hover:text-foreground/80 group-hover:opacity-100">
                    {s.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery / Táxi Dog */}
      <section id="delivery" className="py-20 md:py-24 px-5 md:px-6">
        <div className="max-w-7xl mx-auto border-2 border-foreground flex flex-col md:flex-row items-stretch gap-0">
          <div className="flex-1 p-8 md:p-12">
            <div className="inline-block bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
              Local Delivery · Táxi Dog
            </div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-5 md:mb-6 leading-[0.9]">
              BUSCAMOS <br />E ENTREGAMOS.
            </h2>
            <p className="text-muted-foreground max-w-md mb-8 text-base">
              Táxi Dog seguro e climatizado para buscar e levar seu pet. Delivery
              de rações, medicamentos e acessórios em toda Monte Mor — rápido,
              sem complicação, com a confiança de quem está aqui há anos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group"
            >
              <span className="font-bold tracking-widest text-sm underline underline-offset-8">
                SOLICITAR AGORA
              </span>
              <span className="size-10 rounded-full border border-foreground grid place-items-center group-hover:bg-primary transition-colors">
                →
              </span>
            </a>
          </div>
          <div className="w-full md:w-1/2 aspect-video md:aspect-auto">
            <img
              src={deliveryVan}
              alt="Veículo de delivery e táxi dog da Agropet Bonini"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-border py-12 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            ["+10 ANOS", "atendendo Monte Mor"],
            ["MARCAS", "premium em estoque"],
            ["MESMO DIA", "entrega local"],
            ["WHATSAPP", "atendimento direto"],
          ].map(([big, small]) => (
            <div key={big}>
              <div className="font-display text-3xl md:text-4xl tracking-tight">{big}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-1">
                {small}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 md:py-28 px-5 md:px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-6">
            [ Atendimento agora ]
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8">
            FALE COM A GENTE <br />
            <span className="text-primary">PELO WHATSAPP.</span>
          </h2>
          <p className="text-background/60 max-w-md mx-auto mb-10">
            Pedidos, dúvidas, agendamentos de banho & tosa, táxi dog e delivery —
            tudo num único chat. Resposta em minutos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-foreground px-10 py-5 font-bold text-sm tracking-widest hover:bg-background hover:text-foreground transition-colors"
          >
            ABRIR CONVERSA →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-20 pb-10 px-5 md:px-6 border-t border-background/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-display text-5xl md:text-6xl mb-5">
                BONINI<span className="text-primary">.</span>
              </div>
              <p className="opacity-50 text-sm max-w-xs">
                Agropet Bonini — pet shop, rações, agropecuária e serviços em
                Monte Mor / SP. Sua casa de confiança.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-4">
                Localização
              </div>
              <p className="text-sm leading-relaxed">
                Monte Mor — SP<br />
                Centro
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-4">
                Horários
              </div>
              <p className="text-sm leading-relaxed">
                Seg – Sex: 08h – 18h<br />
                Sáb: 08h – 13h
              </p>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
              © {new Date().getFullYear()} Agropet Bonini
            </div>
            <div className="flex gap-6 md:gap-8 font-mono text-[10px] opacity-60 uppercase tracking-widest">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp
              </a>
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">Google Maps</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
