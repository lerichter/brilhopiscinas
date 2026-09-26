import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitação recebida",
  description:
    "Recebemos sua solicitação de orçamento. A equipe Brilho Piscinas entrará em contato pelo WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main
      className="
        relative flex min-h-screen items-center overflow-hidden
        bg-[#062d47]
        px-5 py-16
        text-white
        sm:px-6
      "
    >
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
        className="
          relative mx-auto w-full max-w-[680px]
          rounded-[28px]
          border border-white/80
          bg-white
          p-7
          text-center
          text-[#0b2840]
          shadow-[0_30px_80px_rgba(2,25,41,0.32)]
          sm:p-10
          lg:p-12
        "
      >
        <Link
          href="/"
          aria-label="Voltar para a página inicial da Brilho Piscinas"
          className="mx-auto block w-[190px] sm:w-[220px]"
        >
          <Image
            src="/logo-brilho.png"
            alt="Brilho Piscinas"
            width={767}
            height={139}
            priority
            className="h-auto w-full"
          />
        </Link>

        <div
          className="
            mx-auto mt-9
            flex h-16 w-16 items-center justify-center
            rounded-full
            bg-[#eaf5fc]
            text-[#1675b9]
          "
        >
          <Check size={32} strokeWidth={2.8} />
        </div>

        <p
          className="
            mt-7
            text-xs
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-[#ef7622]
          "
        >
          Solicitação recebida
        </p>

        <h1
          className="
            mt-3
            text-3xl
            font-extrabold
            leading-tight
            tracking-[-0.03em]
            text-[#073456]
            sm:text-4xl
          "
        >
          Obrigado pelo contato!
        </h1>

        <p
          className="
            mx-auto mt-5 max-w-[520px]
            text-sm
            font-medium
            leading-7
            text-[#566d7c]
            sm:text-base
          "
        >
          Sua mensagem foi preparada e o WhatsApp foi aberto para concluir o
          envio. Nossa equipe responderá assim que possível para entender sua
          necessidade.
        </p>

        <div
          className="
            mt-8
            flex items-start gap-3
            rounded-2xl
            bg-[#eef7fc]
            p-4
            text-left
            text-sm
            font-semibold
            leading-6
            text-[#234b64]
          "
        >
          <MessageCircle
            size={20}
            className="mt-0.5 shrink-0 text-[#1675b9]"
          />

          Caso o WhatsApp não tenha aberto, volte ao formulário e tente
          novamente.
        </div>

        <Link
          href="/#contato"
          className="
            mt-8
            inline-flex min-h-12 items-center justify-center gap-2
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
          <ArrowLeft size={17} strokeWidth={2.3} />

          Voltar ao site
        </Link>
      </div>
    </main>
  );
}
