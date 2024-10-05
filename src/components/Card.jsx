import React from 'react'

const Card = ({ data, handleAdd, index }) => {

  const { image, name, artist, added } = data;

  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className=''>
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button onClick={() => handleAdd(index)} className={`px-4 py-3 ${added === false ? "bg-orange-600" : "bg-teal-600"} text-white text-sm absolute bottom-0 whitespace-nowrap left-[0%] translate-y-1/2 translate-x-1/2 rounded-full absolute`}>{added === false ? "Add To Favorite" : "Added"}</button>
    </div>
  )
};

export default Card;
