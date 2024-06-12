import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex fixed top-0 left-0 bg-themebg1 w-full ">
      <div className="w-10/12 m-auto border-slate-700  border-b py-8">
        <div className=" flex body1 justify-between text-white    w-full  ">
          <Link to="/" className="  flex justify-between gap-2 items-center">
            <img src="/icons/code.svg" className="w-10" alt="code" />
            <span>Sanket</span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="space-x-6">
              {React.Children.toArray(
                [
                  { name: "Home", url: "/" },
                  { name: "Blogs", url: "/blogs" },
                ].map(({ name, url }) => {
                  return (
                    <Link
                      className={`${pathname === url ? "text-brand1" : ""}`}
                      to={url}
                    >
                      {name}
                    </Link>
                  );
                })
              )}
            </div>

            <div className="flex items-center  gap-6">
              {React.Children.toArray(
                [
                  { name: "Github", icon: "/icons/github.svg", url: "#" },
                  { name: "Twitter", icon: "/icons/insta.svg", url: "#" },
                  { name: "Instagram", icon: "/icons/insta.svg", url: "#" },
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
      </div>
    </nav>
  );
};

export default Navbar;
