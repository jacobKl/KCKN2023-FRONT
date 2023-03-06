import React from "react";
import Login from "../components/Login";
import WithLayout from "../hoc/WithLayout";

function Home({ navigation }) {
  return <Login navigation={navigation} />;
}

export default WithLayout(Home);
