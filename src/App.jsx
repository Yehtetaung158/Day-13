import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { GetAuthorData } from "./service/auther.service";
import {Routes,Route} from "react-router-dom";
import HomePage from "./page/Home.page";
import { NavComponents } from "./components";
import NotFound from "../NotFound";
import DetailBookPage from "./page/book/DetailBook.page";

const App = () => {
  const {loading,error,data} = useFetch(GetAuthorData,"/author");
  console.log(data);
//   return <div>{loading ? (<h1>Loading...</h1>):(<>{data ? <>{JSON.stringify(data)}</> : <h1>{error}</h1>}</>)}</div>};
return <div className="main">
    <NavComponents/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/detail/:id" element={<DetailBookPage/>} /> */}
        <Route path="/detail/:slug" element={<DetailBookPage/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
</div> }
export default App;
