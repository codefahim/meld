import React, { ReactNode } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginMain: React.FC<{
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>;
}> = ({ onSubmit, handleSubmit, register, errors }) => {
  const errorMessage = errors.password?.message as ReactNode;
  return (
    <main className="login-main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Login</h4>
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          placeholder="Email Address"
          {...register("email", { required: true })}
        />
        <FontAwesomeIcon icon={faLock} />
        <input
          placeholder="Password"
          {...register("password", { required: true })}
          className={errorMessage ? 'error-border' : ''}
        />
        <input className="submit-button" type="submit" value="Log in" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </main>
  );
};

export default LoginMain;
