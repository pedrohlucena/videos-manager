/* eslint-disable camelcase */

import { youtube_v3 } from 'googleapis'

export class YoutubeService {
  private youtube: youtube_v3.Youtube

  constructor(api_key: string) {
    this.youtube = new youtube_v3.Youtube({ auth: api_key })
  }

  getPlaylistItems(params: youtube_v3.Params$Resource$Playlistitems$List) {
    return this.youtube.playlistItems.list(params)
  }

  getVideos(params: youtube_v3.Params$Resource$Videos$List) {
    return this.youtube.videos.list(params)
  }
}
