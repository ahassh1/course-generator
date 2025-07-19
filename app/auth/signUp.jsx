import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "./../../constant/Colors";

export default function SignUp() {
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../../assets/images/ahasshLogo.png")}
        style={{
          width: 130,
          height: 140,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Create new account
      </Text>
      <TextInput placeholder="Full Name" style={styles.textInput} />
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput
        placeholder="password"
        secureTextEntry="true"
        style={styles.textInput}
      />

      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 7,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          gap: 9,
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", color: Colors.GRAY }}>
          Already have an account please,
        </Text>
        <Pressable onPress={() => router.push("/auth/signIn")}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: Colors.PRIMARY,
              fontSize: 14,
            }}
          >
            Sign In here
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 14,
    width: "100%",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
  },
});
