import React, { useEffect } from "react";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginMain from "../../View/Login/Main";

const LoginIndex: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const url = "http://35.201.2.209:8000";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    if (data) {
      axios({
        method: "post",
        url: `${url}/login`,
        data: {
          email: data.email,
          password: data.password,
        },
      })
        .then((response) => {
          localStorage.setItem("accessToken", response.data);
          navigate("/");
        })
        .catch((error) => {
          if (error) {
            localStorage.clear();
            setError("password", {
              type: "custom",
              message: "Invalid password combination",
            });
          }
        });
    }
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  return (
    <LoginMain
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
    />
  );
};

export default LoginIndex;
