function Button({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  href,
  type = "button",
}) {
  const className = `inline-flex min-h-12 items-center justify-center gap-2 border px-6 py-4 font-body text-sm font-bold uppercase tracking-[0.16em] leading-none transition-colors sm:px-8 sm:text-base ${
    backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : "border-volt bg-volt text-ink hover:bg-fog"
  } ${fullWidth ? "w-full" : ""}`;

  const content = (
    <>
      {label}
      {iconURL && (
        <img src={iconURL} alt="" className="ml-2 h-5 w-5" width={20} height={20} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {content}
    </button>
  );
}

export default Button;
