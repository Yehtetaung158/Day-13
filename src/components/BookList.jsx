import React from 'react'

const BookList = ({data}) => {
    console.log(data);
  return (
    <div className='w-[200px] h-[300px] border rounded-xl my-5'>
        <div>
            <img className='rounded-t-xl' src="./image/download.webp" alt="BarNar.jpg" />
        </div>
        <div>
            <h1 className='text-lg font-bold'>{data.book}</h1>
            <h2 className='text-sm text-gray-400'>{data.author}</h2>
        </div>
        <div>
            <p>{data.description}</p>
        </div>
    </div>
  )
}

export default BookList