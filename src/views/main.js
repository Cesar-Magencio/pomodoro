import { useEffect, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Tabs from "../components/tabs";
import Timer from "../components/timer";
import { Audio } from "expo-av";

export default Main = () => {
  const [seleccion, setSeleccion] = useState("POMO" | "SHORT" | "LONG");

  const [tiempo, setTiempo] = useState(25 * 60);
  const [activo, setActivo] = useState(false);

  const colors = ["#21EB98", "#BF60EB", "#EB8E21"];

  const Alarma = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/NeneMalo.mp3")
    );
    await sound.playAsync();
  };

  useEffect(() => {
    let interval = null;
    if (activo) {
      interval = setInterval(() => {
        setTiempo(tiempo - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setActivo(false);
      setTiempo(tiempoActual === 0 ? 1500 : tiempoActual === 1 ? 300 : 900);
      Alarma();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);

  return (
    <SafeAreaView
      style={[styles.contenedor, { backgroundColor: colors[seleccion] }]}
    >
      <View style={{ marginTop: Platform.OS === "android" && 30 }}>
        <Tabs
          seleccion={seleccion}
          setseleccion={setSeleccion}
          tiempo={tiempo}
          settiempo={setTiempo}
          setactivo={setActivo}
        />
        <Timer tiempo={tiempo} />
        <Button activo={activo} setActivo={setActivo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "red",
    flex: 1,
  },
});
