const useGener = (selectedGener) => {
  if (selectedGener.length < 1) return "";
  let gnrId = selectedGener.map((g) => g.id);
  return gnrId.reduce((acc, current) => acc + "," + current);
};
export default useGener;
