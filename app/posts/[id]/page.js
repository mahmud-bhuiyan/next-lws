import Link from "next/link";
import getPostById from "@/lib/getPostById";

export async function generateMetadata({ params }) {
  const postId = parseInt(params.id);
  return {
    title: `Post ${postId} | MRB`,
    description: "Explore detailed insights on this post.",
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postId = parseInt(id);

  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <main className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <Link
          href="/posts"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Posts
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          <span>User ID: {post.userId}</span> &nbsp;|&nbsp;{" "}
          <span>Post ID: {post.id}</span>
        </div>
        <p className="text-gray-700 mb-6">{post.body}</p>
      </div>
    </main>
  );
}
