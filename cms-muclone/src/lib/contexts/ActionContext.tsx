"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface ButtonConfig {
  type: string;
  onClick: () => void;
}

interface ActionContextType {
  buttonsConfig: ButtonConfig[];
  setButtonsConfig: React.Dispatch<React.SetStateAction<ButtonConfig[]>>;
}

const ActionContext = createContext<ActionContextType | undefined>(undefined);

export const ActionProvider = ({ children }: { children: ReactNode }) => {
  const [buttonsConfig, setButtonsConfig] = useState<ButtonConfig[]>([]);

  return (
    <ActionContext.Provider value={{ buttonsConfig, setButtonsConfig }}>
      {children}
    </ActionContext.Provider>
  );
};

export const useRenderAction = (): ActionContextType => {
  const context = useContext(ActionContext);
  if (!context) {
    throw new Error("useAction must be used within a ActionProvider");
  }
  return context;
};
