import React from "react";
import { Container } from "@/components/layout";
import { Navbar } from "./_components/navbar";

export default ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Container size="full">{children}</Container>
    </>
  );
};
