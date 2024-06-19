import notFoundImg from "@/public/notfound.png";
import Image from "next/image";
export default function NotFound({
  text = "page not found",
  height = "screen",
}: {
  text: string;
  height: string;
}) {
  return (
    <div
      className={` w-full h-${height} flex flex-col justify-center items-center`}
    >
      <Image src={notFoundImg} width={400} height={300} alt="not-found" />
      <h1>{text}</h1>
    </div>
  );
}
