import { Button, LabelFieldPair, TextInput, CustomSVG, Card, HeaderComponent } from "@egovernments/digit-ui-components";
import React, { useEffect, useState , Fragment} from "react";
import { useTranslation } from "react-i18next";

const Complaintcard = ({ onSelect }) => {
  const { t } = useTranslation();
  console.log("Complaint Details section rendered");

  const [complaintData, setComplaintData] = useState([
    {
      key: 1,
      code: "",
      name: "",
    },
  ]);

  const handleUpdateField = ({ field, value, item }) => {


    setComplaintData((prev) =>
      prev.map((i) => (i.key === item.key ? { ...i, [field]: value } : i))
    );
  };

  const addComplaint = () => {
    setComplaintData((prev) => [
      ...prev,
      {
        key: prev.length + 1,
        code: "",
        name: "",
      },
    ]);
  };

  const deleteComplaint = (data) => {
    const updatedData = complaintData.filter((i) => i.key !== data.key);
    setComplaintData(updatedData.map((item, index) => ({ ...item, key: index + 1 })));
  };

  useEffect(() => {
    onSelect("complaintType", complaintData);
  }, [complaintData]);

  return (
    <>
      {complaintData.map((item) => (
        <Card key={item.key} type="secondary" style={{ marginBottom: "1.5rem", gap: "1.5rem" }}>
          {complaintData.length > 1 && (
            <div className="delete-resource-icon" style={{ textAlign: "right" }} onClick={() => deleteComplaint(item)}>
              <CustomSVG.DustbinIcon />
            </div>
          )}
          <LabelFieldPair removeMargin={true}>
            <HeaderComponent className="label">
              <div className="label-container">
                <label className="label-styles">{t("Complaint Code")}</label>
              </div>
            </HeaderComponent>
            <TextInput
              value={item.code}
              onChange={(event) => handleUpdateField({ field: "code", value: event.target.value, item })}
            />
          </LabelFieldPair>
          <LabelFieldPair removeMargin={true}>
            <HeaderComponent className="label">
              <div className="label-container">
                <label className="label-styles">{t("Complaint Name")}</label>
              </div>
            </HeaderComponent>
            <TextInput
              value={item.name}
              onChange={(event) => handleUpdateField({ field: "name", value: event.target.value, item })}
            />
          </LabelFieldPair>
        </Card>
      ))}
      <Button variation="secondary" label={t("Add more")} icon={"AddIconNew"} onClick={addComplaint} style={{ marginLeft: "auto" }} />
    </>
  );
};

export default Complaintcard;
