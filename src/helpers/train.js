import natural from "natural";
import Espa from "../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es";

export const train = () => {
  const classifier = new natural.LogisticRegressionClassifier(Espa);

  classifier.addDocument("Cuáles son sus servicios ofrece", "servicio");
  classifier.addDocument("Cuáles son sus servicios individuales", "individuales");
  classifier.addDocument("Cuáles son sus planes", "planes");
  classifier.addDocument("Cuáles servicios ofrece un plan Premium", "plan-Premium");
  classifier.addDocument("Cuáles servicios ofrece un plan básico", "plan-basico");
  classifier.addDocument("Cuál es el precio de un plan premium", "precio-plan-premium");
  classifier.addDocument("Cuál es el precio de un plan básico", "precio-plan-basico");
  classifier.addDocument("Cuáles son los planes familiares que ustedes ofrecen", "planes-familiares");
  classifier.addDocument("Cuáles son los precios de cada plan familiar", "precio-planes-familiares");
  classifier.addDocument("Cuáles son los servicios que ofrece cada plan familiar", "planes-familiares-servicios");
  classifier.addDocument("Precio por cada servicio o un servicio en específico ", "precio-servicios");
  classifier.addDocument("Quiero ver mis movimientos o pagos realizados", "movimientos");
  classifier.addDocument("Cuándo fue mi primer pago", "primer-pago");
  classifier.addDocument("Cuándo fue mi último pago", "ultimo-pago");
  classifier.addDocument("Cuántos meses debo o tengo pendiente", "meses-pago");
  
  classifier.train();

 return classifier;
}
