import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

export default Button = (props) => {
  const { activo, setActivo } = props;

  const handleCLick = () => {
    setActivo(!activo);
    playSound();
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/DUHAST.mp3")
    );

    await sound.playAsync();
  };

  return (
    <View>
      <TouchableOpacity style={styles.boton} onPress={() => handleCLick()}>
        <Text style={styles.text}>{activo ? "Detener" : "Empezar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "white",
    margin: 20,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
