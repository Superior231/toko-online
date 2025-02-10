import Link from "next/link";
import Image from "next/image";
import Title from "@/components/Title";
import "./Auth.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      const user = JSON.parse(atob(data.token.split(".")[1]));
      if (user.role === "admin") router.push("/admin/dashboard");
      else router.push("/user/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <Title title="Login" />
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <div className="mx-auto p-5 sm:p-10">
          <div className="header flex flex-col items-center gap-5">
            <Image
              src="/logo_ppj.png"
              alt="Logo"
              className="mx-auto"
              width={70}
              height={70}
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-color">
              Login
            </h1>
          </div>

          <form className="flex flex-col gap-4 mt-5 sm:mt-10">
            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-envelope"></i>
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-lock-alt"></i>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <button
                className="btn btn-primary d-block fw-semibold w-full"
                type="submit"
                onClick={handleLogin}
              >
                Login
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
                Login with Google
              </a>
            </div>
          </form>

          <p className="text-center text-color mt-3">
            Not registered yet? &nbsp;
            <Link href={"/auth/register"} className="text-orange-500 underline">
              Create an account!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
