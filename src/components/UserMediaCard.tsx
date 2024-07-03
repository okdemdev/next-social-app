import Image from 'next/image'
import Link from 'next/link'

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer ">
          see all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard
