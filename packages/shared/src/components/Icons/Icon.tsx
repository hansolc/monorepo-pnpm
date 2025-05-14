import { IconBaseProps } from "@react-icons/all-files/lib";
import { MdAccessTime } from "@react-icons/all-files/md/MdAccessTime";
import { MdArrowBack } from "@react-icons/all-files/md/MdArrowBack";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";

export const IconObj = {
  MdAccessTime,
  MdArrowBack,
  MdMenu,
} as const;

interface IconProps extends IconBaseProps {
  iconName: keyof typeof IconObj;
}

const Icon = ({ iconName, ...rest }: IconProps) => {
  const IconJsxComponent = IconObj[iconName];
  return <IconJsxComponent {...rest} />;
};

export default Icon;
