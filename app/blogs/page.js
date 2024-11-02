import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description:
        "A deep dive into closures in JavaScript and how they work under the hood.",
      author: "Alice Johnson",
      date: "October 2, 2024",
    },
    {
      id: 2,
      title: "Getting Started with React Hooks",
      description:
        "Learn about React Hooks and how to use them to manage state and lifecycle in functional components.",
      author: "Bob Smith",
      date: "October 5, 2024",
    },
    {
      id: 3,
      title: "Building RESTful APIs with Express",
      description:
        "A step-by-step guide to building RESTful APIs with Node.js and Express.",
      author: "Charlie Lee",
      date: "October 8, 2024",
    },
    {
      id: 4,
      title: "Introduction to Next.js for Beginners",
      description:
        "An introductory guide to the Next.js framework and its advantages for React developers.",
      author: "Dana Clark",
      date: "October 10, 2024",
    },
    {
      id: 5,
      title: "CSS Grid vs. Flexbox: When to Use Which",
      description:
        "Comparing CSS Grid and Flexbox to understand their differences and when to use each layout tool.",
      author: "Evan Hughes",
      date: "October 12, 2024",
    },
    {
      id: 6,
      title: "Asynchronous JavaScript: Promises and Async/Await",
      description:
        "Exploring the asynchronous nature of JavaScript with Promises and Async/Await syntax.",
      author: "Fiona Wang",
      date: "October 14, 2024",
    },
    {
      id: 7,
      title: "State Management in React with Redux",
      description:
        "Learn how to manage complex state in React applications using Redux.",
      author: "George Baker",
      date: "October 16, 2024",
    },
    {
      id: 8,
      title: "A Guide to Responsive Web Design",
      description:
        "Best practices for creating responsive, mobile-friendly web designs.",
      author: "Hannah Brown",
      date: "October 18, 2024",
    },
    {
      id: 9,
      title: "Optimizing Web Performance",
      description:
        "Tips and techniques for improving the performance of web applications.",
      author: "Ian Carter",
      date: "October 20, 2024",
    },
    {
      id: 10,
      title: "Introduction to TypeScript",
      description:
        "Get started with TypeScript, a typed superset of JavaScript that can help catch errors at compile time.",
      author: "Jill Green",
      date: "October 22, 2024",
    },
  ];

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
                <span>By {blog.author}</span> &nbsp;|&nbsp; <span>{blog.date}</span>
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
