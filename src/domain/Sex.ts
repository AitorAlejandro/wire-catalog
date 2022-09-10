const SexObj = {
  MALE: 'Male',
  FEMALE: 'Female'
} as const;

export type Sex = keyof typeof SexObj;
