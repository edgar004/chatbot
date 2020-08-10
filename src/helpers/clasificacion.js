import {train} from './train';

export const clasificacion = (user) => {
  const classifier = train();
  
  // Verficar si el valor es menor algo 
  return classifier.classify(user);
}
