import { IMovie } from "@/interfaces/movie";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  const [movie, setMovie] = useState<IMovie | undefined>();
  const { query } = useRouter();
  const { _id } = query;

  useEffect(() => {
    fetch("http://localhost:7070/api/movies/" + _id)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  if (!movie) return <h1>Movie not found</h1>;

  return <h1>{movie.title}</h1>;
};

export default Index;
