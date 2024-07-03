import Image from 'next/image'
import Comments from './Comments'

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="user-avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Damian Bulata</span>
        </div>
        <Image src="/more.png" alt="more-settings" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/24800096/pexels-photo-24800096/free-photo-of-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="feed-photo"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora at aliquam corrupti ducimus aliquid eum
          voluptas! Eos est ratione consectetur optio adipisci! Molestiae omnis distinctio deserunt possimus neque alias
          soluta?
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex justify-between items-center text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 flex">
              117<span className="hidden md:inline ml-1"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 flex">
              21<span className="hidden md:inline ml-1"> Comments</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 flex">
              3<span className="hidden md:inline ml-1"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default Post
