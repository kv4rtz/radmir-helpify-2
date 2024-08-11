import Image from "next/image";

import { Badge } from "@/components/ui";

import { ModeToggle } from "./ModeToggle";

export const HeaderTitle = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 flex-wrap">
        <Image src="/logotype.svg" alt="logotype" width={50} height={50} />
        <div>
          <h1 className="text-3xl font-bold italic max-[500px]:text-2xl">
            Radmir Helpify
          </h1>
          <div className="italic text-sm opacity-50">Ваш лучший помощник</div>
        </div>
        <Badge className="font-bold">2.0</Badge>
      </div>
      <ModeToggle />
    </div>
  );
};
