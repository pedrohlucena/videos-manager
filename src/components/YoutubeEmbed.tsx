import { YouTubeEmbed as NextYouTubeEmbed } from '@next/third-parties/google'

interface YoutubeEmbedProps {
  videoId: string
}

export function YoutubeEmbed({ videoId }: YoutubeEmbedProps) {
  return (
    <div>
      <NextYouTubeEmbed videoid={videoId} />
    </div>
  )
}
