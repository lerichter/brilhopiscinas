"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import ButtonLink from "@/components/ui/ButtonLink";

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
    label: "Sobre nós",
    href: "#sobre",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ======================================================
          HEADER FIXO
      ====================================================== */}
      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <div
            className={`
              flex items-center justify-between

              rounded-2xl
              border
              px-4

              backdrop-blur-xl

              transition-all
              duration-300

              sm:px-5
              lg:px-6

              ${
                scrolled
                  ? `
                    mt-2
                    h-[66px]
                    border-white/80
                    bg-white/95
                    shadow-[0_14px_45px_rgba(4,38,61,0.15)]

                    lg:h-[70px]
                  `
                  : `
                    mt-4
                    h-[74px]
                    border-white/70
                    bg-white/92
                    shadow-[0_12px_40px_rgba(4,38,61,0.08)]

                    lg:mt-5
                    lg:h-[78px]
                  `
              }
            `}
          >
            {/* LOGO */}
            <a
              href="#inicio"
              aria-label="Brilho Piscinas - Página inicial"
              className={`
                relative block shrink-0
                transition-all duration-300

                ${
                  scrolled
                    ? "w-[155px] sm:w-[170px]"
                    : "w-[170px] sm:w-[190px]"
                }
              `}
            >
              <Image
                src="/logo-brilho.png"
                alt="Brilho Piscinas"
                width={767}
                height={139}
                priority
                className="h-auto w-full"
              />
            </a>

            {/* NAVEGAÇÃO DESKTOP */}
            <nav
              aria-label="Navegação principal"
              className="
                hidden
                items-center
                gap-1
                lg:flex
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    rounded-lg
                    px-4 py-2

                    text-[13px]
                    font-semibold
                    text-[#496576]

                    transition-colors

                    hover:bg-[#f2f8fb]
                    hover:text-[#0b4f7c]
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA DESKTOP */}
            <div className="hidden lg:block">
              <ButtonLink
                href="#contato"
                message="Olá, Brilho Piscinas! Gostaria de solicitar um orçamento."
              >
                <MessageCircle size={17} />
                Solicitar orçamento
              </ButtonLink>
            </div>

            {/* MENU MOBILE */}
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="
                flex
                h-11 w-11
                items-center justify-center

                rounded-xl
                border border-[#d8e5ed]
                bg-white
                text-[#0d527e]

                transition-colors

                hover:bg-[#f2f8fb]

                lg:hidden
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      {/* ======================================================
          OVERLAY MOBILE
      ====================================================== */}
      <div
        className={`
          fixed inset-0
          z-[60]

          bg-[#061f30]/45
          backdrop-blur-[2px]

          transition-opacity
          duration-300

          lg:hidden

          ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* ======================================================
          MENU MOBILE
      ====================================================== */}
      <aside
        className={`
          fixed
          right-0 top-0
          z-[70]

          flex
          h-dvh
          w-[min(86vw,360px)]
          flex-col

          bg-white
          p-5

          shadow-[-20px_0_60px_rgba(5,37,58,0.18)]

          transition-transform
          duration-300
          ease-out

          lg:hidden

          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* CABEÇALHO DO MENU */}
        <div className="flex items-center justify-between">
          <Image
            src="/logo-brilho.png"
            alt="Brilho Piscinas"
            width={767}
            height={139}
            className="h-auto w-[165px]"
          />

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileMenuOpen(false)}
            className="
              flex
              h-10 w-10
              items-center justify-center

              rounded-xl
              bg-[#f1f7fa]
              text-[#0d527e]
            "
          >
            <X size={21} />
          </button>
        </div>

        {/* LINKS */}
        <nav
          aria-label="Navegação mobile"
          className="mt-10 flex flex-col"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                border-b
                border-[#e7eff4]

                px-1 py-4

                text-base
                font-semibold
                text-[#173f58]

                transition-colors

                hover:text-[#1675b9]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto pt-8">
          <ButtonLink
            href="#contato"
            className="w-full"
          >
            <MessageCircle size={18} />

            Solicitar orçamento
          </ButtonLink>

          <p
            className="
              mt-4
              text-center
              text-xs
              leading-5
              text-[#78909e]
            "
          >
            Atendimento especializado para cuidar da sua piscina.
          </p>
        </div>
      </aside>
    </>
  );
}