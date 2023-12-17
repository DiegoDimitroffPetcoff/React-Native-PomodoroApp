import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { Header } from "./src/components/header";
import { useEffect, useState } from "react";
import { Timer } from "./src/components/timer";

export default function App() {
  const [time, setTime] = useState(25 * 60);
  const [curretTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];


  useEffect(()=>{
    let interval = null;
    if(isActive){
      interval= setInterval(()=>{
        setTime(time - 1)
      },1000)
    }else{
      clearInterval(interval)
    }
    
    if(time === 0){
      setIsActive(false);
      setIsWorking(!isWorking)
      setTime(isWorking ? 300 : 1500)
    }
    return()=> clearInterval(interval)
  },[isActive,time])

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[curretTime] }]}
    >
      <View />
      <Header
        time={time}
        setTime={setTime}
        curretTime={curretTime}
        setCurrentTime={setCurrentTime}
      ></Header>
      <Timer time={time} />
      {isActive ? (
        <Button title="stop" onPress={() => setIsActive(!isActive)} />
      ) : (
        <Button title="start" onPress={() => setIsActive(!isActive)}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    padding: 20,
  },
});
