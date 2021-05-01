import React from "react";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";

import { LayoutGridCenter } from "../../Layouts/LayoutGridCenter";

const Signin: React.FC = () => {
  return (
    <LayoutGridCenter>
      <Container garea={"H"}>
        <h1>Header</h1>
      </Container>
      <Container garea={"M"}>
        <Title title={"Login"}/>
        <Form>
          <Input type="text" name="name" id="" placeholder={"name"} />
          <Input type="email" name="email" id="" />
          <Input type="password" name="password" id="" />
  
        </Form>
      </Container>
      <Container garea={"F"}>
        <h1>Footer</h1>
      </Container>
    </LayoutGridCenter>
  )
}

export { Signin };