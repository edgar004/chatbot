import {train} from './train';

export const clasificacion = (user) => {
  const classifier = train();
  
  // Verficar si el valor es menor algo 
  if(classifier.getClassifications(user)[0].value === 0.5){
    return "no-existe"
  }
  console.log(classifier.getClassifications(user))
  return classifier.classify(user);
}
