declare module "*.svg" {
    import { SvgProps } from "react-native-svg/src";
    const content: React.FC<SvgProps>;
    export default content;
}