import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <section className="bg-themebg1  h-screen py-10 w-full">
        <div className="w-9/12 m-auto space-y-20">
          <h2 className="text-brand2 text-center">Developer</h2>
          <div className="flex w-full   items-center justify-between">
            <div className="border-8 p-10 w-[25%]  border-white  rounded-tl-[25%] rounded-br-[25%] ">
              <div className="  space-y-6  ">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="/images/profile.svg" alt="profile" />
                  <p className="title4">Sanket</p>
                  <p>Full Stack Web Developer</p>
                </div>
                <div className="space-y-4">
                  {React.Children.toArray(
                    [
                      {
                        name: "sanketnchaware@gmail.com",
                        icon: "/icons/github.svg",
                        url: "#",
                      },
                      { name: "Bangalore", icon: "/icons/insta.svg", url: "#" },
                      { name: "Full Time", icon: "/icons/insta.svg", url: "#" },
                      {
                        name: "Porfolio",
                        icon: "/icons/insta.svg",
                        url: "#",
                      },
                    ].map(({ name, url, icon }) => {
                      return (
                        <Link className=" flex items-center gap-2 " to="/url">
                          <img src={icon} alt="" />
                          <p>{name}</p>
                        </Link>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-2 ml-40 mr-20 ">
              <div>
                <span className="text-brand2 caption">{"<h1>"}</span>
                <h4>Hey</h4>
                <h4>I’m Sanket,</h4>
                <h4>
                  Full-Stack Web Developer
                  <span className="ml-8 text-brand2 caption">{"</h1>"}</span>
                </h4>
              </div>
              <div className="">
                <span className="text-brand2">{"<p>"}</span>
                <p className="py-2">
                  I help business grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done,
                </p>
                <span className="text-brand2">{"</p>"}</span>
              </div>

              <p className="text-brand1 title2">LET'S TALK</p>
            </div>
            <div className=" ">
              {[
                {
                  numb: 1,
                  name: "Programming Language",
                },
                {
                  numb: 1,
                  name: "Development Tools",
                },
                {
                  numb: 1,
                  name: "Years of Experience",
                },
              ].map(({ name, numb }) => {
                return (
                  <div className="flex items-center">
                    <h2 className=" text-brand1 ">{numb}</h2>
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-themebg2  h-screen w-full"></section>
      <section className="bg-themebg1  h-screen w-full"></section>
      <section className="bg-themebg2  h-screen w-full"></section>
      <section className="bg-themebg1  h-screen w-full"></section>
    </div>
  );
};

export default Home;
