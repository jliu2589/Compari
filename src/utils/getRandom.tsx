import React from "react";

const population = 10;

export const getRandom: (notThisOne?: number) => number = (notThisOne) => {
  const random = Math.ceil(Math.random() * population);

  if (random !== notThisOne) return random;
  return getRandom(notThisOne);
};

export const getOptions = () => {
  const a = getRandom();
  const b = getRandom(a);

  return [a, b];
};
