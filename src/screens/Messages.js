import React from "react";
import Text from "./../components/Text";
import WithLayout from "../hoc/WithLayout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import apiRoute from "../api/apiConfig";
import WithContext from "../hoc/WithContext";
import theme from "../css/theme";
import Conversation from "../components/Conversation";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";

function Messages({ state }) {
  const queryClient = useQueryClient();

  const getMessages = async () => {
    if (!state.user.id) return;

    const response = await fetch(apiRoute(`/message/${state.user.id}`), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    return await response.json();
  };

  const { isLoading, error, data, isFetching } = useQuery(
    "messages",
    getMessages,
    {
      refetchInterval: 10000, // ms
    }
  );

  const postMessage = () => {};

  const mutation = useMutation(postMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  if (isLoading)
    return <Text style={{ color: theme.base1 }}>Ładowanie...</Text>;

  if (error) return <Text style={{ color: theme.base1 }}>Wystąpił błąd!</Text>;

  return (
    <>
      <View
        style={{
          height: "8%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header>Wiadomości</Header>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          width: "100%",
          height: "84%",
        }}
      >
        {data.data.map((conversation, index) => (
          <Conversation
            index={index}
            key={conversation.id}
            ownerId={state.user.id}
            participantId={conversation.id}
            messages={conversation.messages}
          />
        ))}
      </ScrollView>
      <View
        style={{ width: "100%", height: "8%", backgroundColor: theme.accent1 }}
      ></View>
    </>
  );
}
export default WithContext(WithLayout(Messages));
