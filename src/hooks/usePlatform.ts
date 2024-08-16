import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: paltforms } = usePlatforms();
  return paltforms?.results.find((p) => p.id === id);
};

export default usePlatform;
