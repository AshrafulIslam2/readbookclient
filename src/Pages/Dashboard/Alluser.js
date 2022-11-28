import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { authcontext } from "../../AuthoContext/AuthContextProvider";
const Alluser = () => {
  const { user } = useContext(authcontext);
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`https://y-tan-one.vercel.app/user`);
      const data = res.json();
      return data;
    },
  });
  console.log(allUser);
  const handleupdate = (id, semail, uemail) => {
    fetch(
      `https://y-tan-one.vercel.app/user/admin/verify/${id}/seller/${semail}?email=${uemail}`,
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
  const handledelte = (id, email) => {
    fetch(`https://y-tan-one.vercel.app/admin/delete/${id}/${email}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delete Success Full");
        refetch();
      });
  };
  return (
    <div className="overflow-x-auto max-w-full">
      <ToastContainer />
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
                  <button
                    className="btn btn-error btn-xs mx-3"
                    onClick={() => handledelte(us?._id, us?.email)}
                  >
                    Delete
                  </button>
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
