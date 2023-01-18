import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//Import gatsby-plugin-image 개츠비로 이미지 저장되게 수정
import { StaticImage } from "gatsby-plugin-image";
//Import BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./Board";

import Company from "./Company";
import Product from "./Product";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FloatButton } from "antd";

function App() {
  return (
    <div>
      <Layout></Layout>
      <FloatButton></FloatButton>
    </div>
  );
}

export default App;
