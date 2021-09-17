export const sidebarData = [
  {
    id: 1, name: "Reports", childData: [
      { id: 1, name: "Consolidation Report" },
      { id: 2, name: "General Journal" },
      { id: 3, name: "Reporting Pack (RP)" },
    ]
  },
  {
    id: 2,
    name: "Audit",
    childData: [
      {
        id: 1,
        name: "Log Activity Admin",
        subChildData: [
          { id: 1, name: "sub child 1" },
          { id: 2, name: "sub child 2" },
        ],
      },
      { id: 2, name: "Log Activity" },
    ],
  },
  {
    id: 3,
    name: "Accounts",
    childData: [
      {
        id: 1, name: "Adjustment Journel", subChildData: [
          { id: 1, name: "sub child 1" },
          { id: 2, name: "sub child 2" },
        ],
      },
      { id: 2, name: "Journel 2" },
    ],
  },
  {
    id: 4,
    name: "Security",
    childData: [
      {
        id: 1, name: "Menu Role Management", subChildData: [
          { id: 1, name: "sub child 1" },
          { id: 2, name: "sub child 2" },
        ],
      },
      { id: 2, name: "Menu Management" },
      {
        id: 3, name: "Role Management", subChildData: [
          { id: 1, name: "sub child 1" },
          { id: 2, name: "sub child 2" },
        ],
      },
      { id: 4, name: "User Management" },
    ],
  },
];
