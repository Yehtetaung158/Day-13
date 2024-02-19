import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { ApiContext } from "../../store/ApiContextProvider";

const DetailBookPage = () => {
  const { slug } = useParams();
  const [item,setItem]=useState(null)
  const {data,loading,error}=useContext(ApiContext)
  // const { data, error, loading } = useFetch(GetBookData, `book/${slug}`);
  console.log(slug)
  console.log(data)
  useEffect(()=>{

    const finder = data?.find((i)=> i.slug === slug);
    console.log(finder)
    setItem(finder)
  },[slug,data]);
  return (
    <div className="flex items-center justify-around">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <div className='w-[500px] h-[600px] border rounded-xl my-5 '>
          <div>
              <img className='rounded-t-xl' src="../image/download.webp" alt="BarNar.jpg" />
          </div>
          <div>
              <h1 className='text-lg font-bold'>{item?.book}</h1>
              <h2 className='text-sm text-gray-400'>{item?.author}</h2>
          </div>
          <div>
              <p>{item?.description}</p>
          </div>
      </div>        )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
