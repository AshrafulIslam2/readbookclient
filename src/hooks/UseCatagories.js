const getCatagories = async () => {
  const res = await fetch("https://y-tan-one.vercel.app/catagoris");
  const data = await res.json();
  return data;
};
export default getCatagories;
