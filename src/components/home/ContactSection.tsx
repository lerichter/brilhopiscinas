"use client";

import {
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import type { FormEvent } from "react";

import Container from "@/components/layout/Container";

const serviceOptions = [
  "Manutenção recorrente",
  "Tratamento da água",
  "Assistência técnica",
  "Avaliação da piscina",
  "Outro",
];

export default function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const location = String(form.get("location") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

    if (!whatsappNumber) {
      console.error(
        "Configure NEXT_PUBLIC_WHATSAPP_NUMBER no arquivo .env.local.",
      );

      return;
    }

    const whatsappMessage = [
      "Olá, Brilho Piscinas! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      location ? `Bairro / Cidade: ${location}` : "",
      service ? `Serviço: ${service}` : "",
      message ? `Mensagem: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="
        relative overflow-hidden
        bg-[#062d47]
        py-20
        text-white
        sm:py-24
        lg:py-32
      "
    >
      {/* ======================================================
          FUNDO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-52 -top-48
          h-[620px] w-[620px]
          rounded-full
          bg-[#1675b9]/25
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-64 -left-48
          h-[620px] w-[620px]
          rounded-full
          bg-[#0f6396]/30
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[18%] top-[12%]
          h-40 w-40
          rounded-full
          bg-[#ef7622]/10
          blur-[70px]
        "
      />

      <Container className="relative">
        <div
          className="
            grid gap-14
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-start
            lg:gap-20
          "
        >
          {/* ==================================================
              TEXTO
          ================================================== */}

          <div className="lg:sticky lg:top-10">
            <div
              className="
                inline-flex items-center gap-2
                text-[11px] font-extrabold
                uppercase tracking-[0.16em]
                text-[#ff9a54]
                sm:text-xs
              "
            >
              <span className="h-[2px] w-6 rounded-full bg-[#ef7622]" />

              Fale com a Brilho
            </div>

            <h2
              className="
                mt-4
                max-w-[570px]
                text-[40px]
                font-[800]
                leading-[1.03]
                tracking-[-0.045em]
                text-white

                sm:text-[46px]
                lg:text-[56px]
              "
            >
              Vamos cuidar
              <span className="block text-[#74c8f1]">
                da sua piscina?
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[520px]
                text-[15px]
                font-medium
                leading-7
                text-white/65
                sm:text-base
              "
            >
              Conte para a nossa equipe o que você precisa. Avaliamos sua
              necessidade e indicamos o atendimento mais adequado para manter
              sua piscina limpa, segura e pronta para aproveitar.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-9 space-y-4">
              {[
                "Atendimento especializado",
                "Avaliação de acordo com cada piscina",
                "Manutenção e acompanhamento profissional",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                    text-sm font-bold
                    text-white/85
                  "
                >
                  <span
                    className="
                      flex h-7 w-7
                      shrink-0 items-center justify-center
                      rounded-full
                      border border-[#4c91ba]/50
                      bg-[#0d496e]
                      text-[#79cdf4]
                    "
                  >
                    <Check size={14} strokeWidth={2.6} />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* INFORMAÇÕES */}
            <div
              className="
                mt-10
                grid gap-3
                sm:grid-cols-2
                lg:grid-cols-1
              "
            >
              <div
                className="
                  flex items-center gap-4
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0 items-center justify-center
                    rounded-xl
                    bg-white/[0.07]
                    text-[#73cdf5]
                  "
                >
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white/45">
                    Atendimento
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-white">
                    Fale conosco pelo WhatsApp
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-center gap-4
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0 items-center justify-center
                    rounded-xl
                    bg-white/[0.07]
                    text-[#73cdf5]
                  "
                >
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white/45">
                    Região de atendimento
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-white">
                    Consulte nossa área de atendimento
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              FORMULÁRIO
          ================================================== */}

          <div
            className="
              rounded-[28px]
              border border-white/12
              bg-white
              p-5
              text-[#082f4a]
              shadow-[0_30px_80px_rgba(0,0,0,0.2)]

              sm:p-7
              lg:rounded-[34px]
              lg:p-8
            "
          >
            <div
              className="
                flex items-start
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[0.15em]
                    text-[#ef7622]
                  "
                >
                  Solicite um orçamento
                </p>

                <h3
                  className="
                    mt-2
                    text-[24px]
                    font-[800]
                    tracking-[-0.035em]
                    text-[#082f4a]

                    sm:text-[28px]
                  "
                >
                  Conte um pouco sobre sua piscina.
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[500px]
                    text-[13px]
                    font-medium
                    leading-6
                    text-[#718794]
                  "
                >
                  Preencha os dados abaixo e sua mensagem será preparada para
                  envio pelo WhatsApp.
                </p>
              </div>

              <div
                className="
                  hidden h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-2xl
                  bg-[#eef8fd]
                  text-[#1675b9]
                  sm:flex
                "
              >
                <MessageCircle size={21} />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >
              <div
                className="
                  grid gap-5
                  sm:grid-cols-2
                "
              >
                {/* NOME */}
                <label className="block">
                  <span
                    className="
                      mb-2 block
                      text-xs
                      font-extrabold
                      text-[#234b64]
                    "
                  >
                    Seu nome
                  </span>

                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    className="
                      h-13 w-full
                      rounded-xl
                      border border-[#d9e6ed]
                      bg-[#fbfdfe]
                      px-4
                      text-sm
                      font-medium
                      text-[#123b56]
                      outline-none
                      transition-all

                      placeholder:text-[#9aabb5]

                      focus:border-[#77bada]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#1675b9]/8
                    "
                  />
                </label>

                {/* TELEFONE */}
                <label className="block">
                  <span
                    className="
                      mb-2 block
                      text-xs
                      font-extrabold
                      text-[#234b64]
                    "
                  >
                    Telefone / WhatsApp
                  </span>

                  <div className="relative">
                    <Phone
                      size={16}
                      className="
                        pointer-events-none
                        absolute left-4 top-1/2
                        -translate-y-1/2
                        text-[#8da2af]
                      "
                    />

                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="(11) 99999-9999"
                      className="
                        h-13 w-full
                        rounded-xl
                        border border-[#d9e6ed]
                        bg-[#fbfdfe]
                        pl-11 pr-4
                        text-sm
                        font-medium
                        text-[#123b56]
                        outline-none
                        transition-all

                        placeholder:text-[#9aabb5]

                        focus:border-[#77bada]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#1675b9]/8
                      "
                    />
                  </div>
                </label>

                {/* BAIRRO / CIDADE */}
                <label className="block">
                  <span
                    className="
                      mb-2 block
                      text-xs
                      font-extrabold
                      text-[#234b64]
                    "
                  >
                    Bairro / Cidade
                  </span>

                  <div className="relative">
                    <MapPin
                      size={16}
                      className="
                        pointer-events-none
                        absolute left-4 top-1/2
                        -translate-y-1/2
                        text-[#8da2af]
                      "
                    />

                    <input
                      type="text"
                      name="location"
                      autoComplete="address-level2"
                      placeholder="Onde fica a piscina?"
                      className="
                        h-13 w-full
                        rounded-xl
                        border border-[#d9e6ed]
                        bg-[#fbfdfe]
                        pl-11 pr-4
                        text-sm
                        font-medium
                        text-[#123b56]
                        outline-none
                        transition-all

                        placeholder:text-[#9aabb5]

                        focus:border-[#77bada]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#1675b9]/8
                      "
                    />
                  </div>
                </label>

                {/* SERVIÇO */}
                <label className="block">
                  <span
                    className="
                      mb-2 block
                      text-xs
                      font-extrabold
                      text-[#234b64]
                    "
                  >
                    O que você precisa?
                  </span>

                  <select
                    name="service"
                    defaultValue=""
                    className="
                      h-13 w-full
                      rounded-xl
                      border border-[#d9e6ed]
                      bg-[#fbfdfe]
                      px-4
                      text-sm
                      font-medium
                      text-[#123b56]
                      outline-none
                      transition-all

                      focus:border-[#77bada]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#1675b9]/8
                    "
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>

                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* MENSAGEM */}
              <label className="mt-5 block">
                <span
                  className="
                    mb-2 block
                    text-xs
                    font-extrabold
                    text-[#234b64]
                  "
                >
                  Conte mais para a gente
                </span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Ex.: preciso de manutenção semanal para uma piscina residencial..."
                  className="
                    w-full resize-none
                    rounded-xl
                    border border-[#d9e6ed]
                    bg-[#fbfdfe]
                    px-4 py-3.5
                    text-sm
                    font-medium
                    leading-6
                    text-[#123b56]
                    outline-none
                    transition-all

                    placeholder:text-[#9aabb5]

                    focus:border-[#77bada]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#1675b9]/8
                  "
                />
              </label>

              {/* CTA */}
              <div
                className="
                  mt-6
                  flex flex-col gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div
                  className="
                    flex items-start gap-2
                    text-[11px]
                    font-medium
                    leading-5
                    text-[#8296a1]
                  "
                >
                  <Clock3
                    size={15}
                    className="mt-0.5 shrink-0 text-[#1675b9]"
                  />

                  Nossa equipe entrará em contato para entender melhor sua
                  necessidade.
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex
                    min-h-12
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#ef7622]
                    px-5 py-3
                    text-sm
                    font-extrabold
                    text-white
                    shadow-[0_10px_24px_rgba(239,118,34,0.24)]
                    transition-all

                    hover:-translate-y-0.5
                    hover:bg-[#dc6516]
                    hover:shadow-[0_14px_30px_rgba(239,118,34,0.3)]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#ef7622]
                    focus-visible:ring-offset-2
                  "
                >
                  Enviar pelo WhatsApp

                  <Send size={16} strokeWidth={2.2} />
                </button>
              </div>
            </form>

            {/* RODAPÉ DO FORM */}
            <div
              className="
                mt-7
                flex items-center gap-2
                border-t border-[#e4edf2]
                pt-5
                text-[11px]
                font-semibold
                text-[#8296a1]
              "
            >
              <Check
                size={14}
                strokeWidth={2.5}
                className="text-[#1675b9]"
              />

              Atendimento realizado diretamente pela equipe Brilho Piscinas.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}