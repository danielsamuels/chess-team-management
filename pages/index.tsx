import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main>
        <h1>Composition</h1>
        <p>Hello there, welcome to Composition.</p>
        <Link href="/organisations/123">Organisation 123</Link>
      </main>
  );
}
