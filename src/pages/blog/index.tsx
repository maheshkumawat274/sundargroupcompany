import BlogAbout from "../../components/blog/BlogAbout"
import BlogTopSection from "../../components/blog/BlogTopSection"
import Navbar from "../../components/header/Navbar"
import BlogsPage from "./BlogPages"

const BlogMainPage = () => {
  return (
    <>
     <div>
      
      <Navbar />
      <BlogTopSection/>
      <BlogAbout/>
      <BlogsPage/>
     </div>
    </>
  )
}

export default BlogMainPage