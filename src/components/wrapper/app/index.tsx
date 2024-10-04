import { OptionProvider } from "../../../context/optionContext";
import Container from "../container";
import React from "react";

const AppWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <OptionProvider>
    <Container>{children}</Container>
  </OptionProvider>
);

export default React.memo(AppWrapper);
