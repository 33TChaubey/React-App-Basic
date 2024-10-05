import React from 'react'

const Navbar = ({ data }) => {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center ">
      <h3>orange</h3>
      <div className="flex p-2 bg-orange-600 rounded-md test-sm gap-3 text-white ">
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar;
