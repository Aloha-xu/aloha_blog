import React, { useState, useEffect } from 'react';
import { Col, Row, Menu } from 'antd';
import styles from '../styles/components/Header.module.css'
import { YoutubeOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'

export default function Header() {

    const [navType, setNavType] = useState([])

    useEffect(() => {
        const getNavType = async () => {
            const result= await axios('http://localhost:7001/default/getTypeInfo').then(
                    (res) => {
                        console.log(res.data.data)
                        return res.data.data
                    }
                )
            setNavType(result)
        }
        getNavType()
    }, [])

    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    return (
        <div className={styles.header}>
            <Row justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={styles.header_logo}>Aloha</span>
                    <span className={styles.header_txt}>Everyday</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal' onClick={handleClick}>
                        {
                            navType.map((item, index) => {
                                return(
                                    <Menu.Item key={item.id} >
                                            {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}