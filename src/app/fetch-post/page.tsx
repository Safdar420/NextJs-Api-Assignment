"use client";
import PostCard from "@/components/PostCard";

import { useState, useEffect } from "react";
import { IPost } from "../api/books/route";

export default function Fetch() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPost(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => setError("An unexpected "))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8 bg-gradient-to-r from-black to-slate-400">
      {post.map((post:IPost) => (
        <PostCard key={post.id} body={post.body} title={post.title}/>
      ))}
    </div>
  );
}
