
const Bookmarks = ({bookmark, readMinutes}) => {
    let bookmarks = bookmark
    let readMinute = readMinutes
    
    return (
        <div className="flex flex-col gap-4">
            <div className="border-2 p-5 rounded-md border-[#6047EC] bg-[#EFECFD] flex items-center justify-center">
                <h2 className="text-[#6047EC] font-bold text-xl">Spent time on read: {readMinute} min</h2>
            </div>

            <div className="p-5 rounded-md bg-[#F3F3F3] flex flex-col gap-5">
                <h2 className="text-xl  font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                <div className="flex flex-col gap-5">
                    {bookmarks.map((el, idx)=>(
                        <div key={idx} className="bg-white p-4 rounded-md">
                            <h2 className="text-base font-semibold">{el}
                            </h2>
                        </div>
                    ))}
                    
                    

                </div>
            </div>


        </div>
    );
};

export default Bookmarks;