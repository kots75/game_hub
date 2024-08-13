import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, //24h
    initialData: genres,
  });

export default useGenres;
