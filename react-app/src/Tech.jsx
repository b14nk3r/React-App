import React from 'react'
import { Table, Container, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Banner from './Banner';
import Report1 from "./images/report1.jpg"
import Report2 from "./images/report2.jpg"
import Report3 from "./images/report3.jpg"
import Report4 from "./images/report4.jpg"
import Report5 from "./images/report5.jpg"
import Report6 from "./images/report6.jpg"
import Report7 from "./images/report7.jpg"
import Report8 from "./images/report8.jpg"
import Report9 from "./images/report9.jpg"
import Report10 from "./images/report10.jpg"
import Report11 from "./images/report11.jpg"
import Report12 from "./images/report12.jpg"
import Report13 from "./images/report13.jpg"
import Report14 from "./images/report14.jpg"
import Report15 from "./images/report15.jpg"
import Report16 from "./images/report16.jpg"

const Tech = () => {
    const reports = [
        {reportImg : Report1, reportTitle : "성적서"},
        {reportImg : Report2, reportTitle : "성적서"},
        {reportImg : Report3, reportTitle : "성적서"},
        {reportImg : Report4, reportTitle : "성적서"},
        {reportImg : Report5, reportTitle : "성적서"},
        {reportImg : Report6, reportTitle : "성적서"},
        {reportImg : Report7, reportTitle : "성적서"},
        {reportImg : Report8, reportTitle : "성적서"},
        {reportImg : Report9, reportTitle : "성적서"},
        {reportImg : Report10, reportTitle : "성적서"},     
        {reportImg : Report11, reportTitle : "성적서"},     
        {reportImg : Report12, reportTitle : "성적서"},
        {reportImg : Report13, reportTitle : "성적서"},   
        {reportImg : Report14, reportTitle : "성적서"},   
        {reportImg : Report15, reportTitle : "성적서"},   
        {reportImg : Report16, reportTitle : "성적서"},                
    ]
    const reportList = reports.map((v, index) => {
        return (
            <Link to={`/TechDetails/${index + 1}`} state={{ reportImg : v.reportImg, reportTitle : v.reportTitle }} style={{ textDecoration : "none", color : "black" }}>
                <div className="p-2 align-self-center" style={{ width: '25rem' }}>
                    <img alt='' src={v.reportImg} style={{ width: '100%' }} />
                    <div style={{ height: "100%" }} >
                        {v.reportTitle}
                    </div>
                </div>
            </Link>
        );
    });
    return (
        <>
            <Banner title="기술현황"
                subTitle="마루는 언제나 당신의 안전을 먼저 생각합니다."
                backgroundImg="bg-03"
                isMenu="d-none"></Banner>

            <Container>
                <div className='d-flex flex-wrap justify-content-between' style={{ width: "100%" }}>
                    {reportList}
                </div>
            </Container>
        </>
    )
}

export default Tech