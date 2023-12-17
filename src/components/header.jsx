import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export const Header = ({ setTime, time, curretTime, setCurrentTime }) => {
  const options = ["POMODORO", "SHORT TIME", "LONG BREAK"];

  function handleNav(index) {
    const indexSelected = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(indexSelected * 60);
  }

  return (
    <View>
      <Text style={styles.time}>POMODORO</Text>
      <View style={styles.container}>
        {options.map((item, index) => (
          <Pressable
            style={[
              styles.NavBar,
              curretTime !== index && { borderColor: "transparent" },
            ]}
            key={index}
            onPress={() => handleNav(index)}
          >
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        ))}
      </View>
 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "red",
    paddingTop: 3,
    padding: "5%",
  },
  time: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "500",
  },
  NavBar: {
    alignContent: "center",
    justifyContent:"center",    
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "white",
    width: "33%",
    padding: 5
  },
  text:{
    textAlign: "center",
    fontWeight: "bold"
  }
});
