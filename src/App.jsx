import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<>Page not Found</>} path="*" />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
