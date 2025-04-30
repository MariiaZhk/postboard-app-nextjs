"use client";

import { Grid, TextField, InputAdornment, Skeleton, Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { fetchPosts } from "@/store/operations";
import { selectPosts, selectLoading, selectError } from "@/store/selectors";
import PostCard from "./PostCard";
import Link from "next/link";

const POSTS_PER_PAGE = 9;

export default function PostsList() {
  const dispatch = useDispatch();
  const allItems = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [displayedPosts, setDisplayedPosts] = useState([]);

  const filtered = useMemo(() => {
    return allItems.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [allItems, search]);

  useEffect(() => {
    const nextPosts = filtered.slice(0, page * POSTS_PER_PAGE);
    setDisplayedPosts(nextPosts);
  }, [filtered, page]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          displayedPosts.length < filtered.length
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    const node = loadMoreRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [displayedPosts, filtered.length, loading]);

  return (
    <>
      <TextField
        label="Search posts"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      {loading && !allItems.length ? (
        <Grid container spacing={12}>
          {displayedPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Grid container spacing={2}>
          {displayedPosts.map((post) => (
            <Grid key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}

      <div ref={loadMoreRef} style={{ height: 20, marginTop: 16 }} />

      <Link href="/posts/create">
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}
