import { YoutubeEmbed } from '@/components'
import { PlaylistContent } from './components'

interface VideoManagementProps {
  params: {
    playlistId: string
    videoId: string
  }
}

export default function VideoManagement({ params }: VideoManagementProps) {
  const { playlistId, videoId } = params

  return (
    <div className="flex relative">
      <main className="w-full [&>div>div>lite-youtube]:max-w-[100%] [&>div>div>lite-youtube]:max-h-[80vh]">
        <YoutubeEmbed videoId={videoId} />
      </main>

      <PlaylistContent />
    </div>
  )
}
