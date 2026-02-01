import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./component/header/header"
import styles from "./style/global.module.css"
import { Footer } from "./component/footer/footer"
import { Home } from "./module/home/home"
import { About } from "./module/about/about"
import { Pricing } from "./module/pricing/pricing"
import { Project } from "./module/project/project"
import { Blog } from "./module/blog/blog"
import { ContactUs } from "./module/contact-us/contact-us"

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
