import React, { useId } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const key = useId();
  return (
    <div className="">
      <section className="bg-themebg1 min-h-screen    flex items-center w-full">
        <div className="w-10/12 py-20  m-auto space-y-10">
          <h2 className="text-brand2 text-center">Developer</h2>
          <div className="flex w-full gap-10    items-center justify-between">
            <div className="border-8  p-10 w-[50%]  border-white  rounded-tl-[25%] rounded-br-[25%] ">
              <div className="  space-y-6   ">
                {/* name */}
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="/images/profile.svg" alt="profile" />
                  <p className="title3">Sanket</p>
                  <p className="body4">Full Stack Web Developer</p>
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
                          <p className="body4">{name}</p>
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
                <button className="flex gap-4 rounded-full sm:w-10/12  px-6  items-center  text-themebg1 w-fit  justify-start bg-white p-4">
                  <span className="body4b text-center w-full">
                    Download CV{" "}
                  </span>
                  <img src="/icons/downloadArrow.svg" alt="downloadArrow" />
                </button>
              </div>
            </div>
            <div className="space-y-2   ">
              <div>
                <span className="text-brand2 body3">{"<h1>"}</span>
                <h4>Hey</h4>
                <h4>I’m Sanket,</h4>
                <h4>
                  Full-Stack Web Developer
                  <span className="ml-8 text-brand2 body3">{"</h1>"}</span>
                </h4>
              </div>
              <div className="">
                <span className="text-brand2 body3">{"<p>"}</span>
                <p className="py-2">
                  I help business grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done,
                </p>
                <span className="text-brand2 body3">{"</p>"}</span>
              </div>

              <p className="text-brand1 title2">LET'S TALK</p>
            </div>
            <div className="bg-themebg2 px-16 py-20 space-y-20 rounded-3xl ">
              {[
                {
                  numb: 1,
                  name: "Programming Language",
                },
                {
                  numb: 6,
                  name: "Development Tools",
                },
                {
                  numb: 3,
                  name: "Years of Experience",
                },
              ].map(({ name, numb }) => {
                return (
                  <div className="flex gap-4  items-center">
                    <h4 className=" text-brand1 ">{numb}</h4>
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-themebg2 py-20 bg-about_bg bg-no-repeat bg-cover min-h-screen  w-full">
        <div className="w-10/12 m-auto ">
          <div className="flex  w-full h-40 justify-center">
            <img src="/icons/scroll_mouse.svg" alt="" />
          </div>
          <div className="">
            <div className=" space-y-10  w-8/12 h-full ">
              <h3 className="">About Me</h3>
            </div>
            <div className="rounded-3xl space-x-32  flex items-end ">
              <div className=" p-10   h-full bg-themebg1 rounded-3xl">
                <p className="text-brand2 body3">{"<p>"}</p>
                <div className=" space-y-4 py-4 h-full">
                  <span className="title3 text-brand1">Hello!</span>
                  <p className="body3">
                    My name is Sanket and I specialize in web developement that
                    utilizes{" "}
                    <span className=" text-brand1">
                      HTML, CSS, JS, and REACT
                    </span>{" "}
                    etc.
                  </p>
                  <p className="body3">
                    I am a highly motivated individual and eternal optimist
                    dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.
                  </p>
                  <p className="body3">
                    {" "}
                    When I'm not coding, I am{" "}
                    <span className="text-brand1">writing bolgs,</span> reading,
                    or picking up some new hands-on art project like{" "}
                    <span className="text-brand1">
                      photography & videography.{" "}
                    </span>
                  </p>
                  <p className="body3">
                    {" "}
                    I like to have my perspective and belief systems challenged
                    so that I see the world through new eyes.
                  </p>
                </div>
                <span className="text-brand2 body3">{"<p>"}</span>
              </div>
              <img
                className=" object-cover rounded-3xl h-[60vh]  w-5/12 "
                src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="working_image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-themebg1  bg-skills_bg bg-no-repeat bg-cover min-h-screen  w-full"></section>

      <section className="bg-themebg2 min-h-screen   w-full"></section>
      <section className="bg-themebg1 min-h-screen   w-full"></section>
    </div>
  );
};

export default Home;
