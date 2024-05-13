import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
          <Link href="/products&page=1">products</Link>
      </div>
    </main>
  );
}
