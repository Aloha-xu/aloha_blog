import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import style from '../styles/pages/detail.module.css'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import { getDetailById } from '../network/api'
import marked from 'marked'
import hljs from 'highlight.js'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import Link from 'next/link'

export async function getServerSideProps(context) {
  let id = context.query.id
  const { data } = await getDetailById(id)
  return {
    props: { data }
  }
}

//这里的{}就是为了解构data出来
export default function Detail({ data }) {
  let props = data.data[0]
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  const [markdownContent, setMarkdownContent] = useState('')
  const [list, setList] = useState(props)
  const [typeInfo, setTypeInfo] = useState('aloha');

  useEffect(() => {
    let html = marked(props.article_content)
    setMarkdownContent(html)

    switch (props.typeid) {
      case 0:
        setTypeInfo('首页')
        break;
      case 1:
        setTypeInfo('视频')
        break;
      case 2:
        setTypeInfo('BlackPink')
        break;
      case 3:
        setTypeInfo('生活')
        break;
      default:
    }

  }, [])
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm_main" type="flex" justify="center">
        <Col className="comm_left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className={style.bread_div}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/"><a>首页</a></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item><a href={`/list?id=${props.typeid}`}>{typeInfo}</a></Breadcrumb.Item>
                <Breadcrumb.Item>aloha</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className={style.detailed_title}>
                {list.title}
              </div>
              <div className={`list_icon ${style.center}`}>
                <span><CalendarOutlined /> {list.addTime}</span>
                <span><FolderOutlined /> {list.typeName}</span>
                <span><FireOutlined /> {list.view_count}</span>
              </div>
              <div
                className={hljs}
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              >
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm_box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="comm_box">
              <div className={style.nav_title}>文章目录</div>
              {<MarkNav
                className="article-menu"
                source={props.article_content}
                ordered={false}
              />}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}


