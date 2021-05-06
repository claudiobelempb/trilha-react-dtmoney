import React from "react";
import { BoxContainer } from "../../BoxContainer";
import { BoxContent } from "../../BoxContent";
import { Brand } from "../../Brand";
import { Button } from "../../Button";

const HeaderTop: React.FC = () => {
  return (
    <BoxContainer>
      <BoxContent aitems={"flex-start"} isp={true}>
        <Brand link={"/"} alt={"My Logo"} />
      </BoxContent>
      <BoxContent aitems={"flex-end"} isp={true}>
        <Button title={"Nova transação"} />
      </BoxContent>
    </BoxContainer>
  );
};

export { HeaderTop };
