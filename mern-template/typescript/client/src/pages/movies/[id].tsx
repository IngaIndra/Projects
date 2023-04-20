import { IMovie } from "@/interfaces/movie";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { FC } from "react";


const Index: FC<Props> = ({ data }) => {
  const movie = data;
  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <h1>{movie.title}</h1>
    </>
  );
};
export default Index;

// export const getStaticPaths = async () => {
//   const response = await fetch("http://localhost:7070/api/movies/ids");
//   const data = await response.json();
//   const paths = data.map((_id: string) => ({
//     params: {
//       _id,
//     },
//   }));
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const response = await fetch(
    `http://localhost:7070/api/movies/${params?._id}`
  );
  const data = await response.json();
  return { props: { data } };
};

interface Props {
  data: IMovie;
}


