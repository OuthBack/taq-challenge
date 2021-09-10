import { IChildren } from "../../../types";
import { Title } from "./styles";

export function BigTitle({ children }: IChildren) {
  return <Title className="big-title">{children}</Title>;
}
