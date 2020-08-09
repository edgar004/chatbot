import {train} from './train';

export const clasificacion = (user) => {
  const classifier = train();
  
  return classifier.classify(user);
}
