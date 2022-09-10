const ConnectorTypeObj = {
  TYPE_A: 'Type A',
  TYPE_B: 'Type B',
  TYPE_MINI_A: 'Type Mini A',
  TYPE_MINI_B: 'Type Mini B',
  TYPE_MICRO_A: 'Type Micro A',
  TYPE_MICRO_B: 'Type Micro B',
  TYPE_MICRO_B_SUPERSPEED: 'Type Micro B SuperSpped',
  TYPE_C: 'Type C'
} as const;

export type ConnectorType = keyof typeof ConnectorTypeObj;
