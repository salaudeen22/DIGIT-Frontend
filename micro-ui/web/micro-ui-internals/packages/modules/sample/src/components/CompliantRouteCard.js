import { EmployeeModuleCard } from '@egovernments/digit-ui-react-components';
import React from 'react'

function CompliantRouteCard() {
  const propsForModuleCard = {
    Icon: "CreateEstimateIcon",
    moduleName: t("Compliant"),
    kpis: [],
    links: [
      {
        label: t("File Compliant"),
        link: `/${window?.contextPath}/sample/createcomplaint`,
      },
    ],
  };
  return (
   <EmployeeModuleCard {...propsForModuleCard}/>
   
  )
}

export default CompliantRouteCard