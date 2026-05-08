import spriteUrl from "../assets/symbol-defs.svg?url";

/**
 * Іконка зі спрайта `src/assets/symbol-defs.svg`.
 * @param {string} id — значення атрибута `id` у `<symbol>`
 * @param {number} [size=24] — ширина та висота в px
 */
export default function SvgSpriteIcon({ id, size = 24, className, title, style, ...rest }) {
  const href = `${spriteUrl}#${id}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      style={{ color: "#28303f", ...style }}
      fill="currentColor"
      focusable="false"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <use href={href} xlinkHref={href} />
    </svg>
  );
}
