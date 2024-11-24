import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export default function BlogPage({ params }) {
  const { id } = params;
  const blogId = parseInt(id);

  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    notFound();
  }

  return (
    <main className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <Link
          href="/blogs"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Blogs
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="text-gray-600 mb-4">
          <span>By {blog.author}</span> &nbsp;|&nbsp; <span>{blog.date}</span>
        </div>
        <p className="text-gray-700 mb-6">{blog.description}</p>
        <div className="prose max-w-none">
          <p>{blog.content}</p>
        </div>
      </div>
    </main>
  );
}
