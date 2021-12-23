import React, { useState, useEffect } from "react";
import Head from "next/head";
import { PostCard } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts, RecentPost } from "../sections/index";

export default function Home({ data }) {
  console.log({ data });
  const [posts, setPosts] = useState(data);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getPosts(skip).then((res) => setPosts(res));
  }, [skip]);

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Rise With Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="title-container">
        <span className="tag">Blog Post</span>
        <div className="mesonry">
          {posts.edges?.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="flex space-x-5 justify-center items-center">
          <div>
            <button
              disabled={!posts.pageInfo.hasPreviousPage}
              className="bg-indigo-700 w-20 text-white px-3 py-1 rounded-md disabled:bg-gray-400 disabled:text-gray-800"
              onClick={() => {
                setSkip(skip - 6);
              }}
            >
              Previous
            </button>
          </div>
          <div>
            <button
              disabled={!posts.pageInfo.hasNextPage}
              className="bg-indigo-700 w-20 text-white  px-3 py-1 rounded-md disabled:bg-gray-400 disabled:text-gray-800"
              onClick={() => {
                setSkip(skip + 6);
              }}
            >
              Next
            </button>
          </div>
          <div className="text-gray-700">
            Total Posts: {posts.pageInfo.pageSize}
          </div>
        </div>
      </div>
      <RecentPost />
    </div>
  );
}

export async function getStaticProps() {
  // const skip = 0;
  const data = (await getPosts()) || [];

  return {
    props: { data },
  };
}
