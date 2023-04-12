import { useForm } from "react-hook-form";
import React from "react";
import check_icon from "../img/check_icon.png";

export const UserNameInput = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form style={{ display: "inline-flex" }} onSubmit={handleSubmit(onSubmit)}>
      <div className="col">
        <input
          className="form-control"
          type="text"
          name="username"
          {...register("username", { required: true })}
          style={{ width: "412px", "margin-right": "15px" }}
        />
        {errors.username && <span> Champ obligatoire </span>}
      </div>
      <button
        type="submit"
        className="btn col"
        style={{
          backgroundColor: "#01AB08",
          color: "white",
          "font-family": "'Dongle', sans-serif",
          "font-size": "20px",
          height: "40px",
        }}
      >
        Valider
      </button>
    </form>
  );
};

export default UserNameInput;
