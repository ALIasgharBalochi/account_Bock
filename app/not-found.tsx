import notFoundImg from "@/public/notfound.png";
import Image from "next/image";
export default function NotFound({
  text = "page not found",
}: {
  text: string;
}) {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <Image src={notFoundImg} width={400} height={300} alt="not-found" />
      <h1>{text}</h1>
    </div>
  );
}
