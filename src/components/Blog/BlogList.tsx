import React from "react";
import axios from "axios";
import Image from "next/image";
import { ImageUrl } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

type BlogType = {
  id: number;
  title: string;
  description: string;
  image: string;
  username: string;
};

const BlogList = async () => {
  const response = await axios.get("http://localhost:5171/api/blog");
  const data = response.data;
  return (
    <div className="mt-8 ml-5 pb-3 cards ">
      {data.map((blog: BlogType) => {
        return (
          <div
            className="card w-full bg-white cursor-pointer overflow-hidden h-fit  rounded-lg  mb-2 shadow-lg flex flex-col hover:shadow-fuchsia-200 "
            key={blog.id}>
            <Image
              src={`${ImageUrl}${blog.image}`}
              alt=""
              width={100}
              height={100}
              className="w-full h-[150px]"
            />
            <div className="flex flex-col gap-4 mt-2 p-2">
              <h3 className="text-xl font-semibold leading-tight text-[#4F4E4E]">
                {blog.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold ">{blog.username}</span>
                <Button className="rounded-md bg-[var(--primary)] hover:bg-[var(--secondary)]">
                  <Link href={`/Blogs/${blog.id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
