import { train } from "./train";

export const clasificacion = (user) => {
  const classifier = train();

  if (classifier.getClassifications(user)[0].value === 0.5) {
    return "no-existe";
  }

  return classifier.classify(user);
};
