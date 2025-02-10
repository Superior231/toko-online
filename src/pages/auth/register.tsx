import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import "./Auth.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role user
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    setError('');
    
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registrasi berhasil! Silakan login.');
      router.push('/auth/login');
    } else {
      setError(data.error || 'Terjadi kesalahan.');
    }
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

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form className="flex flex-col gap-4 mt-5 sm:mt-10">
              <input
                type="text"
                id="role"
                placeholder="Role"
                value={role}
                onChange={() => setRole('user')}
                hidden
              />
            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-user"></i>
              </div>
              <input
                type="username"
                id="username"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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

            <div className="content">
              <div className="pass-logo">
                <i className="bx bx-lock-alt"></i>
              </div>
              <input
                type="confirm_password"
                id="confirm_password"
                placeholder="Confirm password"
              />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <button
                className="btn btn-primary d-block fw-semibold w-full"
                type="submit"
                onClick={handleRegister}
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
            <Link href={"/auth/login"} className="text-orange-500 underline">
              Login here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
