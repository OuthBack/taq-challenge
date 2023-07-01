import { IChildren } from "../../../types";
import { SubTitle as H5SubTitle } from "./styles";

export function AlternativeSubTitle({ children }: IChildren) {
  return <H5SubTitle className="subtitle">{children}</H5SubTitle>;
}
