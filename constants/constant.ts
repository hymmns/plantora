export enum TabRoutes {
  Home = "index",
  History = "history",
  Diagnostics = "diagnostics",
}

export enum TabPaths {
  Home = "/",
  History = "/history",
  Diagnostics = "/diagnostics",
}

export enum TabLabels {
  Home = "Home",
  History = "History",
  Diagnostics = "Diagnostics",
}

export const bottomTabs = [
  {
    label: TabLabels.Home,
    route: TabRoutes.Home,
    path: TabPaths.Home,
    icon: "sprout",
  },
  {
    label: TabLabels.History,
    route: TabRoutes.History,
    path: TabPaths.History,
    icon: "history",
  },
  {
    label: TabLabels.Diagnostics,
    route: TabRoutes.Diagnostics,
    path: TabPaths.Diagnostics,
    icon: "clipboard-pulse-outline",
  },
];
