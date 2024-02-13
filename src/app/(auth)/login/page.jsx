import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Login | Auth Travel",
};

const login = () => {
  return (
    <div className="h-screen w-dvw flex flex-row">
      <div className="w-[40%] relative">
        <Image src={"/images/login.webp"} fill={true} quality={100}></Image>
      </div>
      <div className="w-[60%] flex flex-col justify-center px-32 gap-8">
        <h1 className="font-bold text-xl">Masuk dengan akun</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-[#F8F8F8] p-2 pl-3 rounded-lg"
            placeholder="Email"
          />
          <input
            type="password"
            className="bg-[#F8F8F8] p-2 pl-3 rounded-lg"
            placeholder="Kata Sandi"
          />
          <button className="bg-[#4CACBC] text-center font-bold p-2 rounded-lg text-[#ffffff]">
            Masuk
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-center">Atau masuk dengan</h1>
          <div className="flex flex-row gap-4 justify-center">
            <a href="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_55_7)">
                  <path
                    d="M49.9736 25.4678C49.9736 23.4193 49.8035 21.9245 49.4354 20.3743H25.498V29.6201H39.5487C39.2656 31.9178 37.7358 35.3781 34.3364 37.7033L34.2887 38.0128L41.8573 43.7424L42.3817 43.7935C47.1974 39.4474 49.9736 33.0527 49.9736 25.4678Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M25.4981 49.8282C32.3818 49.8282 38.1607 47.6135 42.3817 43.7935L34.3365 37.7032C32.1836 39.1704 29.294 40.1946 25.4981 40.1946C18.7561 40.1946 13.0338 35.8486 10.994 29.8416L10.695 29.8664L2.82509 35.8181L2.72217 36.0977C6.9147 44.2362 15.5265 49.8282 25.4981 49.8282Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.9937 29.8416C10.4555 28.2914 10.144 26.6303 10.144 24.9141C10.144 23.1977 10.4555 21.5368 10.9654 19.9866L10.9511 19.6565L2.9826 13.6091L2.72189 13.7303C0.993941 17.1076 0.00244141 20.9002 0.00244141 24.9141C0.00244141 28.928 0.993941 32.7204 2.72189 36.0977L10.9937 29.8416Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M25.4981 9.6334C30.2855 9.6334 33.5149 11.6542 35.3563 13.3429L42.5517 6.47767C38.1326 2.46374 32.3818 0 25.4981 0C15.5265 0 6.9147 5.59179 2.72217 13.7303L10.9657 19.9866C13.0338 13.9796 18.7561 9.6334 25.4981 9.6334Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_55_7">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_55_12)">
                  <path
                    d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M33.1289 7.67358H27.5907C24.3042 7.67358 20.6487 9.05584 20.6487 13.8198C20.6648 15.4797 20.6487 17.0694 20.6487 18.8586H16.8467V24.9087H20.7664V42.3261H27.969V24.7938H32.723L33.1531 18.8416H27.8449C27.8449 18.8416 27.8568 16.1938 27.8449 15.4249C27.8449 13.5423 29.8038 13.6501 29.9216 13.6501C30.8538 13.6501 32.6663 13.6528 33.1316 13.6501V7.67358H33.1289Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_55_12">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
            <p className="text-[#9A9A9A] font-medium text-xs">Belum mempunyai akun?</p>
            <a href="/register" className="text-xs text-[#4CACBC] underline">Daftar disini</a>
        </div>
      </div>
    </div>
  );
};

export default login;
