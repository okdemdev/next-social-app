import Link from 'next/link'
import ProfileCard from './ProfileCard'
import Image from 'next/image'
import Ad from './Ad'

const LeftMenu = ({ type }: { type: 'home' | 'profile' }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === 'home' && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/posts.png" alt="" height={20} width={20} />
          <span>My Posts</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/activity.png" alt="" height={20} width={20} />
          <span>Activity</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/market.png" alt="" height={20} width={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/events.png" alt="" height={20} width={20} />
          <span>Events</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/albums.png" alt="" height={20} width={20} />
          <span>Albums</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/videos.png" alt="" height={20} width={20} />
          <span>Videos</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/news.png" alt="" height={20} width={20} />
          <span>News</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/courses.png" alt="" height={20} width={20} />
          <span>Courses</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/lists.png" alt="" height={20} width={20} />
          <span>Lists</span>
        </Link>
        <hr className="borded-t-1 border-gray-50 w-36 self-center" />
        <Link href="" className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100">
          <Image src="/settings.png" alt="" height={20} width={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  )
}

export default LeftMenu
