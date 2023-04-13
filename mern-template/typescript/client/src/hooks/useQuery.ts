import { useRouter } from "next/router";

export const useQuery = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addQuery = (param: any) => {
    router.push({ query: { ...router.query, ...param } });
  };
  const removeQuery = (key: string) => {
    const query = router.query;
    delete query[key];
    router.push({ query });
  };
  return { addQuery, removeQuery };
};