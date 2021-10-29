//在这里引入全局样式
import '../styles/globals.css'
import 'antd/dist/antd.css'
import '../styles/comment/Comment.css'
import 'highlight.js/styles/monokai-sublime.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
