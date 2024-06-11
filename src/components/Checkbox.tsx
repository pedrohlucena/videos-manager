import { Check } from '@phosphor-icons/react/dist/ssr'
import { MouseEvent } from 'react'

interface CheckboxProps {
  onClick?: (event: MouseEvent) => void
}

export function Checkbox({ onClick }: CheckboxProps) {
  return (
    <label onClick={onClick}>
      <input
        className="peer w-0 h-0 absolute opacity-0 overflow-hidden"
        type="checkbox"
      />

      <Check
        className="bg-gray1 text-white border-2 border-solid border-gray1 peer-checked:bg-transparent peer-checked:text-transparent"
        size={16}
      />
    </label>
  )
}
