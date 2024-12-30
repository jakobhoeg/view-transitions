import { Link } from "next-view-transitions";

export default function DemoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="underline fade-in">
        Go to Home
      </Link>
      <h1 className="font-medium">Hello</h1>
    </div>
  );
}
