import React from 'react'
import { roles, programming_languages } from "@/supabase/models";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  example: string,
  exampleRequired: string,
};

const PostAd = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div>
      <form className='flex flex-col gap-4 w-[40%] mx-auto'>
        <input type="text" placeholder="Title" className="input input-bordered input-primary " />
        <textarea className="textarea textarea-primary resize-none " placeholder="Description" />
        <select className="select select-primary text-black">
          <option disabled selected>Role</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        <select className="select select-primary text-black">
          <option disabled selected>Programming Language</option>
          {programming_languages.map((language) => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
        <button className="btn btn-primary self-end">Post</button>
      </form>
    </div>
  )
}

export default PostAd