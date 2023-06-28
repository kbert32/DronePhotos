import Card from "./card";

export default function Photos() {
  return (
    <div className="flex flex-row">
      <Card
        path="/photos/tonygrove.png"
        alt="tony grove"
        description="Background"
      />
    </div>
  );
}
