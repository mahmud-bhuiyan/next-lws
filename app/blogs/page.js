import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export default function Blogs() {
  return (
    <main className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          Latest Blogs
        </h3>
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/blogs/${blog.id}`}>
                <h4 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                  {blog.title}
                </h4>
              </Link>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="text-gray-500 text-sm mb-4">
                <span>By {blog.author}</span> &nbsp;|&nbsp;{" "}
                <span>{blog.date}</span>
              </div>
              <Link href={`/blogs/${blog.id}`}>
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
