import { CODE_MESSAGES } from '@/app/api/constants'
import { YoutubeService } from '@/app/api/service'
import { formatISODuration } from '@/app/api/utils'
import { env } from '@/env'

interface Context {
  params: {
    playlistId: string
  }
}

export async function GET(_: Request, context: Context) {
  try {
    const { playlistId } = context.params

    const youtubeService = new YoutubeService(
      env.GOOGLE_CLOUD_YOUTUBE_V3_API_KEY,
    )

    const playlistItemsRes = await youtubeService.getPlaylistItems({
      part: ['contentDetails'],
      playlistId,
      maxResults: 50,
    })

    const playlistItems = playlistItemsRes.data.items

    if (!playlistItems)
      return Response.json(CODE_MESSAGES.PLAYLIST_NOT_FOUND, { status: 404 })

    const availablePlaylistItems = playlistItems.filter(
      (item) => item.contentDetails?.videoId,
    )

    const videoIds = availablePlaylistItems.map(
      (item) => item.contentDetails!.videoId as string,
    )

    const videosRes = await youtubeService.getVideos({
      part: ['snippet', 'contentDetails'],
      id: videoIds,
    })

    const apiVideos = videosRes.data.items!

    const videos = apiVideos.map((video) => {
      const formatedDuration = formatISODuration(
        video.contentDetails!.duration as string,
      )

      return {
        id: video.id,
        title: video.snippet?.title,
        duration: formatedDuration,
      }
    })

    const response = {
      items: videos,
    }

    return Response.json(response)
  } catch (error) {
    return Response.json(CODE_MESSAGES.INTERNAL_SERVER_ERROR, { status: 500 })
  }
}
