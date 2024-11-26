export default async function getPostById(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    throw new Error("There was an error fetching post");
  }

  return result.json();
}
