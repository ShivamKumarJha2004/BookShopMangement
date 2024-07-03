import React from 'react'

function Cards({items}) {
  console.log(items);
    return (
    <>
    
    <div>
<br />
    <div className="card bg-base-200 md:w-80 shadow-xl max-h-max hover:scale-105 duration-200 md:max-h-96 sd:w-80 sd:max-h-[40rem] 
    md:max-w-full ">
  <figure>
    <img
      src={items.image}
      alt="book-images" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.categories}</div>
    </h2>
    <p className='text-xs'>{items.title}</p>
    
    <div className="card-actions flex justify-between ">
      <div className=" badge badge-outline text-2xl p-5 cursor-pointer">{`Rs.${items.price}`}</div>
      <div className="badge badge-outline text-2xl p-5  hover:bg-yellow-300 duration-200  cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards