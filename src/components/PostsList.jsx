"use client";

import {
  Grid,
  TextField,
  InputAdornment,
  Fab,
  Typography,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchPosts } from "@/store/operations";
import { selectPosts, selectLoading, selectError } from "@/store/selectors";
import PostCard from "./PostCard";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

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
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setDisplayedPosts(filtered.slice(0, page * POSTS_PER_PAGE));
  }, [filtered, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const loadMoreRef = useIntersectionObserver(() => {
    if (!loading && displayedPosts.length < filtered.length) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <>
      <TextField
        placeholder="Search by title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{ color: (theme) => theme.palette.text.primary }}
                />
              </InputAdornment>
            ),
          },
        }}
      />

      {error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <Grid container spacing={2} sx={{ marginTop: 2, width: "100%" }}>
          {displayedPosts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
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
          sx={{ position: "fixed", bottom: 48, right: 24 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}
