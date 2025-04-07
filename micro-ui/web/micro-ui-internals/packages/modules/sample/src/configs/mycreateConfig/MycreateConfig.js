export const MycreateConfig = [
  {
    head: "Citizen Details",
    body: [
      {
        inline: true,
        label: "TenantId",
        isMandatory: false,
        type: "text",
        disable: true,

        placeholder: "Enter your baby name",
        populators: { name: "tenantId", error: "Error!" },
      },
      {
        inline: true,
        label: "Baby Fristname",
        placeholder: "enter the baby fristname..",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "text-babyfristname..", error: "Error!" },
      },
      {
        inline: true,
        label: "Baby Lastname",
        placeholder: "enter the baby lastname..",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "text-babylastname", error: "Error!" },
      },
      {
        inline: true,
        type: "date",
        label: "Date of Birth",
        isMandatory: true,

        populators: {
          name: "date-dob",
          error: "Error!",
        },
      },
      {
        inline: true,
        type: "time",
        label: "TIme of Birth",
        isMandatory: true,

        populators: {
          name: "date-dobtime",
          error: "Error!",
        },
      },
      {
        inline: true,
        type: "text",
        isMandatory: true,
        label: "Doctor Name",
        placeholder: "enter the doctor name",
        populators: {
          name: "text-doctorname",
          error: "Error!",
        },
      },
      {
        inline: true,
        type: "text",
        isMandatory: true,
        label: "Hospital Name",
        placeholder: "enter the hospital name..",
        populators: {
          name: "text-hospitalName",
          error: "Error!",
        },
      },
      {
        inline: true,
        type: "geolocation",
        isMandatory: true,
        label: "Place Of Birth ",
        placeholder: "enter the place of birth ..",
        populators: {
          name: "text-placeofbirth",
          error: "Error!",
        },
      },
    ],
  },
  {
    head: "Address",
    body: [
      {
        inline: true,
        isMandatory: true,
        label: "Address",
        type: "textarea",
        placeholder: "Enter the address",
        populators: {
          name: "text-address",
          error: "Error!",
        },
      },
    

   
      {
        isMandatory: false,
        type: "dropdown",
        key: "city",
        label: "city",
        disable: false,
        populators: {
          name: "dropdown-cities",
          optionsKey: "name",
          error: "",
          required: true,
          showIcon: true,
          options: [
            {
              code: "1",
              name: "Bangalore",
            },
            {
              code: "2",
              name: "Mangalore",
            },
            {
              code: "3",
              name: "Pune",
            },
          ],
        },
      },

      {
        inline: true,
        isMandatory: true,
        label: "Pincode",
        type: "number",
        min: 0,
        max: 4,
        placeholder: "Enter the Pincode",
        populators: {
          name: "text-pincode",
          error: "Error!",
        },
      },
    ],
  },
  {
    head: "Parent Details",
    body: [
      {
        inline: true,
        label: "Fathername",
        placeholder: "enter the Fathername..",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "text-Fathername", error: "Error!" },
      },
      {
        inline: true,
        label: "Mother name",
        placeholder: "enter the Mothername..",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "text-Mothername", error: "Error!" },
      },
      {
        inline: true,
        label: "Father Aadhaar number",
        placeholder: "enter the Fathername..",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: { name: "text-FatherAadhaar", error: "Error!",validation:{min:10,max:10} },
      },
      {
        inline: true,
        label: "Mother Aadhaar number",
        placeholder: "enter the Mother Aadhaar..",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: { name: "text-MotherAadhaar", error: "Error!" },
      },
    ],
  },
];
