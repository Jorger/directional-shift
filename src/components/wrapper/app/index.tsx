import Container from "../container";
import React from "react";

const AppWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <Container>{children}</Container>
);

export default React.memo(AppWrapper);