import React from "react";
import { useSelector } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const handleDelete = (ind) => {
    dispatch(deleteUser(ind));
  };
  console.log(data);
  console.log("inside display");
  return (
    <div>
      {data.map((item, ind) => {
        return (
          <>
            <li key={ind}>{item}</li>{" "}
            <button onClick={() => handleDelete(ind)}>delete</button>;
          </>
        );
      })}
    </div>
  );
};

export default DisplayUser;
