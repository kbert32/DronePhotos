import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex items-center justify-center w-screen h-24 bg-indigo-950 fixed top-0 left-0 right-0">
      <div>
        <Link href="/">
          <h1 className="text-3xl font-bold">Drone Photos</h1>
        </Link>
      </div>
    </header>
  );
}
