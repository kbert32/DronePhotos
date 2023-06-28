import Image from "next/image";

export default function Card(props) {
  return (
    <div className="text-center h-48 w-48 m-4 p-4 border-4 border-indigo-950 rounded-md">
      <div className="mb-4">{props.description}</div>
      <Image
        className="h-auto rounded-md"
        src={props.path}
        width={150}
        height={150}
        alt={props.alt}
      />
    </div>
  );
}
