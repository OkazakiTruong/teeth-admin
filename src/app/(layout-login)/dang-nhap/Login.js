"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng Email!"
    );

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
        ? null
        : "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
    );
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (loading) {
      let flag = true;
      if (email === "admin@gmail.com" && password === "Admin123@") {
        flag = false;
        setCookie("isLogin", "true");
        setCookie("success-login", "true");
        router.push("/");
      }
      if (flag) {
        setTimeout(() => {
          toast.error("Tài khoản hoặc mật khẩu không chính xác !!");
          setLoading(false);
        }, 1000);
      }
    }
  }, [loading, setLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (email === "") {
      setEmailError("** Không được bỏ trống!!");
      flag = false;
    }
    if (password === "") {
      setPasswordError("** Không được bỏ trống!!");
      flag = false;
    }

    if (flag) {
      setLoading(true);
    }
  };
  return (
    <main>
      <div className="overlay"></div>
      <section className="login-section">
        <Image
          src="/icon/logo_duong_ban.svg"
          width={184}
          height={121}
          alt="image"
        />
        <h1 className="login-section-heading">ĐĂNG NHẬP</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="">Nhập email:</label>
            <input
              type="text"
              placeholder="Nhập email"
              onChange={handleEmailChange}
            />
            <p className="error">{emailError}</p>
          </div>
          <div className="input-group">
            <label htmlFor="">Nhập mật khẩu:</label>
            <div className="custom-eye">
              <input
                type={eye ? "text" : "password"}
                placeholder="Nhập mật khẩu..."
                onChange={handlePasswordChange}
              />
              <img
                src={eye ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`}
                alt=""
                onClick={() => {
                  setEye(!eye);
                }}
              />
            </div>
            <p className="error">{passwordError}</p>
          </div>
          <button>
            {loading ? (
              <Image
                src="/loading/rooling_loading.gif"
                width={30}
                height={30}
                alt="image"
              />
            ) : (
              `ĐĂNG NHẬP`
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
