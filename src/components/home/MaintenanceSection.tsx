import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Smile,
  UserRoundCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ButtonLink from "@/components/ui/ButtonLink";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Avaliamos sua piscina",
    description:
      "Entendemos as características da piscina, equipamentos, uso e necessidades de manutenção.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Definimos a rotina ideal",
    description:
      "Montamos uma frequência de atendimento adequada para manter tudo sempre em ordem.",
  },
  {
    number: "03",
    icon: UserRoundCheck,
    title: "Nossa equipe realiza as visitas",
    description:
      "Executamos limpeza, tratamento e acompanhamento dos principais itens da piscina.",
  },
  {
    number: "04",
    icon: Smile,
    title: "Você aproveita",
    description:
      "Sua piscina fica pronta para uso sem transformar a manutenção em uma preocupação.",
  },
];

export default function MaintenanceSection() {
  return (
    <section
      id="manutencao"
      className="
        relative overflow-hidden
        bg-[#f5fafc]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* FUNDO DECORATIVO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-52 top-10
          h-[500px] w-[500px]
          rounded-full
          bg-[#e4f5fc]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-44 bottom-0
          h-[400px] w-[400px]
          rounded-full
          bg-[#fff0e5]
          blur-[120px]
        "
      />

      <Container className="relative">
        {/* CABEÇALHO */}
        <div
          className="
            flex flex-col gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[690px]">
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

              Plano de manutenção
            </div>

            <h2
              className="
                mt-4
                text-[38px] font-[800]
                leading-[1.05]
                tracking-[-0.04em]
                text-[#082f4a]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Sua piscina sempre pronta,
              <span className="block text-[#1675b9]">
                sem você precisar se preocupar.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[620px]
                text-[15px] font-medium
                leading-7 text-[#607887]
                sm:text-base
              "
            >
              Criamos uma rotina de cuidado de acordo com a necessidade da sua
              piscina, acompanhando limpeza, tratamento e funcionamento ao
              longo do tempo.
            </p>
          </div>
        </div>

        {/* ETAPAS */}
        <div
          className="
            relative
            mt-14
            grid gap-4

            sm:grid-cols-2

            lg:mt-16
            lg:grid-cols-4
          "
        >
          {/* LINHA DESKTOP */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[12%] right-[12%]
              top-[39px]
              hidden
              h-px
              bg-[#c9dfe9]
              lg:block
            "
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group
                  relative z-10
                  flex flex-col
                  rounded-[24px]
                  border border-[#deebf1]
                  bg-white/90
                  p-6
                  shadow-[0_10px_30px_rgba(7,52,86,0.045)]
                  backdrop-blur

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#c6e0ed]
                  hover:shadow-[0_20px_45px_rgba(7,52,86,0.09)]

                  sm:p-7
                "
              >
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex h-[52px] w-[52px]
                      items-center justify-center
                      rounded-2xl
                      border border-[#d4e8f2]
                      bg-[#f3faff]
                      text-[#1675b9]
                      shadow-[0_6px_20px_rgba(7,52,86,0.06)]

                      transition-all
                      duration-300

                      group-hover:bg-[#1675b9]
                      group-hover:text-white
                    "
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </div>

                  <span
                    className="
                      text-[11px]
                      font-extrabold
                      tracking-[0.15em]
                      text-[#9db0bb]
                    "
                  >
                    {step.number}
                  </span>
                </div>

                <div className="mt-8">
                  <h3
                    className="
                      text-[18px]
                      font-[800]
                      leading-[1.25]
                      tracking-[-0.025em]
                      text-[#0b3551]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      font-medium
                      leading-6
                      text-[#6b8290]
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="
                      mt-6
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      bg-[#eff8fc]
                      text-[#1675b9]

                      lg:hidden
                    "
                  >
                    <ArrowRight size={15} />
                  </div>
                ) : (
                  <div
                    className="
                      mt-6
                      inline-flex
                      w-fit
                      items-center gap-2
                      rounded-full
                      bg-[#fff2e8]
                      px-3 py-2
                      text-[11px]
                      font-extrabold
                      text-[#e96817]
                    "
                  >
                    <CheckCircle2 size={14} strokeWidth={2.4} />
                    Piscina pronta
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA INFERIOR */}
        <div
          className="
            mt-12
            overflow-hidden
            rounded-[28px]
            bg-[#073456]
            px-6 py-7
            text-white
            shadow-[0_22px_55px_rgba(5,42,67,0.16)]

            sm:px-8

            lg:mt-16
            lg:flex
            lg:items-center
            lg:justify-between
            lg:px-10
            lg:py-8
          "
        >
          <div>
            <p
              className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-[#78c9f0]
              "
            >
              Manutenção recorrente
            </p>

            <h3
              className="
                mt-2
                max-w-[620px]
                text-[24px]
                font-[800]
                leading-tight
                tracking-[-0.03em]

                sm:text-[28px]
              "
            >
              Deixe o cuidado da sua piscina com quem entende.
            </h3>

            <p
              className="
                mt-3
                max-w-[650px]
                text-sm
                font-medium
                leading-6
                text-white/70
              "
            >
              Fale com a Brilho e descubra qual rotina de manutenção faz mais
              sentido para sua piscina.
            </p>
          </div>

          <div
            className="
              mt-6
              shrink-0
              lg:ml-8
              lg:mt-0
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


            
          </div>
        </div>
      </Container>
    </section>
  );
}