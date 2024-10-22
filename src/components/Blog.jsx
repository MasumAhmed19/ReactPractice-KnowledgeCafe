import { BsBookmarkStarFill } from "react-icons/bs";

const Blog = ({el, handleBookmarks, handleReadMinutes}) => {
    let {coverImg, profileImg, name, date, readTime, title, hashtags} = el

    return (
        <div className="flex flex-col gap-5">
            <img className="rounded-md" src={coverImg} alt="" />
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <div><img className="w-[40px]" src={profileImg} alt="" /></div>
                    <div>
                        <h3 className="font-bold">{name}</h3>
                        <h4 className="text-[#707070]">{date}</h4>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <h4>{readTime}  min read</h4>
                    <button onClick={()=>handleBookmarks(title)}><BsBookmarkStarFill className="text-base text-[#707070]"/></button>
                </div>
            </div>

            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="flex gap-3 text-[#707070]">
                {hashtags.map((el, idx) => (
                    <span className="text-base" key={idx}><a href="#">{el}</a></span>
                ))}
            </div>  

            <h2 className="text-[#6047EC] text-base underline underline-offset-4 font-semibold cursor-pointer" onClick={()=>handleReadMinutes({readTime})}>Mark as read</h2>  

            <hr className="my-4" />       
            
        </div>
    );
};

export default Blog;