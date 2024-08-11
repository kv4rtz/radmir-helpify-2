import { Card, CardContent, CardHeader } from "@/components/ui";

import { HeaderNavigation } from "./components/HeaderNavigation";
import { HeaderTitle } from "./components/HeaderTitle";

export const Header = () => {
  return (
    <header>
      <Card>
        <CardHeader>
          <HeaderTitle />
        </CardHeader>
        <CardContent>
          <HeaderNavigation />
        </CardContent>
      </Card>
    </header>
  );
};
