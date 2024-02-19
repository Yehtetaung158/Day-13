import React, { lazy } from 'react'
import { GetBookData } from '../service/book.service';
import useFetch from '../hook/useFetch';
import { BookList } from '../components';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const {data,loading,error}=useFetch(GetBookData,"book")
  return (
    <div className='flex flex-wrap'>
        {
            loading ? <h1>Loading...</h1> : <div className='flex flex-wrap justify-between'>
            {data.map(i => 
            <Link key={i.id} to={`/detail/${i.id}`}>
            <BookList key={i.id} data={i}/>
            </Link>
             )}
            </div>
        }
    </div>
  )
}

export default HomePage