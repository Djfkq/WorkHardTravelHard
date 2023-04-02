import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* onPress : In + Out, onPressIn : 누를때, onPressOut : 누르고 뗄 떄 , onLongPress:오랫동안 누르고 있었을 때*/}
        <TouchableOpacity
          activeOpacity={0.2}
          onLongPress={() => console.log("Work pressed")}
        >
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => console.log("Travel pressed")}
          underlayColor="grey"
          activeOpacity={0.4}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback
          onPress={() => console.log("Travel2 pressed")}
        >
          <Text style={styles.btnText}>Travel2</Text>
        </TouchableWithoutFeedback>
        <Pressable
          delayLongPress={2 * 1000}   //onLongPress 이벤트 발생하기 위해 몇초간 눌러야할지 설정
          // disabled    //disabled 설정되면 클릭이벤트 발생 안함
          hitSlop={{ bottom: 20, left: null, right: undefined, top: 50 }}  // 버튼 바깥 어디까지 누르는걸 감지할지 정함
          onPress={() => console.log("Travel3 pressed")}
        >
          <Text style={styles.btnText}>Travel3</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
