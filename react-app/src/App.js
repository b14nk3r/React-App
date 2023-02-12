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
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Company from "./Company";
import Product from "./Product";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//floating button
import { FloatButton } from "antd";
import {
  MessageFilled,
  PlusOutlined,
  UserAddOutlined,
  FileAddFilled,
} from "@ant-design/icons";

function App() {
  return (
    <div>
      <Layout></Layout>
      <FloatButton onOpen></FloatButton>
      <FloatButton
        icon={<MessageFilled></MessageFilled>}
        style={{ right: 150 }}
        shape="square"
      ></FloatButton>
      <FloatButton.Group
        icon={<PlusOutlined></PlusOutlined>}
        style={{ right: 100 }}
        shape="circle"
        trigger="click"
      >
        <FloatButton
          icon={<UserAddOutlined></UserAddOutlined>}
          shape="square"
        ></FloatButton>

        <FloatButton
          icon={<FileAddFilled></FileAddFilled>}
          shape="square"
        ></FloatButton>
      </FloatButton.Group>
    </div>
  );
}

export default App;
