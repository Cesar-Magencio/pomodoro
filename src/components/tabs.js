import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Tabs = (props) => {
  const { seleccion, setseleccion, tiempo, settiempo } = props;

  const opciones = ["Pomodoro", "Descanso", "Descancito"];
  const handleChangeSelect = (index) => {
    setseleccion(index);
    const newTime = index === 0 ? 25 : index === 1 ? 10 : 5;
    settiempo(newTime * 60);
    setactivo(false);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {opciones.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.boton,
            seleccion !== index && { borderColor: "transparent" },
          ]}
          onPress={() => handleChangeSelect(index)}
        >
          <Text style={styles.texto}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
