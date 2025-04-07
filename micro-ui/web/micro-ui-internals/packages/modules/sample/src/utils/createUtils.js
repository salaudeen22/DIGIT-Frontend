export const transformIndividualCreateData = (data) => {
  return {
    Individual: {
      tenantId: "pg.citya",
      name: {
        givenName: data.applicantname,
      },
      dateOfBirth: null,
      gender: data?.genders?.code,
      mobileNumber: data.phno,
      address: [
        {
          tenantId: "pg.citya",
          pincode: data.pincode,
          city: data.city,
          street: data.street,
          doorNo: data.doorno,
          locality: {
            code: data?.locality?.code || "SUN01",
          },
          landmark: data.landmark,
          type: "PERMANENT",
        },
      ],
      identifiers: null,
      skills: [
        {
          type: "DRIVING",
          level: "UNSKILLED",
        },
      ],
      photograph: null,
      additionalFields: {
        fields: [
          ...data?.additionalDetails,
          {
            key: "EMPLOYER",
            value: "ULB",
          },
        ],
      },
      isSystemUser: null,
      userDetails: {
        username: "8821243212",
        tenantId: "pg.citya",
        roles: [
          {
            code: "SANITATION_WORKER",
            tenantId: "pg.citya",
          },
        ],
        type: "CITIZEN",
      },
    },
  };
};

export const transformHRMSCreateData = (data) => {
  return {
    Employees: [
      {
        // "id": 9603,
        // "uuid": "52047dac-f39e-48f7-9cc1-06d1481c65a6",
        // "code": "Test_L2",
        employeeStatus: "EMPLOYED",
        employeeType: "PERMANENT",
        dateOfAppointment: 1704067200000,
        jurisdictions: [
          {
            // "id": "65718bab-5f8f-4ab5-a16d-42a3b138d110",
            hierarchy: "ADMIN",
            boundary: "pg.amhara",
            boundaryType: "City",
            tenantId: "pg.amhara",
            // "auditDetails": {
            //     "createdBy": "c16de636-688b-4b42-a123-2d3aaa27bdd8",
            //     "createdDate": 1737530732383,
            //     "lastModifiedBy": null,
            //     "lastModifiedDate": 0
            // },
            isActive: true,
          },
        ],
        assignments: [
          {
            // "id": "8e6a3113-fd4c-4b86-81ac-a826d8e604fe",
            position: 6629,
            designation: "AO",
            department: "DEPT_13",
            fromDate: 1735689600000,
            toDate: null,
            govtOrderNumber: null,
            tenantid: "pg.amhara",
            reportingTo: null,
            // "auditDetails": {
            //     "createdBy": "c16de636-688b-4b42-a123-2d3aaa27bdd8",
            //     "createdDate": 1737530732383,
            //     "lastModifiedBy": null,
            //     "lastModifiedDate": 0
            // },
            isHOD: false,
            isCurrentAssignment: true,
          },
        ],
        serviceHistory: [],
        education: [],
        tests: [],
        tenantId: "pg.amhara",
        documents: [],
        deactivationDetails: [],
        reactivationDetails: [],
        // "auditDetails": {
        //     "createdBy": "c16de636-688b-4b42-a123-2d3aaa27bdd8",
        //     "createdDate": 1737530732383,
        //     "lastModifiedBy": null,
        //     "lastModifiedDate": 0
        // },
        reActivateEmployee: false,
        user: {
          // "id": 9603,
          // "uuid": "52047dac-f39e-48f7-9cc1-06d1481c65a6",
          // "userName": "Test_L2",
          password: null,
          salutation: null,
          name: data.applicantname,
          gender: data?.genders?.code,
          mobileNumber: data.phno,
          emailId: "yunuomerdin@gmail.com",
          altContactNumber: null,
          pan: null,
          aadhaarNumber: null,
          permanentAddress: null,
          permanentCity: null,
          permanentPinCode: null,
          correspondenceCity: null,
          correspondencePinCode: null,
          correspondenceAddress: "Ethiopia",
          active: true,
          dob: 946665000000,
          pwdExpiryDate: 1745306732000,
          locale: null,
          type: "EMPLOYEE",
          signature: null,
          accountLocked: false,
          roles: [
            {
              name: "Employee",
              code: "EMPLOYEE",
              description: null,
              tenantId: "pg.amhara",
            },
          ],
          fatherOrHusbandName: null,
          relationship: null,
          bloodGroup: null,
          identificationMark: null,
          photo: null,
          createdBy: "8829",
          createdDate: 1737530732000,
          // "lastModifiedBy": "8829",
          // "lastModifiedDate": 1737816918000,
          otpReference: null,
          tenantId: "pg.amhara",
        },
        isActive: true,
      },
    ],
  };
};
export const transformToMdmsFormat = (data) => {
  return {
    Mdms: {
      tenantId: "dev", // or dynamic if available
      schemaCode: "Assignment.PGRAPPLY",
      uniqueIdentifier: null,
      data: {
        config: {
          isAddress: data["checkbox-isAddress"] || false,
          isStepper: data["checkbox-isStepper"] || false,
        },
        complaintType: data.complaintType.map((type) => ({
          code: type.code,
          name: type.name,
        })),
        complaintLocation: {
          city: data.City,
          address: data.Address,
          pincode: Number(data.Pincode),
          landmark: data.landmark,
        },
        citizenName: data.citizenName,
        citizenMobileNumber: Number(data.citizenMobileNumber),
        //   pictureUpload: {
        //     type: "documentUpload",
        //   },
      },
      isActive: true,
    },
    RequestInfo: {
      apiId: "Rainmaker",
      authToken: "b45d4ac9-7454-4e62-a508-540ddf880b77", // dynamically get this in real apps
      userInfo: {
        id: 10543,
        uuid: "8a32a4ea-dc0b-465d-b45a-95577475b45d",
        userName: "MICROPLAN_ADMIN_DEV",
        name: "User Dev",
        mobileNumber: "7222611899",
        type: "EMPLOYEE",
        roles: [
          {
            name: "Microplan Campaign integrator",
            code: "MICROPLAN_CAMPAIGN_INTEGRATOR",
            tenantId: "dev",
          },
          {
            name: "System Administrator",
            code: "SYSTEM_ADMINISTRATOR",
            tenantId: "dev",
          },
          {
            name: "Campaign Managers",
            code: "CAMPAIGN_MANAGER",
            tenantId: "dev",
          },
          {
            name: "Boundary Manager",
            code: "BOUNDARY_MANAGER",
            tenantId: "dev",
          },
          {
            name: "Localisation admin",
            code: "LOC_ADMIN",
            tenantId: "dev",
          },
          {
            name: "Campaign Admin",
            code: "CAMPAIGN_ADMIN",
            tenantId: "dev",
          },
          {
            name: "Microplan Admin",
            code: "MICROPLAN_ADMIN",
            tenantId: "dev",
          },
          {
            name: "MDMS ADMIN",
            code: "MDMS_ADMIN",
            tenantId: "dev",
          },
          {
            name: "HRMS Admin",
            code: "HRMS_ADMIN",
            tenantId: "dev",
          },
        ],
        active: true,
        tenantId: "dev",
      },
      msgId: `${Date.now()}|en_IN`,
      plainAccessRequest: {},
    },
  };
};
//extracting the schema to json
export function extractJsonSchemaData(schema, requiredFields = [], path = '') {
  if (!schema || schema.type !== 'object' || !schema.properties) {
    throw new Error("Invalid or unsupported JSON schema");
  }

  const result = {};

  for (const [key, value] of Object.entries(schema.properties)) {
    const fullPath = path ? `${path}.${key}` : key;
    const isRequired = requiredFields.includes(key);

    result[fullPath] = {
      type: value.type || 'unknown',
      required: isRequired,
      description: value.description || ''
    };

    // Nested objects
    if (value.type === 'object' && value.properties) {
      const nestedRequired = value.required || [];
      const nested = extractJsonSchemaData(value, nestedRequired, fullPath);
      Object.assign(result, nested);
    }

    // Arrays of objects
    if (value.type === 'array' && value.items?.type === 'object' && value.items.properties) {
      const nestedRequired = value.items.required || [];
      const nested = extractJsonSchemaData(value.items, nestedRequired, `${fullPath}[]`);
      Object.assign(result, nested);
    }
  }

  return result;
}

//converting the flatconfigs to formconfig
export function transformToFormConfig(flatConfigs) {
  const grouped = {};

  for (const [key, value] of Object.entries(flatConfigs)) {
    const pathSegments = key.split(".");
    const groupKey = pathSegments[0]; // e.g., 'citizenName', 'complaintLocation', etc.

    if (!grouped[groupKey]) grouped[groupKey] = [];

    const label = pathSegments
      .slice(1)
      .join(" ")
      .replaceAll("[].", " ")
      .replaceAll(".", " ") || groupKey;

    grouped[groupKey].push({
      label: label
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase()),
      type: value.type === "number" ? "number" : "text",
      isMandatory: value.required || false,
      description: value.description || "",
      populators: {
        name: key,
      },
    });
  }

  return Object.entries(grouped).map(([groupKey, body]) => ({
    head: groupKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase()),
    body,
  }));
}
