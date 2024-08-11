import { PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container flex flex-col min-h-dvh py-3">{children}</div>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Main = Main;
