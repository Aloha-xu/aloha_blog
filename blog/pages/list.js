import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import axios from 'axios'
import { getListById } from '../network/api'
import Link from 'next/link'


export async function getServerSideProps(context) {
  let id = context.query.id
  const { data } = await getListById(id)
  const res = JSON.stringify({ data, id })
  return {
    props: { res },
  }
}

const ListPage = (prpos) => {
  console.log(prpos)
  const res = JSON.parse(prpos.res)
  console.log(res)


  let listInfo = res.data.data
  let currentNavIndex = res.id
  console.log(listInfo)

  const [mylist, setMylist] = useState(listInfo);
  const [typeInfo, setTypeInfo] = useState('aloha');

  let controler

  if (currentNavIndex) {
    controler = currentNavIndex
  }

  useEffect(() => {
    setMylist(listInfo)

    switch (currentNavIndex) {
      case '0':
        setTypeInfo('首页')
        break;
      case '1':
        setTypeInfo('视频')
        break;
      case '2':
        setTypeInfo('BlackPink')
        break;
      case '3':
        setTypeInfo('生活')
        break;
      default:
    }

  }, [controler])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className='comm_main' type="flex" justify="center">
        <Col className='comm_left' xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className='bread_div'>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/"><a>首页</a></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{typeInfo}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list_title">
                    <a href={{ pathname: '/detail', query: { id: item.id } }}>{item.title}</a>
                  </div>
                  <div className="list_icon">
                    <span><CalendarOutlined />{item.addTime}</span>
                    <span><FolderOutlined /> {item.typeName}</span>
                    <span><FireOutlined />  {item.view_count}人</span>
                  </div>
                  <div className="list_context">{item.introduce}</div>
                </List.Item>
              )}
            />

          </div>
        </Col>

        <Col className='comm_box' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />

    </>
  )

}

export default ListPage