import React from "react";
import { removeAllUser } from "../store/slices/SliceThunk";
import { useDispatch } from "react-redux";
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUser = () => {
    dispatch(removeAllUser());
  };

  return <div onClick={deleteAllUser}>DeleteAllUser</div>;
};
