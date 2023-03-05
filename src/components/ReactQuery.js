import React from "react";
import { useQuery } from "react-query";
import { View, Text } from "react-native";

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred</Text>;
  console.log(data.id);
  return (
    <View>
      <Text>React Query: {data.id}</Text>
    </View>
  );
}

export default Example;
