import React from "react";
import { useSelector } from "react-redux";
import { deleteUser } from "../store/slices/SliceThunk";
import { useDispatch } from "react-redux";
//jis bhi component me data store se laana ho useSelector se aayega
//jis bhi slice method ko call karna ho dispatch k andar call hoga aur us method me parameter action.anything se milega

const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const handleDelete = (ind) => {
    dispatch(deleteUser(ind));
    //uper waale line me slice k deleteuser ko call kiya dispatch k andar
  };
  console.log(data);
  console.log("inside display");
  return (
    <div>
      {data.loading && (
        <img
          src="https://i.stack.imgur.com/IA7jp.gif"
          alt="loading"
          height="200px"
          width="200px"
          style={{ marginLeft: "300px", position: "absolute" }}
        />
      )}
      {data.name.map((item, ind) => {
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
