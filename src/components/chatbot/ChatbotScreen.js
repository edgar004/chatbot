import React, { useContext } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../../context/UserContext";
import {clasificacion} from '../../helpers/clasificacion';
import { useFetch } from "../../hooks/useFectch";
import Servicios from '../Servicios';
import TipoServicio from '../Servicios/TipoServicio';
import PrecioServicio from '../Servicios/PrecioServicio';
import Planes from "../plan/Planes";
import ServiciosPlan from "../plan/ServiciosPlan";
import PrecioPlan from "../plan/PrecioPlan";
import PlanesFamiliares from "../plan/PlanFamiliar";
import ServiciosPlanFamiliar from "../plan/ServicioPlanFamiliar";
import Mensualidad from "../mensualidad/Mensualidad";
import FirstMes from "../mensualidad/FirstMes";
import LastMes from "../mensualidad/LastMes";
import Deudas from "../mensualidad/Deudas";


const theme = {
  background: "#F5F6F2",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#06A7E8",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#D1E6E8",
  botFontColor: "#000",
  userBubbleColor: "#DBE1E1",
  userFontColor: "#4a4a4a",
};

export const ChatbotScreen = () => {
  const { user } = useContext(UserContext);
  const url = `http://localhost:4000/api/usuario/${user.cedula}`;
  const { loading, data }  = useFetch(url);

  return (  
    <ThemeProvider theme={theme}>
    {
       loading ? <h1>Loading</h1> : (
    
      
        <ChatBot
          headerTitle="Asistente de ventas"
          recognitionEnable={true}
          floating={true}
          recognitionLang="es"
          steps={[
            {
              id: "1",
              message: `Saludos ${data.data.nombre} ${data.data.apellido}, Funeraria Charlys, en qué podemos servirle?`,
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
              // asMessage: true,
              trigger: "1",
            },
            {
              id: "independiente",
              component: <TipoServicio />,
              trigger: "1",
            },
            {
              id: "plan",
              component: <Planes />,
              trigger: "1",
            },
            {
              id: "premium",
              component: <ServiciosPlan />,
              trigger: "1",
            },
            {
              id: "basico",
              component: <ServiciosPlan />,
              trigger: "1",
            },
            {
              id: "precio/premium",
              component: <PrecioPlan />,
              trigger: "1",
            },
            {
              id: "precio/basico",
              component: <PrecioPlan />,
              trigger: "1",
            },
            {
              id: "planes-familiares",
              component: <PlanesFamiliares />,
              trigger: "1",
            },
            {
              id: "planes-familiares-servicios",
              component: <ServiciosPlanFamiliar />,
              trigger: "1",
            },
            {
              id: "precio-servicios",
              component: <PrecioServicio />,
              trigger: "1",
            },
            {
              id: "movimientos",
              component: <Mensualidad />,
              trigger: "1",
            },
            {
              id: "primer-pago",
              component: <FirstMes />,
              trigger: "1",
            },
            {
              id: "ultimo-pago",
              component: <LastMes />,
              trigger: "1",
            },
            {
              id: "meses-pago",
              component: <Deudas />,
              trigger: "1",
            },
            {
              id: "no-existe",
              message: "No puedo responder esa pregunta",
              trigger: "1",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true,
            },
          ]}
        />
      
       )
      }
      </ThemeProvider>
  );
};
