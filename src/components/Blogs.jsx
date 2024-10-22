import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmarks, handleReadMinutes}) => {
    let [blogsData, setBlogsData] = useState([])
  
    useEffect(() => {
      fetch('../../public/data/blogData.json')
      .then(res => res.json())
      .then(data => setBlogsData(data)) 
    },[])
  

    return (
        <div className="flex flex-col gap-5">
            {
                blogsData.map((el, idx) => (
                    <Blog handleBookmarks={handleBookmarks} handleReadMinutes={handleReadMinutes} key={idx} el={el} />
                ))
            }

        </div>
    );
};

export default Blogs;