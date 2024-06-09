import { MouseEvent } from 'react'

interface CheckboxProps {
  onClick?: (event: MouseEvent) => void
}

export function Checkbox({ onClick }: CheckboxProps) {
  return <input type="checkbox" onClick={onClick} />
}
