import React from "react";
import { Button } from "@alfalab/core-components-button";
import { Input } from "@alfalab/core-components-input";
import { createCn } from 'bem-react-classname';
import PageLayout from "../../components/PageLayout/PageLayout.jsx";
import Logo from "../../components/Logo/Logo.jsx";

import "./LogInPage.scss";

const cn = createCn("login-page");

function LogInPage() {
  return (
    <PageLayout className={cn()}>
        <Logo />
        <p className={cn("text")}>
          <span className={cn("accent-text")}>Чтобы крутануть</span>
          {" колесо\nфортуны, введи свою\nкорпоративную почту"}
        </p>
        <form className={cn("form")}>
          <Input
            className={cn("input")}
            placeholder="mail@alfaleasing.ru"
            block={true}
            size="m"
          />
          <Button className={cn("btn")} view="primary" block={ true }>
            Войти
          </Button>
        </form>
    </PageLayout>
  );
}

export default LogInPage;
