import React from 'react'
import { ButtonWrapper } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

export default Button;
