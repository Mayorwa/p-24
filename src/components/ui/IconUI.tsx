import spriteIcon from "@/assets/sprite.svg";
type IconProps = {
  width?: string | undefined;
  height?: string | undefined;
  viewBox?: string | undefined;
  name: any;
};
const IconUI = ({
  height = "20px",
  width = "20px",
  viewBox = "0 0 32 32",
  name = "",
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} className="icon">
      <use xlinkHref={`${spriteIcon}#icon-${name}`}></use>
    </svg>
  );
};

export default IconUI;
