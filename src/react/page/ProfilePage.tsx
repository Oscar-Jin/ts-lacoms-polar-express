import React from "react";
import { Placeholder } from "rsuite";

const ProfilePage = () => {
  return (
    <div style={profilePageStyles}>
      <h1>Profile Page</h1>
      <p>まだ使えませんw（開発中）</p>
      <hr />
      <Placeholder.Paragraph
        graph="circle"
        rows={5}
        style={{ padding: "1rem", margin: "1rem" }}
        className="shadow-sm"
      />
      <Placeholder.Paragraph
        rows={5}
        style={{ padding: "1rem", margin: "1rem" }}
        className="shadow-sm"
      />
      <br />
      <br />
    </div>
  );
};

const profilePageStyles: React.CSSProperties = {
  padding: "1rem",
  overflow: "auto",
};

export default ProfilePage;
