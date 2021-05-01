import React  from "react";

import { Ul } from "./Ul";
import { Li } from "./Li"

interface IList {
  children: React.ReactNode;
}

const List: React.FC = () => {
  return (
    <Ul>
      <Li>
        <a href="/">Link</a>
      </Li>
      <Li>
        <a href="/">Link</a>
      </Li>
    </Ul>
  )
}

export { List };