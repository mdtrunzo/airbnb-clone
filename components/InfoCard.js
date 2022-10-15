import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

function InfoCard({ item }) {
  return (
    <div className="flex flex-col py-7 px-2 pr-4 border-b cursor-pointer transition duration-200 ease-out md:flex-row hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative h-52 w-full flex-shrink-0 md:h-52 md:w-80 ">
        <Image
          src={item.img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5 pt-5">
        <div className="flex justify-between">
          <p>{item.location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{item.title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {item.description}
        </p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {item.star}
          </p>

          <div className="">
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              {item.price}
            </p>
            <p className="text-right font-extralight">{item.total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
