import React, { useState } from "react";
import Head from "./Head";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "./redux/LoginSlice";
export default function Login() {
  const [error, setError] = useState("");
  const nevigate = useNavigate();
  const dispath = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: "mor_2314",
        password: data.password,
      })
      .then((res) => {
        // console.log(res.data.token)
        dispath(login(res.data.token));
        localStorage.setItem("login", JSON.stringify(res.data.token));
        nevigate("/");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  return (
    <div className="App bodycolor">
      <Head />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {error ? <p className="text-danger">{error}</p> : ""}
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              type="email"
              placeholder="Enter email"
              style={{ maxWidth: "30%" }}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">This field is requered</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-danger">Enter vaild email</p>
            )}
            <Form.Text className="text-muted">
              username: "mor_2314" It is hardcodded for now enter any valid
              email Enter password : 83r5^_
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", { required: true, minLength: 4 })}
              placeholder="Password"
              style={{ maxWidth: "30%" }}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">This field is requered</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-danger">Enter min 4 degit</p>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
