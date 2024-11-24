import Button from "@/app/components/Button";
import Image from "next/image";
import missionImage from "@/public/images/Media_Wrappers.webp";

export default function Mission() {
  return (
    <main>
      <div>
        <h3>This is Mission Page</h3>
      </div>
      <div className="w-[400px]">
        <Image src={missionImage} alt="Mission Image" placeholder="blur" />
      </div>
      <Button />
    </main>
  );
}
