import Image from 'next/image'
import Link from 'next/link'

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer ">
          see all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/25568891/pexels-photo-25568891/free-photo-of-a-woman-in-a-leopard-print-dress-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold ">Alberto Pana</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/25568891/pexels-photo-25568891/free-photo-of-a-woman-in-a-leopard-print-dress-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold ">Alberto Pana</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/25568891/pexels-photo-25568891/free-photo-of-a-woman-in-a-leopard-print-dress-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold ">Alberto Pana</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests
