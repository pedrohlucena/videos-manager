import { CaretDown, ShareFat, Trophy } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="flex items-center justify-between w-full h-[3.43rem] px-4 bg-gray1">
      <span className="flex items-center gap-4">
        <Link href="/" className="font-bold text-white text-2xl">
          logo
        </Link>

        <span className="border-r border-gray2 h-[calc(3.43rem*0.4)]" />

        <Link href="/" className="text-white text-sm">
          Curso de Python 3 - Mundo 1: Fundamentos
        </Link>
      </span>

      <span className="flex items-center gap-6">
        <button className="flex items-center">
          <span className="flex items-center justify-center w-[2.1875rem] h-[2.1875rem] rounded-full outline outline-2 outline-gray3 mr-2">
            <Trophy className="text-gray3" size={20} />
          </span>

          <p className="text-white text-sm">Your progress</p>

          <CaretDown className="text-white ml-1" size={16} weight="bold" />
        </button>

        <button className="flex items-center gap-1 text-white h-10 px-3 border border-white font-bold text-sm">
          Share
          <ShareFat size={16} weight="fill" />
        </button>
      </span>
    </header>
  )
}
