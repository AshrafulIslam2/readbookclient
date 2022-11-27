import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
const Alluser = () => {
  const { user } = useContext(authcontext);
  const { data: allUser = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/user`);
      const data = res.json();
      return data;
    },
  });
  console.log(allUser);
  const handleDelete = (id, email) => {
    console.log(id, email);
    fetch(`http://localhost:4000/user/${id}?email=${email}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  };
  return (
    <div className="overflow-x-auto max-w-full">
      <h1 className="text-4xl font-serif text-center my-10">All User </h1>
      <table className="table w-full  max-w-full mx-4">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {allUser?.map((us) => (
            <tr>
              <th>{us?.email}</th>
              <td>{us?.role}</td>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleDelete(us?._id, user?.email)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Alluser;
