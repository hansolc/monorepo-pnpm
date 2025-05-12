import { IconBaseProps } from "@react-icons/all-files/lib";
export declare const IconObj: {
    readonly MdAccessTime: import("@react-icons/all-files/lib").IconType;
};
interface IconProps extends IconBaseProps {
    iconName: keyof typeof IconObj;
}
declare const Icon: ({ iconName, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
export default Icon;
//# sourceMappingURL=Icon.d.ts.map