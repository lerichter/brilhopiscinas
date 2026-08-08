import {
  Droplets,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    number: "01",
    icon: Droplets,
    title: "Manutenção de piscinas",
    description:
      "Limpeza, aspiração, tratamento químico e acompanhamento periódico para manter sua piscina sempre cristalina.",
    href: "#contato",
    featured: true,
  },
  {
    number: "02",
    icon: Wrench,
    title: "Assistência técnica",
    description:
      "Diagnóstico, manutenção e reparos em bombas, filtros, aquecimento e outros equipamentos da sua piscina.",
    href: "#contato",
    featured: false,
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Produtos e acessórios",
    description:
      "Produtos selecionados para tratamento, limpeza, conservação e funcionamento completo da sua piscina.",
    href: "#produtos",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="
        relative overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-52 top-24
          h-[420px] w-[420px]
          rounded-full
          bg-[#eaf7fd]
          blur-[100px]
        "
      />

      <Container className="relative">
        <div
          className="
            grid gap-12
            lg:grid-cols-[0.82fr_1.58fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <SectionHeading
              eyebrow="Nossos serviços"
              title={
                <>
                  Tudo o que sua piscina precisa,
                  <span className="block text-[#1675b9]">
                    em um só lugar.
                  </span>
                </>
              }
              description="Cuidado especializado para manter a água, os equipamentos e toda a estrutura da sua piscina funcionando perfeitamente."
            />

            <div
              className="
                mt-8 hidden
                items-center gap-3
                text-sm font-bold
                text-[#1675b9]
                lg:flex
              "
            >
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-[#eef8fd]
                "
              >
                <Sparkles size={18} strokeWidth={2} />
              </span>

              Cuidado completo, do tratamento à manutenção
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.title}
                  href={service.href}
                  className={`
                    group relative flex min-h-[330px]
                    flex-col overflow-hidden
                    rounded-[26px]
                    border p-6
                    transition-all duration-300
                    sm:p-7
                    ${
                      service.featured
                        ? "border-[#d5e9f4] bg-[#f4faff]"
                        : "border-[#e3ebf0] bg-white"
                    }
                    hover:-translate-y-1.5
                    hover:border-[#bfddec]
                    hover:shadow-[0_22px_55px_rgba(8,47,74,0.11)]
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        flex h-12 w-12 items-center
                        justify-center rounded-2xl
                        border border-[#dcecf5]
                        bg-white
                        text-[#1675b9]
                        shadow-[0_8px_24px_rgba(11,83,125,0.08)]
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon size={23} strokeWidth={1.9} />
                    </div>

                    <span
                      className="
                        text-xs font-extrabold
                        tracking-[0.14em]
                        text-[#a2b2bc]
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-14">
                    <h3
                      className="
                        max-w-[220px]
                        text-[20px] font-[800]
                        leading-[1.18]
                        tracking-[-0.025em]
                        text-[#0b3551]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[13px] font-medium
                        leading-6
                        text-[#677f8e]
                      "
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="
                      absolute -bottom-16 -right-16
                      h-36 w-36 rounded-full
                      bg-[#bde6f8]/0
                      blur-2xl
                      transition-colors duration-300
                      group-hover:bg-[#bde6f8]/35
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="
            mt-14 h-px w-full
            bg-gradient-to-r
            from-transparent
            via-[#dce9f0]
            to-transparent
            lg:mt-20
          "
        />
      </Container>
    </section>
  );
}