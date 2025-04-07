import { HeaderComponent, SummaryCard, Tag } from "@egovernments/digit-ui-components";
import React from "react";
import { useLocation } from "react-router-dom";

function SummaryComplaint() {
  const location = useLocation();
  const { response } = location.state || {};
  const complaintData = response?.mdms?.[0]?.data;
  console.log(complaintData);


  const styles={
    color: "#428ACA",
    fontWeight: "700",
    fontSize: "30px",
    marginBottom: "1.5rem",
  };
  return (
    <React.Fragment>
      <HeaderComponent styles={styles}>{"Compliant Summary"}</HeaderComponent>

      <SummaryCard
        asSeperateCards
        className=""
        header="Heading"
        layout={1}
        sections={[
          {
            cardType: "primary",
            fieldPairs: [
              {
                inline: true,
                label: "Name",
                value: complaintData?.citizenName || "N/A",
              },
              {
                inline: true,
                label: "Mobile",
                value: complaintData?.citizenMobileNumber || "N/A",
              },
            ],
            header: "Citizen Info",
            subHeader: "Details of the complainant",
          },
          {
            cardType: "primary",
            fieldPairs: [
              {
                inline: true,
                label: "Complaint Type",
                value: complaintData?.complaintType?.[0]?.name || "N/A",
              },
              {
                inline: true,
                label: "City",
                value: complaintData?.complaintLocation?.city || "N/A",
              },
              {
                inline: true,
                label: "Address",
                value: complaintData?.complaintLocation?.address || "N/A",
              },
              {
                inline: true,
                label: "Pincode",
                value: complaintData?.complaintLocation?.pincode || "N/A",
              },
              {
                inline: true,
                label: "Landmark",
                value: complaintData?.complaintLocation?.landmark || "N/A",
              },
            ],
            header: "Complaint Details",
            subHeader: "Location & Type",
          },
          {
            header: "Config Details",
            fieldPairs: [
              {
                inline: true,
                label: "isAddress",
                value: complaintData?.config?.isAddress || "N/A",
              },
              {
                inline: true,
                label: "isStepper",
                value: complaintData?.config?.isStepper                || "N/A",
              },
            ],
          },
        ]}
        style={{}}
        subHeader="Subheading"
        type="primary"
      />
    </React.Fragment>
  );
}

export default SummaryComplaint;
