import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <div className="flex ga-4">
            <textarea placeholder="What's on your mind?" className="flex-1 bg-gray-100 rounded-lg"></textarea>
            <Image
                src="/emoji.png"
                alt="avatar"
                width={20}
                height={20}
                className="w-5 h-5 object-cover self-end"
            />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
                <Image
                    src="/addimage.png"
                    alt="avatar"
                    width={20}
                    height={20}
                />
                Photo
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image
                    src="/addVideo.png"
                    alt="avatar"
                    width={20}
                    height={20}
                />
                Video
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image
                    src="/addevent.png"
                    alt="avatar"
                    width={20}
                    height={20}
                />
                Event
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image
                    src="/poll.png"
                    alt="avatar"
                    width={20}
                    height={20}
                />
                Poll
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
