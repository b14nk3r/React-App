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
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Company from "./Company";
import Product from "./Product";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Fab } from '@mui/material';
import { Call } from '@mui/icons-material';

//floating button
import { FloatButton } from "antd";
import {
  MessageFilled,
  PlusOutlined,
  UserAddOutlined,
  FileAddFilled,


} from "@ant-design/icons";

// 플루팅버튼에 전화번호 연결 안됨
function App() {
  return (
    <div>
      <Layout></Layout>


      <Fab className="floating-text" variant="extended" style={{ position: "fixed", bottom: "20px", right: "20px", boxShadow: "none", backgroundColor: "#4caf50", color: "white" }}>
        <Call sx={{ mr: 1 }} />
        031-796-9390
      </Fab>


    </div>
  );
}

export default App;
