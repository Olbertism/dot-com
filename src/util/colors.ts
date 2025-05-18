export const orange: orange = {
  twBgClassName: 'bg-orange',
  next: null,
  blogRightAlign: true,
};

export const blue: blue = {
  twBgClassName: 'bg-blue',
  next: null,
  blogRightAlign: true,
};

export const green: green = {
  twBgClassName: 'bg-green',
  next: null,
  blogRightAlign: false,
};

orange.next = green;
blue.next = orange;
green.next = blue;

type orange = {
  twBgClassName: 'bg-orange';
  next: null | green;
  blogRightAlign: boolean;
};

type green = {
  twBgClassName: 'bg-green';
  next: null | blue;
  blogRightAlign: boolean;
};

type blue = {
  twBgClassName: 'bg-blue';
  next: null | orange;
  blogRightAlign: true;
};

export type layoutColor = orange | blue | green;
