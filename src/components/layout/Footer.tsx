import Image from "next/image";

import {
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const navigation = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Serviços",
    href: "#servicos",
  },
  {
    label: "Resultados",
    href: "#resultados",
  },
  {
    label: "Manutenção",
    href: "#manutencao",
  },
  {
    label: "Sobre nós",
    href: "#sobre",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#041f31]
        text-white
      "
    >
      {/* FUNDO DECORATIVO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-56 right-0
          h-[520px] w-[520px]
          rounded-full
          bg-[#0f5e8d]/15
          blur-[130px]
        "
      />

      <Container className="relative">
        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="
            grid gap-12
            py-14

            sm:py-16

            lg:grid-cols-[1.3fr_0.7fr_0.9fr]
            lg:gap-16
            lg:py-20
          "
        >
          {/* MARCA */}
          <div>
            <a
              href="#inicio"
              aria-label="Brilho Piscinas - Voltar ao início"
              className="
                inline-flex
                items-center
                justify-center

                rounded-[26px]
                border border-white/10
                bg-white

                px-6 py-5

                shadow-[0_18px_45px_rgba(0,0,0,0.18)]

                transition-transform duration-300

                hover:-translate-y-1
              "
            >
              <Image
                src="/logo-brilho-completa.png"
                alt="Brilho Piscinas"
                width={1080}
                height={720}
                className="
                  h-auto
                  w-[210px]
                  object-contain

                  sm:w-[245px]
                  lg:w-[260px]
                "
              />
            </a>

            <h2
              className="
                mt-8
                max-w-[430px]

                text-[24px]
                font-[800]
                leading-[1.15]
                tracking-[-0.035em]
                text-white

                sm:text-[28px]
              "
            >
              Mais de 40 anos cuidando de piscinas.
            </h2>

            <p
              className="
                mt-4
                max-w-[460px]

                text-sm
                font-medium
                leading-7
                text-white/55
              "
            >
              Experiência, conhecimento técnico e cuidado profissional para
              manter sua piscina sempre limpa, equilibrada e pronta para
              aproveitar.
            </p>

            <div
              className="
                mt-6

                inline-flex
                items-center
                gap-2

                rounded-full
                border border-white/10
                bg-white/[0.05]

                px-4 py-2.5

                text-xs
                font-bold
                text-white/70
              "
            >
              <ShieldCheck
                size={16}
                className="text-[#68c4ef]"
              />

              Equipe treinada e especializada
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <p
              className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-[#ff9851]
              "
            >
              Navegação
            </p>

            <nav
              aria-label="Navegação do rodapé"
              className="mt-6 flex flex-col gap-1"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    group

                    flex w-fit
                    items-center gap-2

                    py-2

                    text-sm
                    font-semibold
                    text-white/62

                    transition-colors

                    hover:text-white
                  "
                >
                  <ChevronRight
                    size={14}
                    className="
                      text-[#4daedd]
                      transition-transform

                      group-hover:translate-x-0.5
                    "
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ATENDIMENTO */}
          <div>
            <p
              className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-[#ff9851]
              "
            >
              Atendimento
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="#contato"
                className="
                  group

                  flex items-center gap-4

                  rounded-2xl
                  border border-white/10
                  bg-white/[0.045]

                  p-4

                  transition-all

                  hover:border-white/20
                  hover:bg-white/[0.07]
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0
                    items-center justify-center

                    rounded-xl

                    bg-[#0c4669]
                    text-[#78cef5]
                  "
                >
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-white/40">
                    Orçamento
                  </p>

                  <p className="mt-0.5 text-sm font-extrabold text-white">
                    Fale com a Brilho
                  </p>
                </div>
              </a>

              <div
                className="
                  flex items-center gap-4

                  rounded-2xl
                  border border-white/10
                  bg-white/[0.045]

                  p-4
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0
                    items-center justify-center

                    rounded-xl

                    bg-[#0c4669]
                    text-[#78cef5]
                  "
                >
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-white/40">
                    Área de atendimento
                  </p>

                  <p className="mt-0.5 text-sm font-extrabold text-white">
                    Consulte nossa equipe
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-center gap-4

                  rounded-2xl
                  border border-white/10
                  bg-white/[0.045]

                  p-4
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0
                    items-center justify-center

                    rounded-xl

                    bg-[#0c4669]
                    text-[#78cef5]
                  "
                >
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-white/40">
                    Atendimento
                  </p>

                  <p className="mt-0.5 text-sm font-extrabold text-white">
                    Entre em contato conosco
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div
          className="
            flex flex-col
            gap-5

            border-t
            border-white/10

            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                font-semibold
                text-white/40
              "
            >
              © {new Date().getFullYear()} Brilho Piscinas. Todos os direitos
              reservados.
            </p>

            <p
              className="
                mt-1
                text-[11px]
                font-medium
                text-white/25
              "
            >
              Manutenção, tratamento e assistência técnica para piscinas.
            </p>
          </div>

          <a
            href="https://www.koratecnologia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[11px]
              font-medium
              text-white/40
              transition-colors
              hover:text-white/70
            "
          >
            Desenvolvido por Kora - www.koratecnologia.com.br
          </a>
        </div>
      </Container>
    </footer>
  );
}