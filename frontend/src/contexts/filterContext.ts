import { createContext } from "react";

type filterContextType = {
    filter: Array<string>;
    setFilter: (posts: Array<string>) => void;
}

export const filterContext = createContext<filterContextType | null>(null)