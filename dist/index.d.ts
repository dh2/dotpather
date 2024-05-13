type PathType = {
    [key: string]: any;
};
export default function dotpath(str: string): (obj: PathType) => PathType | undefined;
export {};
