import { IChildren } from "../../../dtos";
import { MiniButton } from "./styles";

interface IProps extends IChildren {
  status: string;
}

export function StatusButton({ status, children }: IProps) {
  return <MiniButton status={status}>{children}</MiniButton>;
}
