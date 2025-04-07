import { FormComposerV2, HeaderComponent, Toast } from "@egovernments/digit-ui-components";
import React, { useState } from "react";
import { Compliantconfig } from "../../../configs/compliantConfig/Compliantconfig";
import { extractJsonSchemaData, transformToMdmsFormat, p, parseJsonSchema, transformToFormConfig } from "../../../utils/createUtils";
import { useHistory } from "react-router-dom";
// import { config } from "../../../configs/SampleCreateConfig";

const Createcomplaint = () => {
  const [showToast, setShowToast] = useState(false);
  const schema = {
    type: "object",
    title: "Assignment.PGRAPPLY",
    $schema: "http://json-schema.org/draft-07/schema#",
    required: ["citizenMobileNumber", "citizenName", "complaintType", "complaintLocation", "config"],
    "x-unique": ["citizenMobileNumber"],
    properties: {
      config: {
        type: "object",
        required: ["isStepper", "isAddress"],
        properties: {
          isAddress: {
            type: "boolean",
          },
          isStepper: {
            type: "boolean",
          },
        },
        description: "Configuration options.",
      },
      citizenName: {
        type: "string",
        maxLength: 100,
        minLength: 5,
        description: "Citizen name must be between 5 and 100 characters.",
      },
      complaintType: {
        type: "array",
        items: {
          type: "object",
          required: ["code", "name"],
          properties: {
            code: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
        },
        minItems: 1,
        description: "List of complaint types with code and name.",
      },
      pictureUpload: {
        type: "object",
        properties: {
          type: {
            enum: ["documentUpload"],
            type: "string",
          },
        },
        description: "Picture upload field, type must be 'documentUpload'.",
      },
      complaintLocation: {
        type: "object",
        required: ["pincode", "city", "landmark", "address"],
        properties: {
          city: {
            type: "string",
          },
          address: {
            type: "string",
          },
          pincode: {
            type: "number",
          },
          landmark: {
            type: "string",
          },
        },
        description: "Details of the complaint location.",
      },
      citizenMobileNumber: {
        type: "number",
        pattern: "^\\d{10}$",
        description: "Citizen mobile number must be a 10-digit number.",
      },
    },
    additionalProperties: false,
  };


  //extract the schema into config
  // const configs=extractJsonSchemaData(schema,schema.required||[]);
  // const formConfig = transformToFormConfig(configs);
  // console.log("configs:", configs);

  //send the Api res to summary page
  const [res, setRes] = useState();

  // const formConfigs = Object.values(configs);
  // console.log("triiger");
  // console.log("form",formConfigs);

  const history = useHistory();

  // const tenantId = Digit.ULBService.getCurrentTenantId();

  
  const mutation = Digit.Hooks.useCustomAPIMutationHook({
    url: "/egov-mdms-service/v2/_create/Assignment.PGRAPPLY",
    params: {},
    body: {},
    config: {
      enabled: true,
    },
  });

  const onSubmit = async (data) => {
    await mutation.mutate(
      {
        url: "/egov-mdms-service/v2/_create/Assignment.PGRAPPLY",
        params: {},
        body: transformToMdmsFormat(data),
        config: {
          enabled: true,
        },
      },
      {
        onSuccess: (res) => {
          console.log("Success:", res);
          setRes(res);
          setShowToast({ key: "success", label: "Complaint Created Successfully" });
          
          history.push(`/${window?.contextPath}/employee/sample/summary`, { response: res });
        },
        onError: (err) => {
          console.error("Error:", err);

          setShowToast({ key: "error", label: "Complaint Creation Failed" });
        },
      }
    );
  };

  const onFormValueChange = (data) => {
    console.log(data);
  };

  const defaultValue = {};

  const style = {
    color: "#428ACA",
    fontWeight: "700",
    fontSize: "2vw",
    marginBottom: "1.5rem",
  };
  // console.log(formConfig);
  return (
    <React.Fragment>
    
      <HeaderComponent styles={style}>{"Create Complaint"}</HeaderComponent>

{/* //form Creation by passing the config */}
      <FormComposerV2
        label={"File Complaint"}
        description={"Submit your complaint by filling in personal, complaint, and location details."}
        defaultValue={{
          City: "",
          Address: "",
          Pincode: "",
          Landmark: "",
        }}
      
        config={Compliantconfig.map((compliant) => {
          return {
            ...compliant,
            body: compliant.body,
          };
        })}
        //configruation of extracted file 
        // config={formConfig}
        onSubmit={onSubmit}
        onFormValueChange={onFormValueChange}
      />

      //showing the success and error toast
      {showToast && (
        <Toast
          style={{ zIndex: 10001 }}
          label={showToast.label}
          type={showToast.key}
          error={showToast.key === "error"}
          onClose={() => setShowToast(null)}
        />
      )}
    </React.Fragment>
  );
};

export default Createcomplaint;
