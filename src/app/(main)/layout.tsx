import { Container } from "@/components/layout/container";
import React from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return <Container size="6xl">{children}</Container>;
};

export default MainLayout;
