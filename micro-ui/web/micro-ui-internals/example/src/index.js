import React from "react";
import ReactDOM from "react-dom";

import { initLibraries } from "@egovernments/digit-ui-libraries";
// import { paymentConfigs, PaymentLinks, PaymentModule } from "@egovernments/digit-ui-module-common";
import { DigitUI } from "@egovernments/digit-ui-module-core";
import "@egovernments/digit-ui-sample-css/example/index.css";

import { pgrCustomizations } from "./pgr";
import { UICustomizations } from "./UICustomizations";
import { initUtilitiesComponents } from "@egovernments/digit-ui-module-utilities";
import { initSampleComponents } from "@egovernments/digit-ui-module-sample";

var Digit = window.Digit || {};

const enabledModules = [
  "DSS",
  "HRMS",
  "Workbench",
  "HCMWORKBENCH",
  // "BirthCard",
  //  "Engagement", "NDSS","QuickPayLinks", "Payment",
  "Utilities",
  "Microplanning",
  "Sample",
  //added to check fsm
  // "FSM"
];

const initTokens = (stateCode) => {
  //check whether which type of user it is ?
  const userType = window.sessionStorage.getItem("userType") || process.env.REACT_APP_USER_TYPE || "CITIZEN";
  //check for token from env
  const token = window.localStorage.getItem("token") || process.env[`REACT_APP_${userType}_TOKEN`];

  const citizenInfo = window.localStorage.getItem("Citizen.user-info");

  const citizenTenantId = window.localStorage.getItem("Citizen.tenant-id") || stateCode;

  const employeeInfo = window.localStorage.getItem("Employee.user-info");
  const employeeTenantId = window.localStorage.getItem("Employee.tenant-id");

  const userTypeInfo = userType === "CITIZEN" || userType === "QACT" ? "citizen" : "employee";
  window.Digit.SessionStorage.set("user_type", userTypeInfo);
  window.Digit.SessionStorage.set("userType", userTypeInfo);

  if (userType !== "CITIZEN") {
    window.Digit.SessionStorage.set("User", { access_token: token, info: userType !== "CITIZEN" ? JSON.parse(employeeInfo) : citizenInfo });
  } else {
    // if (!window.Digit.SessionStorage.get("User")?.extraRoleInfo) window.Digit.SessionStorage.set("User", { access_token: token, info: citizenInfo });
  }

  window.Digit.SessionStorage.set("Citizen.tenantId", citizenTenantId);

  if (employeeTenantId && employeeTenantId.length) window.Digit.SessionStorage.set("Employee.tenantId", employeeTenantId);
};

const initDigitUI = () => {
  // append to base url with "digit-ui"
  window.contextPath = window?.globalConfigs?.getConfig("CONTEXT_PATH") || "digit-ui";

  //set Gobally the PGR ui data and ui style to whole app
  window.Digit.Customizations = {
    PGR: pgrCustomizations,
    commonUiConfig: UICustomizations,
  };
  // Initialize any additional custom components or configurations here
  // This is where you can add custom logic or setup for the application
  window?.Digit.ComponentRegistryService.setupRegistry({
    // PaymentModule,
    // ...paymentConfigs,
    // PaymentLinks,
  });

  initUtilitiesComponents();

  ///Users/salaudeenn/Documents/egov2/frontend/DIGIT-UI-LIBRARIES/react/modules/sample/src/Module.js
  //Registring the sampleModule and sample Card to the dom this sample module render the EmployeeApp with takes statuscode,usertype,tenats
  // sample card render employee card from /Users/salaudeenn/Documents/egov2/frontend/DIGIT-UI-LIBRARIES/react/modules/sample/src/components/SampleCard.js
  initSampleComponents();

  //check what is this
  const moduleReducers = (initData) => initData;

  //take the status Code

  const stateCode = window?.globalConfigs?.getConfig("STATE_LEVEL_TENANT_ID") || "pb";

  //setting tokrn and statuscode from and to session storagr
  initTokens(stateCode);

  ReactDOM.render(
    <DigitUI stateCode={stateCode} enabledModules={enabledModules} defaultLanding="employee" moduleReducers={moduleReducers} />,
    document.getElementById("root")
  );
};

initLibraries().then(() => {
  initDigitUI();
});
