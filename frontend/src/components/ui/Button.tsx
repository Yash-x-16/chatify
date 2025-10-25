import { type ReactNode } from 'react'

interface ButtonProps {
  label: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  isWidthFull?: boolean
  iconOnStart?: ReactNode
  iconOnEnd?: ReactNode
  onClick?: () => void
  disabled?: boolean
}

function Button({
  label,
  type = 'button',
  variant = 'primary',
  isWidthFull = false,
  iconOnStart,
  iconOnEnd,
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = `flex items-center justify-center gap-2 font-medium py-3 px-6`

  const variantStyles =
    variant === 'primary'
      ? `bg-[#FF5722] text-white hover:bg-[#e14d1f] hover:scale-103 active:scale-100 transition-all rounded-xl duration-300 cursor-pointer shadow-md shadow-amber-100 `
      : `bg-black hover:bg-green-300 shadow-md transition-all duration-300 text-white hover:bg-blue-500 cursor-pointer rounded-3xl `

  const widthStyle = isWidthFull ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${widthStyle} ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      }`}
    >
      {iconOnStart ? <span className="text-lg">{iconOnStart}</span> : null}
      <span>{label}</span>
      {iconOnEnd ? <span className="text-lg">{iconOnEnd}</span> : null}
    </button>
  )
}

export default Button
