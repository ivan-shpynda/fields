import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="title">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  )
}

export default Title;
