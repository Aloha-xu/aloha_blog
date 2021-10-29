import adStyles from '../styles/components/Advert.module.css'
import { CustomerServiceOutlined, VerifiedOutlined, ReadOutlined } from '@ant-design/icons'
const Advert = () => {

  const handleTo = ()=>{
    window.open('http://alohaxuuuu.fun/')
  }

  return (
    <div className={`${adStyles.ad_div} comm_box`}>
      <div style={{ textAlign: 'center', fontSize: 1.5 + 'em' }}>做过的一些东西</div>
      <div className={`${adStyles.introduce_card} comm_box`} onClick={handleTo}>
        <CustomerServiceOutlined style={{ fontSize: 2 + 'em' }} />
        <div className={adStyles.text}>Vue全家桶音乐播放器</div>
      </div>
      <div className={`${adStyles.introduce_card} comm_box`}>
        <VerifiedOutlined style={{ fontSize: 2 + 'em' }} />
        <div className={adStyles.text}>JAVA驾校模考系统</div>
      </div>
      <div className={`${adStyles.introduce_card} comm_box`}>
        <ReadOutlined style={{ fontSize: 2 + 'em' }} />
        <div className={adStyles.text}>React + egg.js 个人博客</div>
      </div>
      <div className={`${adStyles.introduce_card} comm_box`}>
        <ReadOutlined style={{ fontSize: 2 + 'em' }} />
        <div className={adStyles.text}>express 图床</div>
      </div>
    </div>
  )
}

export default Advert