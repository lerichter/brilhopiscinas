import type { ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonLinkVariant;
  className?: string;
  message?: string;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-[#ef7622] text-white shadow-[0_10px_24px_rgba(239,118,34,0.24)] hover:bg-[#dc6516] hover:shadow-[0_14px_30px_rgba(239,118,34,0.3)]",

  secondary:
    "border border-[#bdd6e7] bg-white/90 text-[#0b4f7c] shadow-sm hover:border-[#8dbbd8] hover:bg-white",

  ghost:
    "bg-transparent text-[#164a6c] hover:bg-[#eef7fc]",
};

const defaultMessage =
  "Olá, Brilho Piscinas! Gostaria de mais informações.";

export default function ButtonLink({
  children,
  variant = "primary",
  className = "",
  message = defaultMessage,
}: ButtonLinkProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "#contato";

  return (
    <a
      href={whatsappUrl}
      target={whatsappNumber ? "_blank" : undefined}
      rel={whatsappNumber ? "noopener noreferrer" : undefined}
      className={`
        inline-flex
        min-h-12
        items-center
        justify-center
        gap-2

        rounded-xl
        px-5
        py-3

        text-sm
        font-bold

        transition-all
        duration-200

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1675b9]
        focus-visible:ring-offset-2

        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </a>
  );
}