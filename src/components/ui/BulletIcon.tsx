type BulletIconProps = {
  className?: string
  alt?: string
}

export default function BulletIcon({ className = '', alt = '' }: BulletIconProps) {
  return (
    <img
      src="/logo/favicon.svg"
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={`w-2.5 ${className}`}
      loading="lazy"
    />
  )
}
