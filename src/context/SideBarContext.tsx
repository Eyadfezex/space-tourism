import { createContext, ReactNode, useState } from "react";

export interface SideBarContextType {
  active: boolean;
  setActive: (active: boolean) => void;
}

const SideBarContext = createContext<SideBarContextType>({
  active: false,
  setActive: () => {},
});

const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(false);

  return (
    <SideBarContext.Provider value={{ active, setActive }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
