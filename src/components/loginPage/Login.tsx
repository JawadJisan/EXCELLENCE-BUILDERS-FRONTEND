"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { loginSchema } from "@/schemas/login";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Form from "../ui/Form/Form";
import FormInput from "../ui/Form/FormInput";
import "./Login.css";

type FormValues = {
  id: string;
  password: string;
};

function Login() {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      storeUserInfo({ accessToken: res?.data?.accessToken });

      if (res?.data?.accessToken) {
        const { role } = getUserInfo() as any;
        message.success("User logged in successfully");
        if (role === "customer") {
          router.push("/my-profile");
        }
        if (role === "admin") {
          router.push("/admin/myProfile");
        }
        if (role === "super_admin") {
          router.push("/super-admin/my-profile");
        }
        if (role === "team_member") {
          router.push("/team-member/my-profile");
        }
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
      message.error("something went wrong, try again");
    }
  };

  const [copiedText, setCopiedText] = useState("");
  const pRef = useRef(null);
  const pRef1 = useRef(null);
  const uRef = useRef(null);

  const handleClick = () => {
    const text = pRef.current.innerText;
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    message.success("Email copied!");
  };
  const handleClick1 = () => {
    const text = pRef1.current.innerText;
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    message.success("Email copied!");
  };
  const handlepass = () => {
    const text = uRef.current.innerText;
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    message.success("Password copied!");
  };

  return (
    <Row justify="center" align="middle" className="h-screen">
      <Col
        sm={16}
        md={14}
        lg={10}
        style={{ marginTop: "-96px" }}
        className=" bg-teal-50 p-8 rounded-md"
      >
        <h1 className=" text-center text-xl md:text-2xl lg:text-4xl text-teal-900 font-bold mb-8 capitalize">
          Login first before get the service from Excellience Builders
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                type="text"
                size="large"
                name="email"
                label="Your Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                type="password"
                size="large"
                name="password"
                label="Your Password"
                required
              />
            </div>
            <button
              type="submit"
              className=" w-full py-2 rounded-md text-white text-lg bg-hcOrange-base"
              disabled={isLoading}
            >
              {isLoading ? "Please wait a moment..." : "Login"}
            </button>
          </Form>
          {errorMessage && (
            <p className="mt-2 text-red-500 text-base">{errorMessage}</p>
          )}
          <p className="mt-1">
            Do not have an account? <Link href="/register">Signup first</Link>
          </p>
        </div>
        <div className="userDetails">
          <div>
            <p className="credientialHeading">Admin Credential</p>
            <p>
              Email:{" "}
              <span ref={pRef} onClick={handleClick} className="emailBold">
                admins@gmail.com
              </span>
            </p>
            <p>
              password:{" "}
              <span style={{ cursor: "copy" }} ref={uRef} onClick={handlepass}>
                123456
              </span>{" "}
            </p>
          </div>
          <div>
            <p className="credientialHeading">User Credential</p>
            <p>
              Email:{" "}
              <span ref={pRef1} onClick={handleClick1} className="emailBold">
                customer2@gmail.com
              </span>
            </p>
            <p>
              password:{" "}
              <span style={{ cursor: "copy" }} ref={uRef} onClick={handlepass}>
                123456
              </span>{" "}
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
