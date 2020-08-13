import React, { useContext } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../../context/UserContext";
import { clasificacion } from "../../helpers/clasificacion";
import { useFetch } from "../../hooks/useFectch";

import Deudas from "../mensualidad/Deudas";
import FirstMes from "../mensualidad/FirstMes";
import LastMes from "../mensualidad/LastMes";
import Mensualidad from "../mensualidad/Mensualidad";
import Planes from "../plan/Planes";
import PlanesFamiliares from "../plan/PlanFamiliar";
import PrecioPlan from "../plan/PrecioPlan";
import PrecioServicio from "../Servicios/PrecioServicio";
import PrecioServicioOne from "../Servicios/PrecioServicioOne";
import Servicios from "../Servicios";
import ServiciosPlan from "../plan/ServiciosPlan";
import ServiciosPlanFamiliar from "../plan/ServicioPlanFamiliar";
import TipoServicio from "../Servicios/TipoServicio";

const theme = {
  background: "#F5F6F2", //fondo del chatbot
  fontFamily: "Segoe UI",
  headerBgColor: "#06A7E8",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#D8DADA",
  botFontColor: "#000",
  userBubbleColor: "#06A7E8",
  userFontColor: "#fff",
};

export const ChatbotScreen = () => {
  const { user } = useContext(UserContext);
  const url = `http://localhost:4000/api/usuario/${user.cedula}`;
  const { loading, data } = useFetch(url);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <ChatBot
          headerTitle="Asistente de ventas"
          placeholder="Escriba su mensaje"
          botAvatar="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"
          userAvatar="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
          recognitionEnable={true}
          floating={true}
          recognitionLang="es"
          steps={[
            {
              id: "1",
              message: `Hola! ${data.data.nombre} ${data.data.apellido}, En qué te puedo ayudar?`,
              trigger: "usuario",
            },
            {
              id: "usuario",
              user: true,
              trigger: ({ value, steps }) => clasificacion(value),
            },
            {
              id: "servicio",
              component: <Servicios />,
              trigger: "sugerencia2",
            },
            {
              id: "independiente",
              component: <TipoServicio />,
              trigger: "sugerencia2",
            },
            {
              id: "plan",
              component: <Planes />,
              trigger: "sugerencia2",
            },
            {
              id: "premium",
              component: <ServiciosPlan />,
              trigger: "sugerencia2",
            },
            {
              id: "basico",
              component: <ServiciosPlan />,
              trigger: "sugerencia2",
            },
            {
              id: "precio/premium",
              component: <PrecioPlan />,
              trigger: "sugerencia2",
            },
            {
              id: "precio/basico",
              component: <PrecioPlan />,
              trigger: "sugerencia2",
            },
            {
              id: "planes-familiares",
              component: <PlanesFamiliares />,
              trigger: "sugerencia2",
            },
            {
              id: "planes-familiares-servicios",
              component: <ServiciosPlanFamiliar />,
              trigger: "sugerencia2",
            },
            {
              id: "precio-servicios",
              component: <PrecioServicio />,
              trigger: "sugerencia2",
            },
            {
              id: "movimientos",
              component: <Mensualidad />,
              trigger: "sugerencia2",
            },
            {
              id: "primer-pago",
              component: <FirstMes />,
              trigger: "sugerencia2",
            },
            {
              id: "ultimo-pago",
              component: <LastMes />,
              trigger: "sugerencia2",
            },
            {
              id: "meses-pago",
              component: <Deudas />,
              trigger: "sugerencia2",
            },
            {
              id: "ataud",
              component: <PrecioServicioOne />,
              trigger: "sugerencia2",
            },
            {
              id: "flores",
              component: <PrecioServicioOne />,
              trigger: "sugerencia2",
            },
            {
              id: "musica",
              component: <PrecioServicioOne />,
              trigger: "sugerencia2",
            },
            {
              id: "no-existe",
              message:
                "La pregunta realizada no puede ser contestada por este ChatBot, favor llamar 809-612-3445 para mas detalles",
              trigger: "consultar",
            },
            {
              id: "consultar",
              message:
                "Estas son algunas sugerencias de lo que le puedo contestar",
              trigger: "sugerencias",
            },
            {
              id: "sugerencias",
              options: [
                { value: 1, label: "Servicio", trigger: "servicio" },
                { value: 2, label: "Planes", trigger: "plan" },
                {
                  value: 3,
                  label: "Precio de los servicios",
                  trigger: "precio-servicios",
                },
                {
                  value: 4,
                  label: "Planes familiares",
                  trigger: "planes-familiares",
                },
                { value: 5, label: "Pagos realizados", trigger: "movimientos" },
                { value: 6, label: "Otra...", trigger: "otra" },
                { value: 7, label: "Terminar conversacion", trigger: "end" },
              ],
            },
            {
              id: "sugerencia2",
              message: "En que otra cosa le puedo ayudar?",
              trigger: "usuario",
            },
            {
              id: "otra",
              message: "Introduzca su pregunta en la caja de texto.",
              trigger: "usuario",
            },
            {
              id: "end",
              message: "Gracias por charlar!",
              end: true,
            },
          ]}
        />
      )}
    </ThemeProvider>
  );
};
