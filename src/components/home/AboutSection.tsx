import Image from "next/image";

import {
  Award,
  Check,
  GraduationCap,
  MessageCircle,
  History,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ButtonLink from "@/components/ui/ButtonLink";

const highlights = [
  {
    icon: History,
    title: "Mais de 35 anos de experiência",
    description:
      "Uma trajetória construída com conhecimento técnico, atendimento próximo e cuidado constante com cada piscina.",
  },
  {
    icon: GraduationCap,
    title: "Profissionais treinados",
    description:
      "Nossa equipe participa de treinamentos e capacitações específicas para manutenção e tratamento de piscinas.",
  },
  {
    icon: Award,
    title: "Certificação e atualização técnica",
    description:
      "Profissionais com treinamentos e certificações junto a referências do setor, como GENCO, HTH e ANAPP.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="
        relative overflow-hidden
        bg-white
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
          absolute -left-48 bottom-0
          h-[460px] w-[460px]
          rounded-full
          bg-[#edf8fd]
          blur-[120px]
        "
      />

      <Container className="relative">
        <div
          className="
            grid gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* ==================================================
              CONTEÚDO
          ================================================== */}
          <div>
            <div
              className="
                inline-flex items-center gap-2
                text-[11px] font-extrabold
                uppercase tracking-[0.16em]
                text-[#ef7622]
                sm:text-xs
              "
            >
              <span className="h-[2px] w-6 rounded-full bg-[#ef7622]" />

              Sobre a Brilho
            </div>

            <h2
              className="
                mt-4
                max-w-[620px]
                text-[38px]
                font-[800]
                leading-[1.05]
                tracking-[-0.04em]
                text-[#082f4a]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Experiência que atravessa
              <span className="block text-[#1675b9]">
                mais de quatro décadas.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[600px]
                text-[15px]
                font-medium
                leading-7
                text-[#607887]
                sm:text-base
              "
            >
              A Brilho Piscinas nasceu há mais de 40 anos pelas mãos de
              Adevaldo Coutinho, técnico certificado e com formação em
              Tratamento de Água junto à CETESB.
            </p>

            <p
              className="
                mt-4
                max-w-[600px]
                text-[15px]
                font-medium
                leading-7
                text-[#607887]
                sm:text-base
              "
            >
              Desde então, conhecimento técnico e atualização profissional
              fazem parte da nossa forma de trabalhar. Nossa equipe é treinada
              para cuidar da manutenção, do tratamento da água e dos
              equipamentos de cada piscina com segurança e responsabilidade.
            </p>            

            {/* DIFERENCIAIS */}
            <div className="mt-9 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group
                      grid
                      grid-cols-[48px_1fr]
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-2xl
                        border border-[#d9eaf2]
                        bg-[#f4faff]
                        text-[#1675b9]
                        transition-all duration-300

                        group-hover:border-[#1675b9]
                        group-hover:bg-[#1675b9]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.9}
                      />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[15px]
                          font-extrabold
                          tracking-[-0.015em]
                          text-[#123b56]
                          sm:text-base
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-[500px]
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

            <div
              className="
                mt-10
                flex flex-col gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <ButtonLink
                href="#servicos"
                variant="secondary"
                message="Olá, Brilho Piscinas! Gostaria de conhecer melhor os serviços oferecidos."
              >
                Conhecer os serviços
                <MessageCircle size={17} />
              </ButtonLink>

              <div
                className="
                  flex items-center gap-2
                  px-1
                  text-xs
                  font-bold
                  text-[#607887]
                "
              >
                <ShieldCheck
                  size={17}
                  className="text-[#1675b9]"
                />

                Experiência, técnica e cuidado
              </div>
            </div>
          </div>

          {/* ==================================================
              FOTO
          ================================================== */}
          <div className="relative">
            <div
              className="
                relative
                min-h-[540px]
                overflow-hidden
                rounded-[30px]
                bg-[#e3f1f7]
                shadow-[0_30px_70px_rgba(7,52,86,0.13)]

                sm:min-h-[620px]
                sm:rounded-[36px]

                lg:min-h-[680px]
              "
            >
              <Image
                src="/images/hero-experience.png"
                alt="Piscina limpa e pronta para aproveitar"
                fill
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-[78%_center]
                "
              />

              {/* SOMBRA INFERIOR */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#05283f]/65
                  via-transparent
                  to-transparent
                "
              />

              {/* SELO SUPERIOR */}
              <div
                className="
                  absolute
                  left-5 top-5
                  sm:left-7 sm:top-7
                "
              >
                <div
                  className="
                    inline-flex
                    items-center gap-2
                    rounded-full
                    border border-white/30
                    bg-white/90
                    px-4 py-2.5
                    text-[11px]
                    font-extrabold
                    text-[#0d5d8f]
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    className="text-[#ef7622]"
                  />

                  Mais de 40 anos de experiência
                </div>
              </div>

              {/* CARD INFERIOR */}
              <div
                className="
                  absolute
                  inset-x-0 bottom-0
                  p-5
                  sm:p-7
                "
              >
                <div
                  className="
                    max-w-[430px]
                    rounded-[22px]
                    border border-white/20
                    bg-[#062d47]/82
                    p-5
                    text-white
                    shadow-xl
                    backdrop-blur-xl
                    sm:p-6
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-[#83d2f5]
                    "
                  >
                    Desde o início
                  </p>

                  <p
                    className="
                      mt-2
                      text-[18px]
                      font-[800]
                      leading-6
                      tracking-[-0.02em]
                      sm:text-[20px]
                    "
                  >
                    Técnica, conhecimento e cuidado para manter piscinas
                    sempre prontas para serem aproveitadas.
                  </p>
                </div>
              </div>
            </div>

            {/* BORDA DECORATIVA */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-6 -right-6
                -z-10
                h-[220px] w-[220px]
                rounded-[34px]
                border border-[#d0e6f1]
              "
            />

            {/* DETALHE LARANJA */}
            <div
              aria-hidden="true"
              className="
                absolute
                -left-8 top-20
                -z-10
                h-28 w-28
                rounded-full
                bg-[#ef7622]/10
                blur-2xl
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}