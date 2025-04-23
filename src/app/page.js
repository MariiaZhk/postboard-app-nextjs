export default async function PostsPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Posts Loaded!</h1>;
}
