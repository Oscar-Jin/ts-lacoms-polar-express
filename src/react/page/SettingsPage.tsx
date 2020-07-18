import React from "react";
import { Placeholder, Toggle } from "rsuite";

const SettingsPage = () => {
  return (
    <div style={settingsPageStyles}>
      <h1>Settings Page</h1>
      <p>これもまだ使えませんw（開発中）</p>
      <hr />
      <Placeholder.Paragraph
        style={{ padding: "1rem", margin: "1rem" }}
        className="shadow-sm"
      />
      <Placeholder.Paragraph
        style={{ padding: "1rem", margin: "1rem" }}
        className="shadow-sm"
      />
      <Placeholder.Paragraph
        style={{ padding: "1rem", margin: "1rem" }}
        className="shadow-sm"
      />
      <Toggle size="md" disabled />
    </div>
  );
};

export default SettingsPage;

const settingsPageStyles: React.CSSProperties = {
  padding: "1rem",
  overflow: "auto",
};
