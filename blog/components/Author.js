import { Avatar, Divider, Tooltip } from 'antd'
import authorStyles from '../styles/comment/Author.module.css'
import Image from 'next/image'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
const Author = () => {
    return (
        <div className={`${authorStyles.author_div} comm_box`}>
            <div className={authorStyles.aut_pic}>
                <Image src='/head_portrait.jpg'  alt='me' layout="fixed" width={100} height={100}/>
            </div>
            <div className={authorStyles.author_introduction}>
                Aloha Blog~~~
                <Divider>社交账号</Divider>
                <Tooltip title="https://github.com/Aloha-xu" placement="bottom">
                    <a href="https://github.com/Aloha-xu" target="_blank" rel="noreferrer">
                        <Avatar size={28} icon={<GithubOutlined />} className={authorStyles.account} />
                    </a>
                </Tooltip>
                <Tooltip title="QQ: 598392491" placement="bottom">
                    <Avatar size={28} icon={<QqOutlined />} className={authorStyles.account} />
                </Tooltip>
                <Tooltip title="Wechat: lovelife_xuuu" placement="bottom">
                    <Avatar size={28} icon={<WechatOutlined />} className={authorStyles.account} />
                </Tooltip>
            </div>
        </div>
    )

}

export default Author