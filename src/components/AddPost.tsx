import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'

const AddPost = () => {
  const { userId } = auth()
  console.log(userId)

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/26609628/pexels-photo-26609628/free-photo-of-a-woman-standing-on-a-bridge-with-a-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="post-avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form className="flex gap-4">
          <textarea
            placeholder="what is on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="post-avatar"
            width={20}
            height={20}
            className="w-5 h-5 object-cover rounded-full cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="post-avatar" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="post-avatar" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="post-avatar" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="post-avatar" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
