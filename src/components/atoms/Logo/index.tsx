import LogoSrc from "../../../assets/images/logo.png";

export function Logo() {
  return (
    <img
      src={LogoSrc}
      alt="Rick and Morty"
      className="logo"
      width={500}
      height={200}
    />
  );
}
