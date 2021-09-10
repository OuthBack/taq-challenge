import styled from "styled-components";

interface IProps {
  status: string;
}

const getColorByStatus = (
  status: string,
  colorOK: string,
  colorNo: string,
  colorNotOK: string
) => {
  const statusLowerCase = status.toLowerCase();
  if (statusLowerCase === "alive") {
    return colorOK;
  }
  if (statusLowerCase === "unknown") return colorNotOK;

  return colorNo;
};

export const MiniButton = styled.button<IProps>`
  padding: 20px 7px;
  font-size: 24px;
  font-weight: bold;
  width: 140px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 4px;
  background-color: ${(props) =>
    getColorByStatus(
      props.status,
      props.theme.colors.green500,
      props.theme.colors.grey700,
      props.theme.colors.green700
    )};
  color: ${(props) => props.theme.font.colors.white};
`;
