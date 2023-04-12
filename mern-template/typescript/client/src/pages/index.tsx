import { MovieCard } from "@/components/movie/MovieCard";
import { MovieCardSkeleton } from "@/components/movie/MovieCardSkeleton";
import useLoader from "@/hooks/useLoader";
import { IMovie } from "@/interfaces/movie";
import axios from "axios";
import { nanoid } from "nanoid";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";


export async function getServerSideProps() {
  
  const response = await axios.get (`${process.env.PUBLIC_API_URL}/movies?limit=12`);
  const {data} = response;
  return {
    props: { data },
  };
}

export default function Home({movies : data} : {movies : IMovie[]}): JSX.Element {

  const [films, setFilms] = useState<IMovie[]>(data);
  const [ordering, setOrdering] = useState<string>("");
  const [filtering, setFiltering] = useState<string>("");
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [q, setQ] = useState("")
  const [searchedQ, setSearchedQ] = useState("");
  const rendered = useRef(false);

  const loading = useLoader();
  const movies= data;

  useEffect(() => {
    if(rendered.current){
      fetch(`${process.env.PUBLIC_API_URL}/movies?limit=${pageSize}&ordering=${ordering}&filtering=${filtering}&q=${searchedQ}`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      });
    }
    if(!rendered.current) rendered.current= true;
    
  }, [ordering, filtering, pageSize, searchedQ]);

  return (
    <>
      <Head>
        <title>Rotten tomatoes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-slate-100 min-h-screen mt-10">
        <div className="container mx-auto">
          <div className="bg-white flex">
            <select
              value={ordering}
              onChange={(e): void => {
                setOrdering(e.target.value);
              }}
              className="bg-gray-50 border flex items-center mr-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="releasedDesc">Newest</option>
              <option value="releasedAsc">Oldest</option>
              <option value="imdbRatingDesc">Most popular</option>
              <option value="titleAsc">A-Z</option>
              <option value="titleDesc">Z-A</option>
            </select>

            <select
              value={filtering}
              onChange={(e): void => {
                setFiltering(e.target.value);
              }}
              className="bg-gray-50 border flex items-center mr-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">All</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Biography">Biography</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Film-Noir">Film-Noir</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Music">Music</option>
              <option value="Musical">Musical</option>
              <option value="Mystery">Mystery</option>
              <option value="News">News</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Short">Short</option>
              <option value="Sport">Sport</option>
              <option value="Talk-Show">Talk-Show</option>
              <option value="War">War</option>
              <option value="Thriller">Thriller</option>
              <option value="Western">Western</option>
            </select>

            <div className="relative w-full">
              <input onKeyDown={(e):void => {
                  if (e.key==='Enter')
                  {
                    setSearchedQ(q);
                  }
                }}value={q} onChange={(e):void => {
                setQ(e.target.value)
              }} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search movies, TV, actors, more..." required />
                <button onClick={():void => {
                  setSearchedQ(q);
                }} type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span className="sr-only">Search</span>
                </button>
            </div>
          </div>

        <div className="flex justify-end mt-5">
          <label>
            Хуудаслалт
            <select
              className="form-control ml-3 p-2 rounded-lg"
              onChange={(e): void => {
                setPageSize(Number(e.target.value));
                setCurrentPage(currentPage);
              }}
              value={pageSize}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
              <option value={48}>48</option>
              <option value={60}>60</option>
            </select>
          </label>
        </div>
          

        <div className="p-4 grid gap-4 md:grid-cols-6 sm:grid-cols-4 grid-cols-2">
              {!loading
                ? movies.map((movie) => (
                    <MovieCard movie={movie} key={movie._id} />
                  ))
                : Array.from(Array(Number(12)), () => (
                    <MovieCardSkeleton key={nanoid()} />
                  ))}
            </div>
            
        
        </div>
      </div>
    </>
  );
}
