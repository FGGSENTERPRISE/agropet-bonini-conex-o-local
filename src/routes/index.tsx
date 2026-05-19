import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Wheat,
  Sprout,
  ShoppingBag,
  Truck,
  Dog,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import deliveryVan from "@/assets/delivery-van.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5519000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Agropet%20Bonini.";

const services = [
  { Icon: Scissors, title: "Banho & Tosa", desc: "Estética profissional com produtos premium e equipe especializada." },
  { Icon: Wheat, title: "Casa de Rações", desc: "Marcas premium para todas as fases — do filhote ao sênior." },
  { Icon: Sprout, title: "Agropecuária", desc: "Medicamentos, ferramentas, sementes e insumos para o campo." },
  { Icon: ShoppingBag, title: "Pet Shop", desc: "Brinquedos, acessórios, camas e tudo para o conforto do seu pet." },
  { Icon: Truck, title: "Delivery", desc: "Ração e produtos entregues em toda Monte Mor no mesmo dia." },
  { Icon: Dog, title: "Táxi Dog", desc: "Buscamos e levamos seu pet com segurança e pontualidade." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-[color:var(--cta)] selection:text-[color:var(--cta-foreground)]">
      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 inline-flex items-center gap-2 bg-[color:var(--cta)] text-[color:var(--cta-foreground)] pl-4 pr-5 py-3.5 rounded-full font-semibold text-sm shadow-[var(--shadow-cta)] hover:-translate-y-0.5 active:scale-95 transition-all"
      >
        <MessageCircle className="size-5" strokeWidth={2.2} />
        WhatsApp
      </a>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 md:h-18 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold">
              B
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-bold tracking-tight text-base">Agropet Bonini</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                Monte Mor · SP
              </span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#delivery" className="hover:text-foreground transition-colors">Delivery</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contato</a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="px-5 md:px-6 pt-12 md:pt-20 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--cta)] opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full size-2 bg-[color:var(--cta)]" />
              </span>
              Aberto agora · Atendimento em Monte Mor
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance">
              Cuidado completo para quem{" "}
              <span className="text-[color:var(--cta)]">você ama.</span>
            </h1>
            <p className="mt-6 max-w-[48ch] text-base md:text-lg text-muted-foreground text-pretty">
              Pet shop, rações premium, banho & tosa, agropecuária, delivery e
              táxi dog — tudo em um só lugar, com o atendimento de quem é da cidade.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[color:var(--cta)] text-[color:var(--cta-foreground)] px-7 py-4 rounded-full font-semibold shadow-[var(--shadow-cta)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="size-5" /> Pedir pelo WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-border bg-background px-7 py-4 rounded-full font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Ver serviços <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> Atendimento local
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-primary" /> Resposta &lt; 5 min
              </div>
              <div className="flex items-center gap-2">
                <Truck className="size-4 text-primary" /> Entrega no mesmo dia
              </div>
            </div>
          </div>

          <div className="animate-reveal [animation-delay:120ms] relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-secondary shadow-[var(--shadow-soft)]">
              <img
                src={heroProducts}
                alt="Pet feliz em loja moderna da Agropet Bonini"
                width={896}
                height={1120}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-background rounded-2xl shadow-[var(--shadow-soft)] border border-border p-5 max-w-[240px]">
              <div className="flex items-center gap-1 text-[color:var(--cta)] text-sm mb-1">
                ★★★★★
              </div>
              <p className="text-sm font-medium leading-snug">
                “Melhor banho & tosa da região. O táxi dog é super pontual.”
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Mariana S., Monte Mor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[color:var(--surface)] py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                Soluções integradas
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Tudo o que seu pet e sua propriedade precisam.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Atendimento ágil, produtos premium e a confiança de uma loja local
              que conhece cada cliente pelo nome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map(({ Icon, title, desc }) => (
              <a
                key={title}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-3xl p-7 hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all"
              >
                <div className="size-12 rounded-2xl bg-secondary text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Solicitar <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery / Táxi Dog */}
      <section id="delivery" className="py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full aspect-[5/4] rounded-3xl overflow-hidden bg-secondary shadow-[var(--shadow-soft)]">
              <img
                src={deliveryVan}
                alt="Atendimento próximo e cuidadoso na Agropet Bonini"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-3 sm:-right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] max-w-[200px]">
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70 mb-1">
                Mesmo dia
              </div>
              <div className="text-lg font-semibold leading-tight">
                Entrega rápida em Monte Mor
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Delivery · Táxi Dog
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1] mb-5 text-balance">
              Buscamos e entregamos para você.
            </h2>
            <p className="text-muted-foreground max-w-md mb-8">
              Táxi Dog seguro e climatizado para levar e buscar seu pet.
              Delivery de rações, medicamentos e acessórios em toda Monte Mor —
              rápido, sem complicação e com a confiança de quem é da cidade.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Veículo seguro e climatizado para pets",
                "Entrega no mesmo dia em Monte Mor",
                "Agendamento direto pelo WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 size-1.5 rounded-full bg-[color:var(--cta)]" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[color:var(--cta)] text-[color:var(--cta-foreground)] px-7 py-4 rounded-full font-semibold shadow-[var(--shadow-cta)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="size-5" /> Solicitar agora
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[color:var(--surface)] border-y border-border py-12 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["+10 anos", "atendendo Monte Mor"],
            ["Premium", "marcas em estoque"],
            ["Mesmo dia", "entregas locais"],
            ["WhatsApp", "atendimento direto"],
          ].map(([big, small]) => (
            <div key={big}>
              <div className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {big}
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1.5">
                {small}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-[2rem] p-10 md:p-16 text-center shadow-[var(--shadow-soft)]">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--cta)] mb-4">
            Atendimento agora
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-5 text-balance">
            Fale com a gente <br className="hidden sm:block" />
            <span className="text-[color:var(--cta)]">pelo WhatsApp.</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto mb-10">
            Pedidos, dúvidas, agendamentos de banho & tosa, táxi dog e delivery —
            tudo num único chat. Resposta em minutos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[color:var(--cta)] text-[color:var(--cta-foreground)] px-8 py-4 rounded-full font-semibold shadow-[var(--shadow-cta)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="size-5" /> Abrir conversa
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background pt-16 pb-10 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold">
                  B
                </span>
                <span className="font-bold tracking-tight text-base">Agropet Bonini</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Pet shop, rações, agropecuária e serviços em Monte Mor / SP.
                Sua casa de confiança.
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-4">
                Localização
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                Monte Mor — SP<br />Centro
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-4">
                Horários
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                <Clock className="size-4 mt-0.5 text-primary shrink-0" />
                Seg – Sex: 08h – 18h<br />Sáb: 08h – 13h
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Agropet Bonini. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                WhatsApp
              </a>
              <a href="#" className="hover:text-foreground">Instagram</a>
              <a href="#" className="hover:text-foreground">Google Maps</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
