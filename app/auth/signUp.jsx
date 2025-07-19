import { Image, View } from "react-native";

export default function SignUp() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        source={require("./../../assets/images/ahasshLogo.png")}
        style={{
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
