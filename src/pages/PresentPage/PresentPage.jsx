import React from "react";
import { createCn } from "bem-react-classname";
import { Link } from "@alfalab/core-components-link";
import Logo from "../../components/Logo/Logo.jsx";

import "./PresentPage.scss";
import PageLayout from "../../components/PageLayout/PageLayout.jsx";
import PRESENTS from "../../constants/presents.js";

const cn = createCn("present-page");

function PresentPage() {
  const present = "skyEng";

  const { label, img } = PRESENTS[present];
  const { name: nameSkyEng, link } = PRESENTS.skyEng;

  const renderFootnote = () => {
    switch (present) {
      case nameSkyEng:
        return (
          <p className={cn("footnote")}>
            {"Пройти обучение можно здесь "}
            <Link
              view="default"
              rel="noopener"
              target="_blank"
              href={ link }
            >
              здесь
            </Link>
          </p>
        );

      default:
        return (
          <p className={cn("footnote")}>
            {"Приходи за подарком\nв отдел кадров"}
          </p>
        );
    }
  };

  return (
    <PageLayout className={cn()}>
      <section className={cn("present-container")}>
        <img className={cn("img")} src={img} alt="img" />
        <h1
          className={cn("title")}
        >{`Поздравляем!\nТвой подарок —\n${label}`}</h1>
        {renderFootnote()}
        <Logo className={cn("logo")} size="s" />
      </section>
    </PageLayout>
  );
}

export default PresentPage;
