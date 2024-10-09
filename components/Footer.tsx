import Link from "next/link";
import React from "react";
import Magnetic from "./Magnetic";
import Image from "next/image";



const Footer = () => {
  return (
    <footer className="p-8">
      <hr className='' />
      <div className="w-full bg-black text-white px-[100px] py-[30px] text-[13px] flex flex-wrap items-start justify-between">
        <div className="basis-[25%] p-[10px] text-[14px]">
          <Image src="/logo.webp" quality={100} alt="logo" width={80} height={80} className="mb-9" />
          <p>Team MESA</p>
          <p>We are Mechanical Engineering Student's Association</p>
        </div>
        <div className="basis-[25%] p-[10px] text-[14px]">
          <h3 className="w-fit mb-[40px] text-[18px] font-bold">
            Office{" "}
            <div className="underline">
              <span></span>
            </div>{" "}
          </h3>
          <p>
            Pimpri Chinchwad College of Engineering, Sector No. 26, Pradhikaran,
            Nigdi,
          </p>
          <p> Pimpri-Chinchwad,</p>
          <p>Maharashtra, INDIA</p>
          <p>411044</p>
          <div className="mb-[12px] mt-[10px]">
            <p>Email:</p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mesapccoeofficial@gmail.com"
              target="_blank"
            >
              mesapccoeofficial@gmail.com
            </Link>
          </div>
        </div>
        <div className="basis-[25%] p-[10px] text-[14px]">
          <h3 className="mb-[40px] text-[18px] font-bold">
            Links{" "}
            <div className="underline">
              <span></span>
            </div>{" "}
          </h3>
          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/past-events">Past Events</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="basis-[25%] p-[10px] text-[14px]">
          <h3>
            Social Media{" "}
            <div className="underline">
              <span></span>
            </div>{" "}
          </h3>
          <div className="flex gap-3">
            <Link href={"/"}>
              <Magnetic>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  className="fill-white hover:fill-[#C13584] mt-3"
                >
                  <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z" />
                  <path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z" />
                </svg>
              </Magnetic>
            </Link>
            <Link href={"/"}>
              <Magnetic>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45px" height="45px" className="fill-white hover:fill-blue-500 mt-3">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </Magnetic>
            </Link>
            <Link href={"/"}>
              <Magnetic>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className="fill-white hover:fill-red-500 mt-3">
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                </svg>
              </Magnetic>
            </Link>
            <Link href={"/"}>
              <Magnetic>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  className="fill-white hover:fill-[#5A65EA] mt-3"
                >
                  <path d="M41.626,10.768C37.644,7.567,31.347,7.025,31.08,7.003c-0.42-0.036-0.819,0.202-0.992,0.587c-0.012,0.025-0.15,0.34-0.303,0.833c2.633,0.443,5.867,1.339,8.794,3.155c0.469,0.291,0.613,0.907,0.322,1.377c-0.189,0.305-0.516,0.473-0.851,0.473c-0.18,0-0.362-0.048-0.526-0.15C32.494,10.158,26.209,10,25,10s-7.495,0.158-12.523,3.278c-0.47,0.292-1.086,0.147-1.377-0.322c-0.292-0.47-0.147-1.086,0.322-1.377c2.927-1.815,6.16-2.712,8.794-3.155c-0.154-0.493-0.292-0.808-0.303-0.833c-0.173-0.386-0.571-0.629-0.993-0.587c-0.266,0.021-6.563,0.563-10.598,3.809C6.213,12.76,2,24.152,2,34c0,0.174,0.045,0.344,0.131,0.495c2.909,5.109,10.842,6.447,12.649,6.504C14.791,41,14.801,41,14.812,41c0.319,0,0.62-0.152,0.809-0.411l1.829-2.513c-4.933-1.276-7.453-3.439-7.598-3.568c-0.414-0.365-0.453-0.997-0.087-1.411c0.365-0.414,0.995-0.453,1.41-0.089C11.236,33.062,15.875,37,25,37c9.141,0,13.782-3.953,13.828-3.993c0.414-0.359,1.045-0.323,1.409,0.094c0.364,0.414,0.325,1.043-0.088,1.407c-0.146,0.129-2.666,2.292-7.599,3.568l1.829,2.513C34.568,40.848,34.869,41,35.188,41c0.011,0,0.021,0,0.031-0.001c1.809-0.057,9.741-1.395,12.649-6.504C47.955,34.344,48,34.174,48,34C48,24.152,43.787,12.76,41.626,10.768z M18.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C22,28.209,20.433,30,18.5,30z M31.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C35,28.209,33.433,30,31.5,30z" />
                </svg>
              </Magnetic>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center my-4">Team MESA © 2024-All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
