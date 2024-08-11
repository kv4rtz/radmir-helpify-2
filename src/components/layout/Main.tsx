import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return <main className="flex-1 mt-3">{children}</main>;
};
