import React, { useEffect, useState } from "react";
import { Button } from "@alfalab/core-components-button";
import { Input } from "@alfalab/core-components-input";
import { createCn } from "bem-react-classname";
import PageLayout from "../../components/PageLayout/PageLayout.jsx";
import Logo from "../../components/Logo/Logo.jsx";

import "./LogInPage.scss";
const rexExp = /^\w+@alfaleasing.ru$/;
const cn = createCn("login-page");

function LogInPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isTouchedInput, setIsTouchedInput] = useState(false);

  const validateEmail = (email) => {
    if (!rexExp.test(email)) {
      setError("Введи свою корпоративную почту");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleBlur = () => {
    validateEmail(email);
    setIsTouchedInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      console.log("сабмит");
    }

    setIsTouchedInput(true);
  };

  useEffect(() => {
    if(isTouchedInput) {
      validateEmail(email);
    }
  }, [email]);

  return (
    <PageLayout className={cn()}>
      <Logo type="full"/>
      <p className={cn("text")}>
        {"Введи корпоративную почту\nи крути "}
        <span className={cn("accent-text")}>колесо фортуны</span>
      </p>
      <form className={cn("form")} onSubmit={handleSubmit}>
        <Input
          className={cn("input")}
          placeholder="mail@alfaleasing.ru"
          block={true}
          size="m"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          error={error}
          onBlur={handleBlur}
          type='email'
        />
        <Button className={cn("btn")} view="primary" block={true} type="submit" size="m">
          Войти
        </Button>
      </form>
    </PageLayout>
  );
}

export default LogInPage;
