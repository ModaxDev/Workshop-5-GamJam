import 'bootstrap/dist/css/bootstrap.css'
import {Context} from "../context/context.js"
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Context>
      <Component {...pageProps} />
    </Context>
  </>
  )
}
