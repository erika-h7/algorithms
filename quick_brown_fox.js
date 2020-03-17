function quickBrownFoxIterative(array) {
  let solutions = [""];

  for (let i = 0; i < array.length; i++) {
    // inside outer array
    let newSolutions = [];
    for (let j = 0; j < array[i].length; j++) {
      // inside inner array
      for (let k = 0; k < solutions.length; k++) {
        const current = solutions[k];
        newSolutions.push(current + (current !== "" ? " " : "") + array[i][j]);
      }
    }
    solutions = newSolutions;
  }

  return solutions;
}

function quickBrownFoxRecursive(array, solutions = [], partial = "") {
  if (!array.length) {
    solutions.push(partial);
  } else {
    for (let i = 0; i < array[0].length; i++) {
      const word = array[0][i],
        sliced = array.slice(1);

      const newPartial = partial + (partial !== "" ? " " : "") + word;

      quickBrownFoxRecursive(sliced, solutions, newPartial);
    }
  }

  return solutions;
}
