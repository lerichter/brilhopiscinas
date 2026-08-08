import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={`
        flex max-w-[660px] flex-col
        ${alignmentClasses}
        ${className}
      `}
    >
      {eyebrow ? (
        <span
          className="
            mb-4 inline-flex items-center gap-2
            text-[11px] font-extrabold uppercase
            tracking-[0.16em]
            text-[#ef7622]
            sm:text-xs
          "
        >
          <span className="h-[2px] w-6 rounded-full bg-[#ef7622]" />
          {eyebrow}
        </span>
      ) : null}

      <h2
        className="
          text-[34px] font-[800]
          leading-[1.08]
          tracking-[-0.035em]
          text-[#082f4a]
          sm:text-[40px]
          lg:text-[46px]
        "
      >
        {title}
      </h2>

      {description ? (
        <p
          className="
            mt-5 max-w-[590px]
            text-[15px] font-medium leading-7
            text-[#607887]
            sm:text-base
          "
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}