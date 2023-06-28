import Navigation from "./components/navigation";
import Photos from "./components/photos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <Photos />
    </main>
  );
}
