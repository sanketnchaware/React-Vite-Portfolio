import React, { useId } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const key = useId();
  return (
    <div className="">
      <section className="bg-themebg1  h-screen  flex items-center w-full">
        <div className="w-9/12 m-auto space-y-20">
          <h2 className="text-brand2 text-center">Developer</h2>
          <div className="flex w-full   items-center justify-between">
            <div className="border-8 p-10 w-[30%]  border-white  rounded-tl-[25%] rounded-br-[25%] ">
              <div className="  space-y-6  ">
                {/* name */}
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="/images/profile.svg" alt="profile" />
                  <p className="title2">Sanket</p>
                  <p>Full Stack Web Developer</p>
                </div>
                {/* info */}
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

                {/* Skills buttons */}
                <div className="flex flex-wrap gap-4">
                  {["HTML", "CSS", "JS", "REACT", "Tailwind"]?.map((skill) => {
                    return (
                      <div
                        className="bg-brand1 text-themebg1 body3 px-4 py-1 rounded-full"
                        key={key}
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>

                {/* Resume */}
                <button className="flex gap-4 rounded-full px-6 m-auto items-center  text-themebg1 w-full  justify-center bg-white p-4">
                  <span className="body1">Download CV </span>
                  <img src="/icons/downloadArrow.svg" alt="downloadArrow" />
                </button>
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
            </div>0
            <div className="bg-themebg2 p-10 rounded-full ">
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
