import Navbar from "../Navbar";
import { FaComment, FaEye, FaShareSquare } from "react-icons/fa";

const BlogsCard = ({ blogs }) => {
  const { image_url, title, details, total_view, comments, description } =
    blogs;
  return (
    <div>
      <div className="lg:w-2/5 mx-auto mb-10 shadow-xl">
        <p className="absolute bg-[#FF214F] text-white p-2 m-2 rounded text-sm">{details}</p>
        <img className="" src={image_url} alt="" />
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">{title}</h1>
          <p>{description}</p>
          <div className="mt-3 flex  justify-between items-center">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <FaEye></FaEye>
                <p>{total_view}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaComment></FaComment>
                <p>{comments} Comments</p>
              </div>
            </div>
            <div>
              <FaShareSquare className="text-xl"></FaShareSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
