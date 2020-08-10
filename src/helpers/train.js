import natural from "natural";
import Espa from "../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es";

export const train = () => {
  const classifier = new natural.LogisticRegressionClassifier(Espa);
  
  //Preguntas Generales
  classifier.addDocument("Cuáles son sus servicios ofrece", "servicio");
  classifier.addDocument("Cuáles son sus servicios individuales o independiente", "independiente");
  classifier.addDocument("Cuáles son sus planes", "plan");
  classifier.addDocument("Cuáles servicios ofrece un plan Premium", "premium");
  classifier.addDocument("Cuáles servicios ofrece un plan básico", "basico");
  classifier.addDocument("Cuál es el precio de un plan premium", "precio/premium");
  classifier.addDocument("Cuál es el precio de un plan básico", "precio/basico");
  classifier.addDocument("Cuáles son los planes familiares que ustedes ofrecen o Cuáles son los precios de cada plan familiar", "planes-familiares");
  classifier.addDocument("Cuáles son los servicios que ofrece cada plan familiar", "planes-familiares-servicios");
  classifier.addDocument("Precios por cada servicio o precio de los servicios ", "precio-servicios");
  classifier.addDocument("Quiero ver mis movimientos o pagos realizados", "movimientos");
  classifier.addDocument("Cuándo fue mi primer pago", "primer-pago");
  classifier.addDocument("Cuándo fue mi último pago", "ultimo-pago");
  classifier.addDocument("Cuántos meses debo o tengo pendiente", "meses-pago");

  //Preguntas de Precios de Servicios Independientes
  classifier.addDocument("Cual es el precio de los arreglos florales", "arreglos florales");
  classifier.addDocument("Cual es el precio de los recordatorios", "recordatorios");
  classifier.addDocument("Cual es el precio de los servicios religiosos", "religiosos");
  classifier.addDocument("Cual es el precio de una lapida", "lapida");
  classifier.addDocument("Cual es el precio de un servicio de música", "musica");
  classifier.addDocument("Tienen autobuses disponibles y cual es el precio de un autobus", "autobus");
  classifier.addDocument("por cuanto rentan una capilla o cual es el precio de una capilla adicional", "capillas");

  
  classifier.train();

 return classifier;
}
