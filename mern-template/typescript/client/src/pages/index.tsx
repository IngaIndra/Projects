import { MovieCard } from "@/components/movie/MovieCard";
import { IMovie } from "@/interfaces/movie";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import useLoader from "@/hooks/useLoader";
import genres from "../../utils/movieGenres"


import { MovieCardSkeleton } from "@/components/movie/MovieCardSkeleton";
import { useQuery } from "@/hooks/useQuery";
import { nanoid } from "nanoid";

import queryString from "query-string";
import { Select } from "@/components/ui/Select";





export default function Home({data} : {data : IMovie[] }): JSX.Element {
  const movies= data;

  const router = useRouter();
  const {query} = router;
  const {ordering,filtering,pageSize,q} = query;

  const loading = useLoader();

  const {addQuery} = useQuery();


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
            <Select
              items={[
                { value: "", label: "Sort..." },
                { value: "releasedAsc", label: "Oldest" },
                { value: "releasedDesc", label: "Newest" },
                { value: "imdbRatingDesc", label: "Most popular" },
                { value: "titleAsc", label: "A-Z" },
                { value: "titleDesc", label: "Z-A" },
              ]}
              onChange={(e): void => {
                addQuery({ordering: e.target.value})
              }}

              value={ordering + ""}
              itemValue={"value"}
              itemLabel={"label"}

            />

            <Select
            items={genres.map((genre)=>({value:genre,label: genre}))}
              value={filtering + ""}
              onChange={(e): void => {
               addQuery({filtering: e.target.value})
              }}
              className="bg-gray-50 border flex items-center mr-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              itemValue={"value"}
              itemLabel={"label"}
            />

            <form onSubmit={(e)=>{
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              addQuery({q: form["q"].value})
            }} className="relative w-full">
              <input defaultValue={q} type="text" name="q" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search movies, TV, actors, more..." required />
              <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>

        <div className="flex justify-end mt-5">
          <label>
            Хуудаслалт
            <Select
              className="form-control ml-3 p-2 rounded-lg"
              onChange={(e): void => {
                addQuery({pageSize: e.target.value});
              }}
              value={pageSize+''}
              items={[
                {label: '6', value: 6},
                {label: '12', value: 12},
                {label: '24', value: 24}, 
                {label: '48', value: 48}]}
              itemLabel="label"
              itemValue="value"
            />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {query} = context;
  const {ordering,filtering,pageSize,currentPage,q} = query;
  const stringified = queryString.stringify({
    ordering,
    filtering,
    limit: pageSize,
    skip: (Number(currentPage)-1)*Number(pageSize),
    q
  });
  const response = await axios.get (`${process.env.NEXT_PUBLIC_API_URL}/movies?${stringified}`);
  const {data} = response;
  return {
    props: { data },
  };
}