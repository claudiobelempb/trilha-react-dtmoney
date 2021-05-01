import React  from "react";

interface IUl {
  children: React.ReactNode;
}
const Ul: React.FC<IUl> = ({children}: IUl) => {
  return (
    <ul>
      { children }
    </ul>
  )
}

export { Ul };