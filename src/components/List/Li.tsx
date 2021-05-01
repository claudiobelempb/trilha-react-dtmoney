import React  from "react";

interface ILi {
  children: React.ReactNode;
}
const Li: React.FC<ILi> = ({children}: ILi) => {
  return (
    <li>
      {children}
    </li>
  )
}

export { Li };