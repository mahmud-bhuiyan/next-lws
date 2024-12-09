import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";

export const metadata = {
  title: "Posts | MRB",
  description: "Posts page",
};

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <main className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          All Posts
        </h3>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/posts/${post.id}`}>
                <h4 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h4>
              </Link>
              <p className="text-gray-600 mb-4">
                {post.body.substring(0, 100)}...
              </p>
              <Link href={`/posts/${post.id}`}>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  Read More
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
