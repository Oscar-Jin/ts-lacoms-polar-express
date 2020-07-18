import React from "react";
import { Icon } from "rsuite";

export const Path = {
  home: "/",
  login: "/login",
  logout: "/logout",
  profile: "/profile",
  schedule: "/schedule",
  settings: "/settings",
};

export const NavItems = [
  {
    title: "Schedule",
    icon: <Icon icon="calendar" />,
    eventKey: Path.schedule,
  },
  {
    title: "Profile",
    icon: <Icon icon="user-circle" />,
    eventKey: Path.profile,
  },
  {
    title: "Settings",
    icon: <Icon icon="gear-circle" />,
    eventKey: Path.settings,
  },
];
