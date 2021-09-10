import { ReactChild } from "react";
import { IChildren } from "../../../dtos";
import { Title as H1Title } from "./styles";

export function Title({ children }: IChildren) {
  return <H1Title className="title">{children}</H1Title>;
}
