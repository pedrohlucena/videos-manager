import { Checkbox } from '@/components'
import { MonitorPlay } from '@phosphor-icons/react/dist/ssr'
import { MouseEvent } from 'react'
import { twMerge } from 'tailwind-merge'

interface VideoItemProps {
  className: string
  title: string
  duration: string
}

export function VideoItem({ className, title, duration }: VideoItemProps) {
  const handleMarkVideoAsCompleted = (event: MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      className={twMerge(
        'flex gap-4 w-full px-4 py-2 hover:bg-gray4',
        className,
      )}
    >
      <span>
        <Checkbox onClick={handleMarkVideoAsCompleted} />
      </span>

      <span className="flex flex-col gap-2 ">
        <p className="text-sm text-gray1">{title}</p>

        <span className="flex items-center gap-1">
          <MonitorPlay className="text-gray1" size={16} />

          <p className="text-xs text-gray1">{duration}</p>
        </span>
      </span>
    </div>
  )
}
