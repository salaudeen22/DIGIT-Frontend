export const Compliantconfig = [
  {
    head: "Citizen Details",

    body: [
      {
        inline: true,
        label: "Citizen Name",
        type: "text",
        isMandatory: true,
        placeholder: "Enter The Citizen Name",
        populators: {
          name: "citizenName",
          error: "Citizen Name is Required!",
          validation: { minLength: 5, maxLength: 100, pattern: /^[A-Za-z]+$/i },
        },
      },
      {
        inline: "true",
        label: "Citizen Mobile Number",
        type: "mobileNumber",
        isMandatory: true,
        placeholder: "Enter The Citizen Mobile Number ",
        populators: {
          name: "citizenMobileNumber",
          error: "Citizen Mobile Number must be 10 digits!",
          validation: {
            pattern: /^[0-9]{10}$/,
          },
        },
      },
    ],
  },
  {
    head: "Complaint Details",

    body: [
      {
        isMandatory: false,
        key: "Complaintcard",
        type: "component", // Custom component rendering
        component: "Complaintcard", // Here write you component name
        withoutLabel: true,
        disable: false,
        customProps: {}, // here you can send any props to your component
        populators: { name: "complaintType", required: true },
      },
    ],
  },
  {
    head: "Complaint Location",
    body: [
      {
        inline: true,
        type: "text",
        label: "City",
        isMandatory: true,
        populators: {
          name: "City",
          error: "City is Required",
        },
      },
      {
        inline: "true",
        label: "Address",
        type: "textarea",
        isMandatory: true,
        validation: { pattern: /^[A-Za-z]+$/i },
        populators: {
          name: "Address",
          error: "Address is Required",
        },
      },
      {
        inline: "true",
        label: "Pincode",
        type: "number",
        isMandatory: true,
        populators: {
          name: "Pincode",
          error: "Pincode is Required",
        },
      },
      {
        inline: "true",
        label: "Landmark",
        type: "text",
        isMandatory: true,
        populators: {
          name: "landmark",
          error: "Landmark is Required",
        },
      },
    ],
  },
  {
    config:{
      "isStepper": true
    }
  }
  // {
  //   head: "Configuration Options",
  //   body: [
  //     {
  //       inline: false,
  //       isMandatory: false,
  //       type: "checkbox",
  //       disable: false,
  //       withoutLabel: true,
  //       populators: {
  //         name: "checkbox-isAddress",
  //         error: "Error!",
  //         title: "Is Address Required?",
  //       },
  //     },
  //     {
  //       inline: false,
  //       isMandatory: false,
  //       type: "checkbox",
  //       disable: false,
  //       withoutLabel: true,
  //       populators: {
  //         name: "checkbox-isStepper",
  //         error: "Error!",
  //         title: "Use Stepper Navigation?",
  //       },
  //     },
  //   ],
  // },
  // {
  //   head: "File Upload",
  //   body: [
  //     {
  //       inline: true,
  //       type: "component",
  //       component: "ImageUpload",
  //       label: "Upload Picture",
  //       populators: {
  //         name: "pictureUpload",
  //         error: "Error!",
  //         onUpload: (fileStoreId) => {
  //           console.log("Uploaded file store ID:", fileStoreId);
  //         },
  //       },
  //     },
  //   ],
  // },
];
