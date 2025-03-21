import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Auth.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Title title="Register" />
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <div className="min-w-[auto] w-[400px] max-w-[1000px] mx-auto p-5 md:p-10">
          <div className="header flex flex-col items-center gap-5">
            <Image
              src="/logo_ppj.png"
              alt="Logo"
              className="mx-auto"
              width={70}
              height={70}
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-color">
              Sign up
            </h1>
          </div>

          <form className="flex flex-col gap-4 mt-5 sm:mt-10">
            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-user"></i>
              </div>
              <input type="username" id="username" placeholder="Username" />
            </div>

            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-envelope"></i>
              </div>
              <input type="email" id="email" placeholder="Email address" />
            </div>

            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  style={{ paddingRight: "45px" }}
                />
                <div
                  className="absolute top-0 right-0 pr-[15px] h-full flex items-center justify-center px-2 cursor-pointer"
                  onClick={handleClickShowPassword}
                >
                  <i
                    className={`fa-regular ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    } text-gray-500`}
                  />
                </div>
              </div>
            </div>

            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm_password"
                  placeholder="Confirm password"
                  required
                  style={{ paddingRight: "45px" }}
                />
                <div
                  className="absolute top-0 right-0 pr-[15px] h-full flex items-center justify-center px-2 cursor-pointer"
                  onClick={handleClickShowConfirmPassword}
                >
                  <i
                    className={`fa-regular ${
                      showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                    } text-gray-500`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <button
                className="btn btn-primary d-block fw-semibold w-full"
                type="submit"
              >
                Sign up
              </button>
              <span className="fw-semibold text-center py-0 my-0 text-color w-full">
                or
              </span>
              <a
                href="/auth/google"
                className="btn btn-login-with-google fw-semibold w-full"
              >
                <Image
                  src="/google-icon.png"
                  width={20}
                  height={20}
                  alt="Google Icon"
                />
                Sign up with Google
              </a>
            </div>
          </form>

          <p className="text-center text-color mt-3">
            Have an account? &nbsp;
            <Link href={"/auth/login"} className="underline">
              Login here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

