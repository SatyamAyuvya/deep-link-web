import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Home</h1>
      <ul>
        <li><Link href="/product/123">Go to Product</Link></li>
        <li><Link href="/contact">Go to Contact Page</Link></li>
      </ul>
    </main>
  );
}
