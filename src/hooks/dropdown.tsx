import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useRef,
} from 'react';
import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';

const DropDownContext = createContext(null);

interface DropdownProps {
  children: ReactNode;
}

export function DropDownComponentProvider({children}: DropdownProps) {
  const ref = useRef<DropdownAlertType>(null);
  const contextValue = useMemo(
    () => ({
      ref,
    }),
    [],
  );
  return (
    <DropDownContext.Provider value={contextValue}>
      {children}
      <DropdownAlert ref={ref} />
    </DropDownContext.Provider>
  );
}

export const useDropDown = () => useContext(DropDownContext);
