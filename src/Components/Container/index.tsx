import { SContainer } from "./style"
import { ReactNode } from "react";
interface ContainerProps {
    children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <SContainer>{children}</SContainer>
  )
}

export default Container