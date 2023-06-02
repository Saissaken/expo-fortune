import AsyncStorage from "@react-native-async-storage/async-storage";

export type Message = {
  text: string;
  color: string;
  date: string;
};

export const useMessages = () => {
  const defaultMessages = [
    {
      text: "Today it's up to you to create the peacefulness you long for.",
      date: "2021-07-06T22:55:00.037Z",
      color: "#52B2F9",
    },
    {
      text: "If you refuse to accept anything but the best, you very often get it.",
      date: "2021-07-15T15:14:10.890Z",
      color: "#874AF6",
    },
    {
      text: "A smile is your passport into the hearts of others.",
      date: "2021-07-24T07:33:21.743Z",
      color: "#5BBDA0",
    },
    {
      text: "A good way to keep healthy is to eat more Chinese food.",
      date: "2021-08-01T23:52:32.596Z",
      color: "#2A63F5",
    },
    {
      text: "Your high-minded principles spell success.",
      date: "2021-08-10T16:11:43.449Z",
      color: "#5536EA",
    },
    {
      text: "Hard work pays off in the future, laziness pays off now.",
      date: "2021-08-19T08:30:54.302Z",
      color: "#57BECB",
    },
  ];

  async function getMessages() {
    const messagesData = await AsyncStorage.getItem("app_messages");
    return messagesData ? JSON.parse(messagesData) : defaultMessages;
  }

  const addMessage = async (text: string) => {
    const messageList = await getMessages();
    const color = Math.floor(Math.random() * 16777215).toString(16);

    messageList.push({
      text,
      color: `#${color}`,
      date: new Date().toISOString(),
    });
    await AsyncStorage.setItem("app_messages", JSON.stringify(messageList));
  };

  return {
    addMessage,
    getMessages,
  };
};
