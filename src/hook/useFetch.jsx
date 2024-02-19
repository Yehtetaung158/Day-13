import React, { useEffect, useState } from 'react'
import { GetBookData } from '../service/book.service';

const useFetch = (fetchFun,arg) => {
    const [data,setData]=useState({
        loading:true,
        error:null,
        data:null
    });

    useEffect(() => {
        (async()=>{
            // const res = await fetch("http://localhost:8000/book");
            // const data =await res.json();
            // console.log(data);
           try{
            const data = await fetchFun(arg);
           setData(pre =>{
            return {
                error:null,
                loading:false,
                data:data
            }
           })
           }catch(e){
            // const data = await GetBookData("/book")
           setData(pre =>{
            return {
                error:e.message,
                loading:false,
                data:null
            }
           })
           }
        //    console.log(data);
        //    setFetch(data)
        })();
      }, []);
  return data; 
}

export default useFetch