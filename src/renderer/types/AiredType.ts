export type AiredDateType = {
  day: number;
  month: number;
  year: number;
};

export type AiredPropType = {
  from: AiredDateType;
  to: AiredDateType;
  string: string;
};

export type AiredType = {
  from: string;
  to: string;
  prop: AiredPropType;
};

export const nullAiredDateType = {
  day: 0,
  month: 0,
  year: 0,
};

export const nullAiredPropType = {
  from: nullAiredDateType,
  to: nullAiredDateType,
  string: '',
};

export const nullAiredType = {
  from: '',
  to: '',
  prop: nullAiredPropType,
};
