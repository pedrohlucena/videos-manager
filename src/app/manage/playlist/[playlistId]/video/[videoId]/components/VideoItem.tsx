import { Checkbox } from '@/components'
import { MonitorPlay } from '@phosphor-icons/react/dist/ssr'

interface VideoItemProps {
  number: number
  title: string
  duration: string
}

export function VideoItem({ title, duration }: VideoItemProps) {
  return (
    <div className="flex gap-4 w-full px-4 py-2 hover:bg-gray4">
      <span>
        <Checkbox />
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
