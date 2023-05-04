import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AddFormType = {
  text: string
}
type AddFormPropsType = {
  value: string
  onChange: (text: string)=>void
  onClick: ()=> void
  title: string
}
export const AddForm = (props: AddFormPropsType) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid},
  } = useForm<AddFormType>({
    mode: "onChange",
  });
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.currentTarget.value)
  }
  const submitHandler: SubmitHandler<AddFormType> = (data) => {
    console.log(data)
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
        <div><textarea {...register('text', {required: true, minLength: 3, maxLength: 50})} value={props.value} onChange={onChange} placeholder="message"/></div>
        <div><button disabled={!isValid} onClick={()=>props.onClick()} type="submit">{props.title}</button></div>
      </form>
  )
}