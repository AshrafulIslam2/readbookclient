const getCatagories = async () => {
  const res = await fetch("http://localhost:4000/catagoris");
  const data = await res.json();
  return data;
};
export default getCatagories;
