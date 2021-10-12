export const frontDoorResponse = (line) => line.charAt(0);

export const frontDoorPassword = (word) => capitalise(word);

export const backDoorResponse = (line) => line.charAt(line.trim().length - 1);

export const backDoorPassword = (word) => `${capitalise(word)}, please`;

const capitalise = (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
