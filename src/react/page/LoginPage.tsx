import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import {
  Container,
  Icon,
  Form,
  FormControl,
  ButtonToolbar,
  Button,
  Schema,
} from "rsuite";

import { auth } from "../../firebase/firestore";

const LogInForm = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
  background-color: white;
  margin: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  margin: 1rem 0rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.3rem;
`;

const Header = styled.h1`
  margin-top: 2rem;
  text-align: center;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
`;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const model = Schema.Model({
    email: Schema.Types.StringType()
      .isEmail("Please enter a valid email address.")
      .isRequired("This field is required."),
    password: Schema.Types.StringType().isRequired("This field is required."),
  });

  const handleLogin = (
    checkStatus: boolean,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    const Email = document.getElementById("email") as HTMLInputElement;
    const Password = document.getElementById("password") as HTMLInputElement;
    const Message = document.getElementById("message") as HTMLParagraphElement;
    const email = Email.value;
    const password = Password.value;

    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => setLoading(false))
      .catch(error => {
        Message.innerText = ("Error: " + error.code) as string;
        setLoading(false);
      });
  };

  return (
    <Container
      style={{ height: "100vh", padding: "1rem" }}
      className="blue-ocean"
    >
      <LogInForm>
        <FlexBox>
          <div>
            <Header>Login</Header>
            <Logo>
              <Icon icon="export" size="2x" style={iconStyles} />
              Polar Express
            </Logo>
            <Form model={model} fluid onSubmit={handleLogin}>
              <FormControl id="email" placeholder="email" />
              <br />
              <FormControl
                id="password"
                type="password"
                placeholder="password"
              />
              <br />
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  style={{ float: "right" }}
                  type="submit"
                  loading={loading}
                >
                  Login
                </Button>
              </ButtonToolbar>
              <p id="message" style={{ color: "salmon" }}></p>
            </Form>
          </div>
          <div style={{ textAlign: "center", color: "lightgray" }}>LACOMS</div>
        </FlexBox>
      </LogInForm>
    </Container>
  );
};

const iconStyles: React.CSSProperties = {
  marginRight: "0.3rem",
};

export default LoginPage;
