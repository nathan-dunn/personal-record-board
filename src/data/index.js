// data constants
export const M = 'MEN';
export const W = 'WOMEN';
export const SQ = 'SQUAT';
export const PR = 'PRESS';
export const BP = 'BENCH';
export const DL = 'DEADLIFT';

export const links = {
  website: 'https://www.hornstrength.com/',
  reddit: 'https://www.reddit.com/r/hornstrength/',
};

// data records
export const records = {
  lastUpdated: '10/12/23',
  MEN: { SQUAT: [], PRESS: [], BENCH: [], DEADLIFT: [] },
  WOMEN: { SQUAT: [], PRESS: [], BENCH: [], DEADLIFT: [] },
};

// data helpers
export const estimate1RM = (weight, reps) => {
  if (reps === 1) return Math.round(weight);
  return Math.round(weight * reps * 0.0333 + weight);
};

export const roundTo = (number, round = 5, direction) => {
  const dir =
    direction === 'up' || direction === 'ceil'
      ? 'ceil'
      : direction === 'down' || direction === 'floor'
      ? 'floor'
      : 'round';
  return Number(Math[dir](number / round) * round);
};

const addLifter = lifter => {
  const { NAME, BOARD } = lifter;

  records[BOARD][SQ].push([NAME, lifter.SQ[0], lifter.SQ[1]]);
  records[BOARD][PR].push([NAME, lifter.PR[0], lifter.PR[1]]);
  records[BOARD][BP].push([NAME, lifter.BP[0], lifter.BP[1]]);
  records[BOARD][DL].push([NAME, lifter.DL[0], lifter.DL[1]]);
};

const round = (n, r = 5) => {
  return Math.round(n / r) * r;
};

const rand = (min, max, shouldRound = true) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const raw = Math.floor(Math.random() * (max - min + 1)) + min;
  const rounded = round(raw);
  return shouldRound ? rounded : raw;
};

const avgMen = { SQ: 315, PR: 145, BP: 205, DL: 385 };
const avgWomen = { SQ: 175, PR: 75, BP: 125, DL: 200 };

const fill = obj => {
  const avgs = obj.BOARD === M ? avgMen : avgWomen;

  const low = 0.6;
  const high = 1.4;

  obj.SQ = [rand(avgs.SQ * low, avgs.SQ * high), rand(1, 5, false)];
  obj.PR = [rand(avgs.PR * low, avgs.PR * high), rand(1, 5, false)];
  obj.BP = [rand(avgs.BP * low, avgs.BP * high), rand(1, 5, false)];
  obj.DL = [rand(avgs.DL * low, avgs.DL * high), rand(1, 5, false)];

  return obj;
};

[
  { NAME: 'Andrew V.', BOARD: M },
  { NAME: 'Bill B.', BOARD: M },
  { NAME: 'Chris D.', BOARD: M },
  { NAME: 'Dan F.', BOARD: M },
  { NAME: 'David L.', BOARD: M },
  { NAME: 'James P.', BOARD: M },
  { NAME: 'John S.', BOARD: M },
  { NAME: 'Josh O.', BOARD: M },
  { NAME: 'Ken E.', BOARD: M },
  { NAME: 'Mark R.', BOARD: M },
  { NAME: 'Matt G.', BOARD: M },
  { NAME: 'Mike C.', BOARD: M },
  { NAME: 'Mike K.', BOARD: M },
  { NAME: 'Nate D.', BOARD: M },
  { NAME: 'Paul W.', BOARD: M },
  { NAME: 'Rich M.', BOARD: M },
  { NAME: 'Rob H.', BOARD: M },
  { NAME: 'Steve N.', BOARD: M },
  { NAME: 'Tom A.', BOARD: M },
  { NAME: 'Tony J.', BOARD: M },

  { NAME: 'Ashley Y.', BOARD: W },
  { NAME: 'Becca D.', BOARD: W },
  { NAME: 'Betty T.', BOARD: W },
  { NAME: 'Emily N.', BOARD: W },
  { NAME: 'Jen L.', BOARD: W },
  { NAME: 'Jess G.', BOARD: W },
  { NAME: 'Karen B.', BOARD: W },
  { NAME: 'Kim E.', BOARD: W },
  { NAME: 'Linda K.', BOARD: W },
  { NAME: 'Lisa D.', BOARD: W },
  { NAME: 'Liz S.', BOARD: W },
  { NAME: 'Lucy H.', BOARD: W },
  { NAME: 'Maggie R.', BOARD: W },
  { NAME: 'Mary P.', BOARD: W },
  { NAME: 'Michelle O.', BOARD: W },
  { NAME: 'Missy A.', BOARD: W },
  { NAME: 'Nancy C.', BOARD: W },
  { NAME: 'Sandra F.', BOARD: W },
  { NAME: 'Sarah W.', BOARD: W },
  { NAME: 'Susan M.', BOARD: W },
]
  .map(fill)
  .forEach(addLifter);

// data entries
// addLifter('Mike M', M, SQ, roundTo(515), 1);
// addLifter('Marc S', M, SQ, roundTo(405), 5);
// addLifter('Rene', M, SQ, roundTo(405), 1);
// addLifter('Mostafa', M, SQ, roundTo(375), 3);
// addLifter('Anup K', M, SQ, roundTo(350), 5);
// addLifter('Philip A', M, SQ, roundTo(350), 3);
// addLifter('Nick', M, SQ, roundTo(330), 5);
// addLifter('Alex F', M, SQ, roundTo(330), 5);
// addLifter('George M', M, SQ, roundTo(325), 5);
// addLifter('Cesar', M, SQ, roundTo(322), 5);
// addLifter('Bob', M, SQ, roundTo(135), 5);

// addLifter('Mike M', M, PR, roundTo(515 * 0.5), 1);
// addLifter('Marc S', M, PR, roundTo(405 * 0.5), 5);
// addLifter('Rene', M, PR, roundTo(405 * 0.5), 1);
// addLifter('Mostafa', M, PR, roundTo(375 * 0.5), 3);
// addLifter('Anup K', M, PR, roundTo(350 * 0.5), 5);
// addLifter('Philip A', M, PR, roundTo(350 * 0.5), 3);
// addLifter('Nick', M, PR, roundTo(330 * 0.5), 5);
// addLifter('Alex F', M, PR, roundTo(330 * 0.5), 5);
// addLifter('George M', M, PR, roundTo(325 * 0.5), 5);
// addLifter('Cesar', M, PR, roundTo(322 * 0.5), 5);
// addLifter('Bob', M, PR, roundTo(135 * 0.5), 5);

// addLifter('Mike M', M, BP, roundTo(402 * 0.7), 1);
// addLifter('Marc S', M, BP, roundTo(405 * 0.7), 5);
// addLifter('Rene', M, BP, roundTo(405 * 0.7), 1);
// addLifter('Mostafa', M, BP, roundTo(355 * 0.7), 3);
// addLifter('Anup K', M, BP, roundTo(350 * 0.7), 5);
// addLifter('Philip A', M, BP, roundTo(345 * 0.7), 3);
// addLifter('Nick', M, BP, roundTo(305 * 0.7), 5);
// addLifter('Alex F', M, BP, roundTo(335 * 0.7), 5);
// addLifter('George M', M, BP, roundTo(335 * 0.7), 5);
// addLifter('Cesar', M, BP, roundTo(222 * 0.7), 5);
// addLifter('Bob', M, BP, roundTo(155 * 0.7), 5);

// addLifter('Mike M', M, DL, roundTo(515 * 1.2), 1);
// addLifter('Marc S', M, DL, roundTo(405 * 1.2), 5);
// addLifter('Rene', M, DL, roundTo(405 * 1.2), 1);
// addLifter('Mostafa', M, DL, roundTo(375 * 1.2), 3);
// addLifter('Anup K', M, DL, roundTo(350 * 1.2), 5);
// addLifter('Philip A', M, DL, roundTo(350 * 1.2), 3);
// addLifter('Nick', M, DL, roundTo(330 * 1.2), 5);
// addLifter('Alex F', M, DL, roundTo(330 * 1.2), 5);
// addLifter('George M', M, DL, roundTo(325 * 1.2), 5);
// addLifter('Cesar', M, DL, roundTo(322 * 1.2), 5);
// addLifter('Bob', M, DL, roundTo(135 * 1.2), 5);

// ////

// addLifter('Mary M', W, SQ, roundTo(515 * 0.8), 1);
// addLifter('Missy S', W, SQ, roundTo(405 * 0.8), 5);
// addLifter('Rene', W, SQ, roundTo(405 * 0.8), 1);
// addLifter('Maggie D', W, SQ, roundTo(375 * 0.8), 3);
// addLifter('Annui T', W, SQ, roundTo(350 * 0.8), 5);
// addLifter('April A', W, SQ, roundTo(350 * 0.8), 3);
// addLifter('Natalie', W, SQ, roundTo(330 * 0.8), 5);
// addLifter('Alex P', W, SQ, roundTo(330 * 0.8), 5);
// addLifter('Georgia P', W, SQ, roundTo(325 * 0.8), 5);
// addLifter('Julia', W, SQ, roundTo(322 * 0.8), 5);
// addLifter('Bonnie', W, SQ, roundTo(135 * 0.8), 5);

// addLifter('Mary M', W, PR, roundTo(515 * 0.5 * 0.8), 1);
// addLifter('Missy S', W, PR, roundTo(405 * 0.5 * 0.8), 5);
// addLifter('Rene', W, PR, roundTo(405 * 0.5 * 0.8), 1);
// addLifter('Maggie D', W, PR, roundTo(375 * 0.5 * 0.8), 3);
// addLifter('Annui T', W, PR, roundTo(350 * 0.5 * 0.8), 5);
// addLifter('April A', W, PR, roundTo(350 * 0.5 * 0.8), 3);
// addLifter('Natalie', W, PR, roundTo(330 * 0.5 * 0.8), 5);
// addLifter('Alex P', W, PR, roundTo(330 * 0.5 * 0.8), 5);
// addLifter('Georgia P', W, PR, roundTo(325 * 0.5 * 0.8), 5);
// addLifter('Julia', W, PR, roundTo(322 * 0, 0.5 * 0.8), 5);
// addLifter('Bonnie', W, PR, roundTo(135 * 0.5 * 0.8), 5);

// addLifter('Mary M', W, BP, roundTo(515 * 0.7 * 0.8), 1);
// addLifter('Missy S', W, BP, roundTo(405 * 0.7 * 0.8), 5);
// addLifter('Rene', W, BP, roundTo(405 * 0.7 * 0.8), 1);
// addLifter('Maggie D', W, BP, roundTo(375 * 0.7 * 0.8), 3);
// addLifter('Annui T', W, BP, roundTo(350 * 0.7 * 0.8), 5);
// addLifter('April A', W, BP, roundTo(350 * 0.7 * 0.8), 3);
// addLifter('Natalie', W, BP, roundTo(330 * 0.7 * 0.8), 5);
// addLifter('Alex P', W, BP, roundTo(330 * 0.7 * 0.8), 5);
// addLifter('Georgia P', W, BP, roundTo(325 * 0.7 * 0.8), 5);
// addLifter('Julia', W, BP, roundTo(322 * 0.7 * 0.8), 5);
// addLifter('Bonnie', W, BP, roundTo(135 * 0.7 * 0.8), 5);

// addLifter('Mary M', W, DL, roundTo(515 * 1.2 * 0.8), 1);
// addLifter('Missy S', W, DL, roundTo(405 * 1.2 * 0.8), 5);
// addLifter('Rene', W, DL, roundTo(405 * 1.2 * 0.8), 1);
// addLifter('Maggie D', W, DL, roundTo(375 * 1.2 * 0.8), 3);
// addLifter('Annui T', W, DL, roundTo(350 * 1.2 * 0.8), 5);
// addLifter('April A', W, DL, roundTo(350 * 1.2 * 0.8), 3);
// addLifter('Natalie', W, DL, roundTo(330 * 1.2 * 0.8), 5);
// addLifter('Alex P', W, DL, roundTo(330 * 1.2 * 0.8), 5);
// addLifter('Georgia P', W, DL, roundTo(325 * 1.2 * 0.8), 5);
// addLifter('Julia', W, DL, roundTo(322 * 1.2 * 0.8), 5);
// addLifter('Bonnie', W, DL, roundTo(135 * 1.2 * 0.8), 5);
