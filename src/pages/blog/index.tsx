import BlogAbout from "../../components/home/blog/BlogAbout"
import BlogTopSection from "../../components/home/blog/BlogTopSection"
import BlogsPage from "./BlogPages"

const BlogMainPage = () => {
  return (
    <>
     <div>
      <BlogTopSection/>
      <BlogAbout/>
      <BlogsPage/>
     </div>
    </>
  )
}

export default BlogMainPage