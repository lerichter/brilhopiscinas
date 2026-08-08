"use client";

import {
  ChevronsLeftRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import Container from "@/components/layout/Container";

/*
 * Ajuste fino do enquadramento.
 *
 * Como as duas fotos foram tiradas de posições ligeiramente diferentes,
 * cada uma recebe seu próprio object-position.
 *
 * Se precisarmos refinar depois, mexemos somente nestes dois valores.
 */
const BEFORE_IMAGE_POSITION = "50% 46%";
const AFTER_IMAGE_POSITION = "50% 27%";

export default function ResultsSection() {
  const [position, setPosition] = useState(50);

  return (
    <section
      id="resultados"
      className="
        relative
        overflow-hidden
        bg-white
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
          absolute -right-60 top-20
          h-[520px] w-[520px]
          rounded-full
          bg-[#edf8fd]
          blur-[120px]
        "
      />

      <Container className="relative">
        <div
          className="
            grid
            min-w-0
            gap-12

            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* ==================================================
              TEXTO
          ================================================== */}
          <div className="min-w-0">
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

              Resultados
            </div>

            <h2
              className="
                mt-4
                max-w-[470px]

                text-[36px]
                font-[800]
                leading-[1.05]
                tracking-[-0.04em]
                text-[#082f4a]

                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Resultados que

              <span className="block text-[#1675b9]">
                você pode ver.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[480px]

                text-[14px]
                font-medium
                leading-7
                text-[#607887]

                sm:text-base
              "
            >
              Tratamento correto, manutenção constante e cuidado profissional
              fazem toda a diferença na qualidade e na aparência da água.
            </p>

            <div
              className="
                mt-8
                flex
                max-w-[440px]
                items-start
                gap-4

                rounded-2xl
                border
                border-[#dfeaf0]
                bg-[#f7fbfd]

                p-4

                sm:p-5
              "
            >
              <div
                className="
                  flex
                  h-11 w-11
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl
                  bg-white
                  text-[#1675b9]

                  shadow-[0_6px_20px_rgba(7,52,86,0.07)]
                "
              >
                <Sparkles size={19} />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-sm
                    font-extrabold
                    text-[#123d58]
                  "
                >
                  Cuidado que aparece no resultado
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-medium
                    leading-5
                    text-[#708692]
                  "
                >
                  Cada piscina exige uma avaliação específica para definir o
                  tratamento e a rotina mais adequados.
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              COMPARADOR
          ================================================== */}
          <div className="w-full min-w-0 max-w-full">
            <div
              className="
                relative
                w-full
                max-w-full
                overflow-hidden

                rounded-[22px]
                border
                border-[#d9e8f0]
                bg-[#e9f3f7]

                shadow-[0_20px_50px_rgba(7,52,86,0.11)]

                sm:rounded-[30px]
                sm:shadow-[0_26px_65px_rgba(7,52,86,0.13)]
              "
            >
              <div
                className="
                  relative
                  w-full

                  aspect-[4/3]

                  sm:aspect-[16/10]
                "
              >
                {/* ============================================
                    DEPOIS
                ============================================ */}
                <Image
                  src="/images/piscina-depois.jpg"
                  alt="Piscina depois do tratamento e manutenção"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: AFTER_IMAGE_POSITION,
                  }}
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    65vw
                  "
                />

                {/* ============================================
                    ANTES
                ============================================ */}
                <div
                  className="
                    absolute inset-0
                    overflow-hidden
                  "
                  style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                  }}
                >
                  <Image
                    src="/images/piscina-antes.jpg"
                    alt="Piscina antes do tratamento"
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: BEFORE_IMAGE_POSITION,
                    }}
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 90vw,
                      65vw
                    "
                  />
                </div>

                {/* SOMBREADO INFERIOR */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0

                    h-24

                    bg-gradient-to-t
                    from-[#05263a]/40
                    to-transparent

                    sm:h-28
                  "
                />

                {/* DIVISOR */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-y-0
                    z-20

                    w-[2px]

                    bg-white

                    shadow-[0_0_14px_rgba(0,0,0,0.25)]
                  "
                  style={{
                    left: `${position}%`,
                  }}
                >
                  <div
                    className="
                      absolute
                      left-1/2 top-1/2

                      flex
                      h-10 w-10
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center

                      rounded-full
                      border-[3px]
                      border-white

                      bg-[#1675b9]
                      text-white

                      shadow-[0_8px_24px_rgba(5,35,54,0.25)]

                      sm:h-12
                      sm:w-12
                    "
                  >
                    <ChevronsLeftRight
                      size={18}
                      strokeWidth={2.3}
                    />
                  </div>
                </div>

                {/* CONTROLE */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={position}
                  onChange={(event) =>
                    setPosition(Number(event.target.value))
                  }
                  aria-label="Comparar piscina antes e depois"
                  className="
                    absolute inset-0
                    z-30

                    m-0
                    h-full
                    w-full
                    max-w-full

                    cursor-ew-resize
                    opacity-0
                  "
                />

                {/* LABEL ANTES */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-3 left-3
                    z-20

                    rounded-full
                    border
                    border-white/20

                    bg-[#062d47]/75

                    px-3 py-1.5

                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-white

                    backdrop-blur-md

                    sm:bottom-5
                    sm:left-5
                    sm:px-4
                    sm:py-2
                    sm:text-[11px]
                  "
                >
                  Antes
                </div>

                {/* LABEL DEPOIS */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-3 right-3
                    z-20

                    rounded-full
                    border
                    border-white/20

                    bg-white/88

                    px-3 py-1.5

                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-[#0b4f7c]

                    backdrop-blur-md

                    sm:bottom-5
                    sm:right-5
                    sm:px-4
                    sm:py-2
                    sm:text-[11px]
                  "
                >
                  Depois
                </div>
              </div>
            </div>

            {/* INSTRUÇÃO */}
            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2

                text-[11px]
                font-semibold
                text-[#7a8f9c]

                sm:text-xs
              "
            >
              <ChevronsLeftRight size={15} />

              Arraste para comparar
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}