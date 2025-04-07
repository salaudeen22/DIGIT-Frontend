import React from "react";
import { HeaderComponent, FormComposerV2 } from "@egovernments/digit-ui-components";
import { MycreateConfig } from "../../../configs/mycreateConfig/MycreateConfig";

const Mycreate = () => {
  const textStyles = {
    color: "#0B4B66",
    fontWeight: "700",
    fontSize: "32px",
    marginBottom: "1.5rem",
  };

  const defaultValues = {
    tenantId: "dev",
    
  };
  const onSubmit = (data) => {
    console.log("Data", data);
  };
  const onFormValueChange = (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
    console.log(formData, "formData");
  };

  return (
    <React.Fragment>
      <HeaderComponent styles={textStyles}>{"Birth Registration"}</HeaderComponent>

      <FormComposerV2
        label={"Register"}
        config={MycreateConfig.map((config) => {
          return {
            ...config,
            body: config.body,
          };
        })}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        onFormValueChange={onFormValueChange}
        labelfielddirectionvertical={true}
      />
    </React.Fragment>
  );
};

export default Mycreate;
