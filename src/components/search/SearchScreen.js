import React, { useContext } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../../context/UserContext";

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

export const SearchScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Asistente de ventas"
          recognitionEnable={true}
          floating={true}
          recognitionLang="es"
          steps={[
            {
              id: "1",
              message: `What is your name?${user.cedula}`,
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    </>
  );
};
