import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav className="mb-2">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
