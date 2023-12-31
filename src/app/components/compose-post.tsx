'use client'

import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'
import { ComposePostButton } from './compose-post-button'

export function ComposePost ({
  userName,
  userAvatarUrl
}: {
  userName: string
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-3 border-b border-white/20'>
      <img src={userAvatarUrl} className='rounded-full w-10 h-10 object-contain mr-4' />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
        name='content'
        rows={4}
        className='w-full text-xl bg-black placeholder-gray-500 p-2'
        placeholder={`What's on your mind, ${userName}?`}
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  )
}
