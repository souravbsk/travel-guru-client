/* eslint-disable no-unused-vars */
import React from "react";
import Blog from "../Blog/Blog";
import { useLoaderData } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="max-w-full border-t-2 pt-8 w-10/12 mx-auto">
      <div className="space-y-8">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div>
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    </div>
  );
};

export default Blogs;
