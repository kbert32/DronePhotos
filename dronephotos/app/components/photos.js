import Link from "next/link";
import Card from "./card";

export default function Photos() {
  return (
    <div className="flex flex-wrap justify-between max-w-screen-lg mx-auto">
      <Link href="/rulethirds">
        <Card
          path="/photos/tonygrove.png"
          alt="Rule of Thirds"
          description="Rule of Thirds"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/ViewpointsHDR-2.png"
          alt="Viewpoints"
          description="Viewpoints"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/Flylower.JPG"
          alt="Fly Lower"
          description="Fly Lower"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/FilltheframeHDR-2.png"
          alt="Fill the Frame"
          description="Fill the Frame"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/ForegroundHDR-3.png"
          alt="Foreground"
          description="Foreground"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/Leadinglines.png"
          alt="Leading Lines"
          description="Leading Lines"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/tonygrove.png"
          alt="tony grove"
          description="Backgrounds"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/Goldenhour.JPG"
          alt="Golden Hour"
          description="Golden Hour"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/tonygrove.png"
          alt="Bracketing: HDR"
          description="Bracketing: HDR"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/Birdseye.JPG"
          alt="Bird's Eye"
          description="Bird's Eye"
        />
      </Link>
      <Link href="/">
        <Card
          path="/photos/tonygrove.png"
          alt="Panorama"
          description="Panorama"
        />
      </Link>
    </div>
  );
}
