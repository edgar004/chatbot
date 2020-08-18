import natural from "natural";
import Espa from "../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es";

export const train = () => {
  const classifier = new natural.LogisticRegressionClassifier(Espa);

  //----- Preguntas Generales

  classifier.addDocument("servicios", "servicio");
  classifier.addDocument(
    "servicios individuales o independiente",
    "independiente"
  );
  classifier.addDocument("precio de cada servicio o precios de los servicios", "precio-servicios");

  //planes y sus servicios
  classifier.addDocument("planes", "plan");
  classifier.addDocument("servicios  plan premium", "premium");
  classifier.addDocument("servicios  plan basico", "basico");
  classifier.addDocument("precio plan premium", "precio/premium");
  classifier.addDocument("precio plan basico", "precio/basico");
  classifier.addDocument("plan familiar o planes familiares", "planes-familiares");
  classifier.addDocument(
    "servicios plan familiar o familiares",
    "planes-familiares-servicios"
  );

  //pagos y movimientos
  classifier.addDocument("movimientos o pagos realizados", "movimientos");
  classifier.addDocument("primer pago", "primer-pago");
  classifier.addDocument("último pago", "ultimo-pago");
  classifier.addDocument("meses debo o tengo pendiente", "meses-pago");

  //Preguntas de Precios de Servicios Independientes

  classifier.addDocument("precio de un ataud", "ataud");
  classifier.addDocument("precio de los recordatorios", "recordatorios");
  classifier.addDocument("precio de una lapida", "lapida");
  classifier.addDocument("precio de carpa agua cafe sillas", "carpa agua cafe sillas");
  classifier.addDocument("precio de los religiosos", "servicios religiosos");
  classifier.addDocument("precio de música", "musica");
  classifier.addDocument("precio de autobuses", "autobuses");
  classifier.addDocument("precio de capillas adicionales", "capillas adicionales");

  // Salir
  classifier.addDocument("Salir o terminar conversacion", "end");

  classifier.train();

  return classifier;
};
