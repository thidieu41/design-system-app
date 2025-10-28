import { createContext, useContext } from "react";
import { IColor, ISize, IVariantButton } from "../types/general.types";

interface ButtonProviderProps {
  dataProps?: {
    color?: IColor;
    variant?: IVariantButton;
    size?: ISize;
    disabled?: boolean;
  };
  children?: React.ReactNode;
}

type ButtonGroup = Pick<ButtonProviderProps, "dataProps">;

const ButtonContext = createContext<ButtonGroup | undefined>(undefined);

export const ButtonGroupProvider = (props: ButtonProviderProps) => {
  const { children, dataProps } = props;
  return (
    <ButtonContext.Provider value={{ dataProps }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonGroupContext = () => {
  const buttonContext = useContext(ButtonContext);
  if (!buttonContext)
    throw new Error("useButtonContext must be used within ButtonGroupContext");
  return buttonContext;
};
