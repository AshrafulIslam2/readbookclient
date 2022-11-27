import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
const Alluser = () => {
  const { user } = useContext(authcontext);
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/user`);
      const data = res.json();
      return data;
    },
  });
  console.log(allUser);
  const handleupdate = (id, semail, uemail) => {
    fetch(
      `http://localhost:4000/user/admin/verify/${id}/seller/${semail}?email=${uemail}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
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
                {us?.role !== "admin" && (
                  <button className="btn btn-error btn-xs mx-3">Delete</button>
                )}
                {us?.role === "seller" && !us?.varify && (
                  <button
                    className="btn btn-success btn-xs"
                    onClick={() =>
                      handleupdate(us?._id, us?.email, user?.email)
                    }
                  >
                    Verify
                  </button>
                )}
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
