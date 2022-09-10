const ConectorNameObj = {
  AC_ELECTRICAL: "AC Electrical Network",
  USB: 'USB'
} as const;

export type ConnectorName = keyof typeof ConectorNameObj;
