import { createContext, useContext } from "react";

export const EasyModeContext = createContext(false);

export function useEasyMode() {
  return useContext(EasyModeContext);
}
