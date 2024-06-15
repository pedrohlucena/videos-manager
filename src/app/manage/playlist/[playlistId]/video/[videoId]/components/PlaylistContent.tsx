'use client'

import { Video } from '@/models'
import { ArrowLeft, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { VideoItem } from '../components'

interface PlaylistContentProps {
  videos: Video[]
}

export function PlaylistContent({ videos }: PlaylistContentProps) {
  const { playlistId } = useParams()

  const [open, setOpen] = useState(true)

  function handlePlayListContentOpen() {
    setOpen(true)
  }

  function handlePlayListContentClose() {
    setOpen(false)
  }

  return (
    <>
      {!open && (
        <button
          className="group flex items-center gap-1 absolute bg-gray2 p-3 border border-r-0 border-gray3 text-white top-14 left-full translate-x-[-3rem]"
          onClick={handlePlayListContentOpen}
        >
          <ArrowLeft className="flex-shrink-0" size={24} weight="bold" />

          <p className="font-bold text-base text-nowrap opacity-0 group-hover:opacity-100 transition duration-500">
            Playlist content
          </p>
        </button>
      )}

      {open && (
        <aside className="w-[18.75rem] h-[calc(100vh-3.4375rem)] bg-white border-l border-solid border-l-gray4 flex-shrink-0">
          <header className="flex items-center justify-between p-2 pl-4 border border-solid border-gray4 border-r-0">
            <p className="font-bold text-base">Playlist content</p>

            <X
              className="cursor-pointer p-2"
              size={36}
              weight="bold"
              onClick={handlePlayListContentClose}
            />
          </header>

          <main className="h-[calc(100%-3.375rem)] overflow-y-scroll">
            <ul>
              {videos.map((video, index) => {
                const videoNumber = index + 1

                const url = `/manage/playlist/${playlistId}/video/${video.id}`

                return (
                  <li key={video.id}>
                    <Link href={url}>
                      <VideoItem
                        number={videoNumber}
                        title={video.title}
                        duration={video.duration}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </main>
        </aside>
      )}
    </>
  )
}
