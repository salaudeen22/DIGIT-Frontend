import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const BirthCard = () => {
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: "Tata",
    moduleName: t("BirthRegister"),
    kpis: [],
    links: [
      {
        label: t("Birth Create"),
        link: `/${window?.contextPath}/employee/sample/mycreate`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default BirthCard;
