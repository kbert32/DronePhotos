import Navigation from "./components/navigation";
import Photos from "./components/photos";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex">
        <Photos />
      </main>
    </>
  );
}
