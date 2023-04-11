import { useForm } from "react-hook-form";
import React from 'react';


export const UserNameInput = ({onSubmit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form  className="row" onSubmit={handleSubmit(onSubmit)}>
                <label className="input-title text-center justify-content-between">Pseudo :</label>
            <div className="col">
                <input className="form-control" type="text" name="username" {...register("username",{ required: true })} />
                    {errors.username && <span> Champ obligatoire </span>}
            </div>
            <input type="submit" className="btn btn-primary  col"/>
        </form>
    )
}

export default UserNameInput;