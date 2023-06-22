import { SubmitHandler, useForm } from "react-hook-form";
import s from './login.module.css'
import { LoginDataType } from "../../mainRedux/login-reducer";

type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string
};
type LoginFormPropsType = {
  loginUser: (loginData: LoginDataType)=>void
  error: string
}
export const LoginForm = (props: LoginFormPropsType & {captcha: string | null}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: "onChange",
    defaultValues: { email: "" },
  });
  const submitHandler: SubmitHandler<LoginFormType> = (data) => {
    props.loginUser(data)
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
      { props.error ? <span className={s.error}>{props.error}</span> : ''}
      {<p className={s.error}> {errors.email && errors.email.message}</p>}
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
      </div>
      <div>
      {<p className={s.error}> {errors.password && errors.password.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Field is required",
            minLength: {
              value: 4,
              message: "Password length should be at least 4 characters",
            },
            maxLength: {
              value: 12,
              message: "Password cannot exceed more than 12 characters",
            },
            pattern: { value: /^\S*$/, message: "No spaces allowed" },
          })}
        />
        
      </div>
      <div className={s.remember}>
        <input type="checkbox" {...register("rememberMe")} /> remember me
      </div>
      {props.captcha && <div className={s.captcha}><img src={props.captcha} alt="#" /><input type="text" {...register('captcha')}/></div>}
      <div>
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </div>
    </form>
  );
};