export const doubleNumbers = (dominos: number[][]): number => {
  let res: number = 0;
  dominos.forEach((item) => {
    if (item[0] === item[1]) {
      res++;
    }
  });
  return res;
};

export const sortAsc = (
  dominos: number[][],
  setDominos: (key: number[][]) => void
) => {
  dominos.sort((a, b) => {
    if (a[0] + a[1] - (b[0] + b[1]) === 0) {
      return a[0] - b[0];
    }
    return a[0] + a[1] - (b[0] + b[1]);
  });
  setDominos([...dominos]);
};

export const sortDesc = (
  dominos: number[][],
  setDominos: (key: number[][]) => void
) => {
  dominos.sort((a, b) => {
    if (b[0] + b[1] - (a[0] + a[1]) === 0) {
      return b[0] - a[0];
    }
    return b[0] + b[1] - (a[0] + a[1]);
  });
  setDominos([...dominos]);
};

export const flipValue = (
  dominos: number[][],
  setDominos: (key: number[][]) => void
) => {
  const res = dominos.map((item) => {
    return item.reverse();
  });
  setDominos([...res]);
};

export const removeDup = (
  dominos: number[][],
  setDominos: (key: number[][]) => void
) => {
  const idxDeleted: number[] = [];
  for (let i = 0; i < dominos.length; i++) {
    for (let j = i + 1; j < dominos.length; j++) {
      if (
        (dominos[i][0] === dominos[j][0] && dominos[i][1] === dominos[j][1]) ||
        (dominos[i][0] === dominos[j][1] && dominos[i][1] === dominos[j][0])
      ) {
        idxDeleted.push(i);
        idxDeleted.push(j);
      }
    }
  }
  [...new Set(idxDeleted)]
    .sort((a, b) => a - b)
    .forEach((item, idx) => {
      dominos.splice(item - idx, 1);
    });
  setDominos([...dominos]);
};

export const removeTotalNumber = (
  dominos: number[][],
  setDominos: (key: number[][]) => void,
  totalValue: number
) => {
  for (let i = 0; i < dominos.length; i++) {
    if (dominos[i][0] + dominos[i][1] === totalValue) {
      dominos.splice(i, 1);
      i--;
    }
  }
  setDominos([...dominos]);
};