import Image from "next/image";

import {
  CalendarDays,
  Check,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ButtonLink from "@/components/ui/ButtonLink";

const trustItems = [
  {
    icon: Sparkles,
    title: "Atendimento",
    description: "especializado",
  },
  {
    icon: CalendarDays,
    title: "Manutenção",
    description: "recorrente",
  },
  {
    icon: ShieldCheck,
    title: "Produtos",
    description: "de qualidade",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-[800px]
        overflow-hidden
        bg-[#eaf5fb]
        pt-[112px]

        sm:min-h-[760px]
        sm:pt-[118px]

        lg:min-h-[760px]
        lg:pt-[122px]
      "
    >
      {/* ======================================================
          IMAGEM - DESKTOP
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute inset-y-0 right-0
          hidden
          w-[66%]
          overflow-hidden

          lg:block
          xl:w-[67%]
          2xl:w-[69%]
        "
      >
        <Image
          src="/images/hero-piscina.png"
          alt=""
          fill
          priority
          sizes="
            (min-width: 1536px) 69vw,
            (min-width: 1280px) 67vw,
            66vw
          "
          className="
            object-cover
            object-right
          "
        />

        {/* 
          Transição entre a área clara e a fotografia.

          O branco desaparece rapidamente para não
          desbotar a menina e o colchão.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #eaf5fb 0%, rgba(234,245,251,0.96) 10%, rgba(234,245,251,0.72) 20%, rgba(234,245,251,0.32) 29%, rgba(234,245,251,0.08) 36%, rgba(234,245,251,0) 43%)",
          }}
        />
      </div>

      {/* ======================================================
          IMAGEM - MOBILE / TABLET
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          top-[365px]
          overflow-hidden

          sm:top-[330px]

          lg:hidden
        "
      >
        <Image
          src="/images/hero-piscina.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[78%_center]

            sm:object-[82%_center]
            md:object-[85%_center]
          "
        />

        {/* 
          No mobile o degradê acontece apenas no topo.
          Depois disso a fotografia fica viva.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #eaf5fb 0%, rgba(234,245,251,0.92) 8%, rgba(234,245,251,0.6) 16%, rgba(234,245,251,0.22) 25%, rgba(234,245,251,0) 36%)",
          }}
        />
      </div>

      {/* ======================================================
          ÁREA CLARA DO CONTEÚDO - DESKTOP
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 left-0
          hidden
          w-[49%]

          bg-gradient-to-r
          from-[#f8fcfe]
          via-[#f3f9fc]
          to-transparent

          lg:block
        "
      />

      {/* LUZ DISCRETA SOMENTE ATRÁS DO TEXTO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-0 top-0

          h-full
          w-[46%]

          bg-[radial-gradient(circle_at_12%_35%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.35)_38%,rgba(255,255,255,0)_72%)]

          max-lg:w-full
        "
      />

      {/* ======================================================
          CONTEÚDO
      ====================================================== */}
      <Container className="relative z-10">
        <div
          className="
            flex
            min-h-[670px]
            flex-col
            justify-start

            pb-9
            pt-10

            sm:min-h-[630px]
            sm:pt-14

            lg:min-h-[620px]
            lg:justify-center
            lg:pb-20
            lg:pt-12
          "
        >
          <div
            className="
              max-w-[660px]

              lg:max-w-[570px]
              xl:max-w-[620px]
            "
          >
            {/* BADGE */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2

                rounded-full
                border
                border-[#c9deea]
                bg-white/85

                px-3.5
                py-2

                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.12em]
                text-[#0d6499]

                shadow-sm
                backdrop-blur-md

                sm:text-[11px]
                lg:text-xs
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center

                  rounded-full
                  bg-[#e6f4fb]
                  text-[#1675b9]
                "
              >
                <Check size={13} strokeWidth={3} />
              </span>

              Cuidado completo para sua piscina
            </div>

            {/* TÍTULO */}
            <h1
              className="
                max-w-[620px]

                text-[42px]
                font-[800]
                leading-[0.98]
                tracking-[-0.045em]
                text-[#082f4a]

                sm:text-[54px]

                lg:text-[58px]

                xl:text-[66px]

                2xl:text-[70px]
              "
            >
              Sua piscina

              <span className="block text-[#1675b9]">
                impecável.
              </span>

              <span className="block">
                O ano inteiro.
              </span>
            </h1>

            {/* DESCRIÇÃO */}
            <p
              className="
                mt-6
                max-w-[570px]

                text-[14px]
                font-medium
                leading-7
                text-[#526f80]

                sm:text-[15px]

                lg:max-w-[520px]
                lg:text-[16px]

                xl:text-[17px]
              "
            >
              Manutenção, tratamento, assistência técnica e produtos para
              manter sua piscina sempre cristalina, segura e pronta para
              aproveitar.
            </p>

            {/* BOTÕES */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
              "
              >
              <ButtonLink
                href="#contato"
                message="Olá, Brilho Piscinas! Gostaria de solicitar um orçamento."
              >
                <MessageCircle size={17} />
                Solicitar orçamento
              </ButtonLink>

              <ButtonLink
                href="#servicos"
                variant="secondary"
                className="sm:min-w-[180px]"
              >
                Conhecer os serviços

                <ChevronRight size={17} />
              </ButtonLink>
            </div>

            {/* DESTAQUES */}
            <div
              className="
                mt-9
                grid
                max-w-[600px]
                grid-cols-1
                gap-2

                rounded-2xl
                border
                border-white/70
                bg-white/80

                p-3

                shadow-[0_14px_40px_rgba(7,52,86,0.08)]
                backdrop-blur-xl

                sm:grid-cols-3
                sm:gap-3

                lg:mt-10
              "
            >
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      gap-3

                      rounded-xl
                      px-3
                      py-2.5
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-xl
                        bg-[#edf7fc]
                        text-[#1675b9]
                      "
                    >
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <div>
                      <p
                        className="
                          text-xs
                          font-extrabold
                          text-[#123f5c]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[11px]
                          font-medium
                          text-[#718795]
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

      {/* ======================================================
          DECORAÇÃO
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-[42%]

          h-72
          w-72

          rounded-full
          bg-[#58b7e7]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-40

          h-80
          w-80

          rounded-full
          bg-white/50
          blur-3xl
        "
      />
    </section>
  );
}