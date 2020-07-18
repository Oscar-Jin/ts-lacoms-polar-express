import React from "react";
import { auth } from "../../firebase/firestore";
import { useHistory } from "react-router-dom";
import { Path } from "../component/navigation/NavTools";

const LogoutPage = () => {
  const history = useHistory();

  auth.signOut();
  history.push(Path.login);

  return <div></div>;
};

export default LogoutPage;
