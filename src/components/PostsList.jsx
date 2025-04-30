"use client";
import { fetchPosts } from "@/store/operations";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { selectError, selectLoading, selectPosts } from "@/store/selectors";
import { useEffect } from "react";

export default function PostsList() {
  const dispatch = useDispatch();
  const items = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error loading posts:", error);
    return <p>Error loading posts</p>;
  }

  if (items.length === 0) return <p>No posts available</p>;

  return (
    <div className="posts-list">
      {items.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
