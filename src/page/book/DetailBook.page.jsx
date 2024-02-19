import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";

const DetailBookPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : <>
          <div className="w-[200px] h-[300px] border rounded-xl my-5">
              <div>
                <img
                  className="rounded-t-xl"
                  src="../image/download.webp"
                  alt="BarNar.jpg"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold">{data.book}</h1>
                <h2 className="text-sm text-gray-400">{data.author}</h2>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
            </div>
          </>}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
