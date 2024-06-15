import { YoutubeEmbed } from '@/components'
import { env } from '@/env'
import { Video } from '@/models'
import { PlaylistContent } from './components'

interface VideoManagementProps {
  params: {
    playlistId: string
    videoId: string
  }
}

async function getVideos(playlistId: string): Promise<Video[]> {
  const url = `${env.NEXT_PUBLIC_API_BASE_URL}/api/bff/playlists/${playlistId}/videos`

  const response = await fetch(url, {
    next: {
      revalidate: 60 * 60, // 9 hours
    },
  })

  const { items } = await response.json()

  return items
}

export default async function VideoManagement({
  params,
}: VideoManagementProps) {
  const { playlistId, videoId } = params

  const videos = await getVideos(playlistId)

  return (
    <div className="flex relative">
      <main className="w-full [&>div>div>lite-youtube]:max-w-[100%] [&>div>div>lite-youtube]:max-h-[80vh]">
        <YoutubeEmbed videoId={videoId} />
      </main>

      <PlaylistContent videos={videos} />
    </div>
  )
}
