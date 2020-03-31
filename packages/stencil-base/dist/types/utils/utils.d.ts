import { Icon } from "../components/icon/icon";
export declare function format(first: string, middle: string, last: string): string;
export declare const getIconMap: () => Map<string, string>;
export declare const addIcons: (icons: {
    [name: string]: string;
}) => void;
export declare const getUrl: (i: Icon) => string;
export declare const getName: (iconName: string, icon: string, mode: string, ios: string, md: string) => string;
export declare const getSrc: (src: string) => string;
export declare const isSrc: (str: string) => boolean;
export declare const isStr: (val: any) => val is string;
export declare const toLower: (val: string) => string;
