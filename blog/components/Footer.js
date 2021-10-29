import footerStyle from '../styles/components/Footer.module.css'
const Footer = ()=>(
    <div className={footerStyle.footer_div}>
        <div>系统由 React+Node+Ant Desgin驱动 </div>
        <a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank' rel="noreferrer">粤ICP备2021136428号-1</a>
    </div>
)

export default Footer