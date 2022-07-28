import Footer from "./Footer/Index"
import './styles.css'

const index = ({children}) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default index