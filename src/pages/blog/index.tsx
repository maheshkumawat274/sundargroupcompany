import BlogAbout from "../../components/blog/BlogAbout"
import BlogTopSection from "../../components/blog/BlogTopSection"
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