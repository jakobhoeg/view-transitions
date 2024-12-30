import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full font-[family-name:var(--font-geist-sans)]">
      <h1 className="transition-text-element text-xl font-medium">Hello</h1>
      <Link href="/demo" className="underline fade-in">
        Go to Demo
      </Link>
    </div>
  );
}
