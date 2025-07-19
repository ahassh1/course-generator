import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constant/Colors";
export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 20,
        }}
      />

      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontSize: 29,
            fontWeight: "bold",
            fontFamily: "outfit-bold",
          }}
        >
          Welcome to Daily Campus
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 18,
          }}
        >
          Transform your ideas into engaging education and content effortlessly
          with all in one
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/signUp")}
        >
          <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
            Get Started
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.button,
            {
              backgroundColor: Colors.PRIMARY,
              borderWidth: 1,
              borderColor: Colors.WHITE,
            },
          ]}
        >
          <TouchableOpacity
            style={[styles.buttonText, { color: Colors.WHITE }]}
            onPress={() => router.push("/auth/signIn")}
          >
            Already have an account?
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "outfit-bold",
  },
});
