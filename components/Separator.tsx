import { View, Text } from "react-native";
import React from "react";

type Props = {};

const Separator = (props: Props) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#ECDCE1",
        marginTop: 24,
        marginBottom: 24,
      }}
    ></View>
  );
};

export default Separator;
