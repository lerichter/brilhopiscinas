import Image from "next/image";

import {
  Check,
  CircleGauge,
  Droplets,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const careItems = [
  {
    number: "01",
    icon: Sparkles,
    title: "Água sempre cristalina",
    description:
      "Limpeza e tratamento contínuos para manter a piscina limpa, transparente e convidativa.",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Equilíbrio químico",
    description:
      "Controle dos parâmetros da água para proporcionar conforto, segurança e conservação.",
  },
  {
    number: "03",
    icon: CircleGauge,
    title: "Equipamentos acompanhados",
    description:
      "Verificação do funcionamento de filtros, bombas e demais componentes da piscina.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Manutenção preventiva",
    description:
      "Identificação antecipada de problemas para evitar imprevistos e gastos desnecessários.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Atendimento especializado",
    description:
      "Cuidado profissional e acompanhamento próximo em cada visita.",
  },
];

export default function CareSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#f5fafc]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* FUNDO DECORATIVO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 top-10
          h-[500px] w-[500px]
          rounded-full
          bg-[#dff3fc]
          blur-[120px]
        "
      />

      <Container className="relative">
        <div
          className="
            grid gap-12
            lg:grid-cols-[1.03fr_0.97fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* ==================================================
              IMAGEM
          ================================================== */}
          <div className="relative">
            <div
              className="
                relative
                min-h-[480px]
                overflow-hidden
                rounded-[28px]
                bg-[#dcecf4]
                shadow-[0_28px_70px_rgba(7,52,86,0.14)]

                sm:min-h-[560px]
                sm:rounded-[34px]

                lg:min-h-[620px]
              "
            >
              <Image
                src="/images/hero-enjoy.png"
                alt="Piscina cristalina pronta para aproveitar"
                fill
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-[76%_center]

                  sm:object-[78%_center]
                  lg:object-[80%_center]
                "
              />

              {/* SOMBRA SUAVE NA PARTE INFERIOR */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#05283f]/55
                  via-transparent
                  to-transparent
                "
              />

              {/* CARD SOBRE A FOTO */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  p-6
                  sm:p-8
                "
              >
                <div
                  className="
                    max-w-[360px]
                    rounded-2xl
                    border border-white/20
                    bg-[#062d47]/78
                    p-5
                    text-white
                    shadow-xl
                    backdrop-blur-xl
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-white/12
                      "
                    >
                      <Check
                        size={19}
                        strokeWidth={2.5}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold">
                        Piscina pronta para aproveitar
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-white/70
                        "
                      >
                        Sem transformar manutenção em mais uma preocupação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DETALHE DECORATIVO */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-6 -left-6
                -z-10
                h-[180px] w-[180px]
                rounded-[30px]
                border border-[#cfe6f2]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -right-7 top-16
                -z-10
                h-24 w-24
                rounded-full
                bg-[#ef7622]/10
                blur-2xl
              "
            />
          </div>

          {/* ==================================================
              CONTEÚDO
          ================================================== */}
          <div>
            <div
              className="
                inline-flex
                items-center gap-2
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-[#ef7622]

                sm:text-xs
              "
            >
              <span
                className="
                  h-[2px] w-6
                  rounded-full
                  bg-[#ef7622]
                "
              />

              Tranquilidade para você
            </div>

            <h2
              className="
                mt-4
                max-w-[540px]
                text-[38px]
                font-[800]
                leading-[1.05]
                tracking-[-0.04em]
                text-[#082f4a]

                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Você aproveita.

              <span className="block text-[#1675b9]">
                A Brilho cuida do resto.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[560px]
                text-[15px]
                font-medium
                leading-7
                text-[#607887]

                sm:text-base
              "
            >
              Cuidamos dos detalhes que fazem diferença para que sua piscina
              esteja sempre limpa, equilibrada e funcionando como deve.
            </p>

            {/* LISTA */}
            <div className="mt-9">
              {careItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="
                      group
                      grid
                      grid-cols-[44px_1fr]
                      gap-4
                      border-b
                      border-[#dce9f0]
                      py-5

                      first:pt-0
                    "
                  >
                    <div
                      className="
                        flex
                        h-11 w-11
                        items-center justify-center
                        rounded-xl
                        border border-[#d6e9f3]
                        bg-white
                        text-[#1675b9]
                        shadow-[0_6px_18px_rgba(9,73,111,0.05)]
                        transition-all
                        duration-300

                        group-hover:border-[#beddea]
                        group-hover:bg-[#1675b9]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            text-[10px]
                            font-extrabold
                            tracking-[0.13em]
                            text-[#ef7622]
                          "
                        >
                          {item.number}
                        </span>

                        <h3
                          className="
                            text-[15px]
                            font-extrabold
                            tracking-[-0.015em]
                            text-[#113b56]

                            sm:text-base
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-1.5
                          max-w-[480px]
                          text-[13px]
                          font-medium
                          leading-6
                          text-[#718794]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}