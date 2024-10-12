import { Models } from "appwrite";

type PostStatsProps = {
  post: Models.Document;
};

const PostStatus = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img src="/assets/icons/liked.svg" alt="" />
      </div>
    </div>
  );
};

export default PostStatus;
