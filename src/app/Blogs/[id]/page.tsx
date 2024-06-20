import { ImageUrl } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import React from "react";

type Props = {
  params: { id: string };
};

type BlogType = {
  title: string;
  description: string;
  content: string;
  image: string;
};

const Blog = async ({ params }: Props) => {
  const response = await axios.get(
    `http://localhost:5171/api/blog/${params.id}`
  );
  const data: BlogType = response.data;
  return (
    <div className="px-24 pt-10">
      <main className="flex flex-col gap-4">
        <h3 className="text-center text-[var(--secondary)] font-bold">
          {data.title}
        </h3>
        <Image
          width={100}
          height={100}
          src={`${ImageUrl}${data.image}`}
          alt="Blog Image"
          className="w-full h-[200px]"
        />
        <div className="flex flex-col gap-3 pb-4">
          <p className="font-semibold text-lg">{data.description}</p>
          <p className="font-medium text-lg leading-relaxed">{data.content}</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
