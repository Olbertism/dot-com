export const orange = {
  twBgClassName: 'bg-orange',
  next: null,
  blogRightAlign: true,
};

export const blue = {
  twBgClassName: 'bg-blue',
  next: null,
  blogRightAlign: true,
};

export const green = {
  twBgClassName: 'bg-green',
  next: null,
  blogRightAlign: false,
};

orange.next = green;
blue.next = orange;
green.next = blue;
