import Image from 'next/image'

function SmallCard({ item }) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer transition transform duration-200 ease-out hover:bg-gray-100 hover:scale-105 '>
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={item.img} layout="fill" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2>{item.location}</h2>
        <h3 className='text-gray-500'>{item.distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
