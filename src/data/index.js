// data constants
export const M = 'MEN';
export const W = 'WOMEN';
export const SQ = 'SQUAT';
export const PR = 'PRESS';
export const BP = 'BENCH';
export const DL = 'DEADLIFT';

// data helpers
export const estimate1RM = (weight, reps) => {
  if (reps === 1) return weight;
  return Math.round(weight * reps * 0.0333 + weight);
};

const addLifter = (name, sex, liftName, weight, reps) => {
  records[sex][liftName].push([name, weight, reps]);
};

// data records
export const records = {
  lastUpdated: '',
  MEN: { SQUAT: [], PRESS: [], BENCH: [], DEADLIFT: [] },
  WOMEN: { SQUAT: [], PRESS: [], BENCH: [], DEADLIFT: [] },
};

// data calls
// addLifter('Adam', M, SQ, 315, 5);
// addLifter('Adam', M, PR, 135, 5);
// addLifter('Adam', M, BP, 225, 5);
// addLifter('Adam', M, DL, 405, 5);

// addLifter('Clyde', M, SQ, 225, 5);
// addLifter('Clyde', M, PR, 115, 5);
// addLifter('Clyde', M, BP, 185, 5);
// addLifter('Clyde', M, DL, 315, 5);

addLifter('Mike M', M, SQ, 515, 1);
addLifter('Marc S', M, SQ, 405, 5);
addLifter('Rene', M, SQ, 405, 1);
addLifter('Mostafa', M, SQ, 375, 3);
addLifter('Anup K', M, SQ, 350, 5);
addLifter('Philip A', M, SQ, 350, 3);
addLifter('Nick', M, SQ, 330, 5);
addLifter('Alex F', M, SQ, 330, 5);
addLifter('George M', M, SQ, 325, 5);
addLifter('Cesar', M, SQ, 322.5, 5);
addLifter('Bob', M, SQ, 135, 5);