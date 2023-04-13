import { IMovie } from "@/interfaces/movie";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface MovieCardProps {
  movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const placeHolder = "https://via.placeholder.com/160x230";

  return (
    <div className="group">
      <div className="aspect-[16/23] relative">
        <Image
          src={movie.poster || placeHolder}
          alt={movie.title}
          width={160}
          height={230}
          className="w-full h-full object-cover rounded"
        />
        <Link
          href={`/movies/${movie._id}`}
          className="absolute inset-0 group-hover:bg-black/30 transition-all"
        />
      </div>
      <Link
        href={`/movies/${movie._id}`}
        className="text-xs text-stone-800	group-hover:text-sky-300 transition-colors line-clamp-2	"
      >
        {movie.title}
      </Link>
    </div>
  );
};