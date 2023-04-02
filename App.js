import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import { theme } from "./colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";
const WORKING_KEY = "@working";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const [loading, setLoading] = useState(true);
  const [changedText, setChangedText] = useState("");

  useEffect(() => {
    loadToDo();
    setLoading(false);
  }, []);
  const travel = async () => {
    setWorking(false);
    setText("");
    await AsyncStorage.setItem(WORKING_KEY, "false");
  };
  const work = async () => {
    setWorking(true);
    setText("");
    await AsyncStorage.setItem(WORKING_KEY, "true");
  };
  const addTodo = async () => {
    if (text === "") {
      return;
    }
    //////////////////////////////////////////////////
    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: working },
    // });
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, finish: false, changing: false },
    };
    //////////////////////////////////////////////////
    setToDos(newToDos);
    await saveTodos(newToDos);
    setText("");
  };
  const saveTodos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDo = async () => {
    const working = await AsyncStorage.getItem(WORKING_KEY);
    working === "true" ? setWorking(true) : setWorking(false);

    const toDos = await AsyncStorage.getItem(STORAGE_KEY);
    if (toDos !== null) {
      setToDos(JSON.parse(await AsyncStorage.getItem(STORAGE_KEY)));
    }
  };
  const deleteToDo = async (key) => {
    if (Platform.OS === "web") {
      const ok = confirm("Do you want to delete ths To Do?");
      if (ok) {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        await saveTodos(newToDos);
      }
    } else {
      Alert.alert("Delte To Do?", "Are you sure?", [
        {
          text: "Yes",
          onPress: async () => {
            const newToDos = { ...toDos };
            // const newToDos = todoS    : 이렇게하면 setToDos(newToDos)해도 re-render안됨
            delete newToDos[key];
            setToDos(newToDos);
            await saveTodos(newToDos);
            // await AsyncStorage.removeItem(STORAGE_KEY);
            // await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newToDos));
          },
        },
        { text: "No" },
      ]);
    }
  };

  const finishToDo = async (key) => {
    const newToDos = { ...toDos };
    newToDos[key] = { ...newToDos[key], finish: !newToDos[key].finish };
    setToDos(newToDos);
    await saveTodos(newToDos);
  };

  const changingToDo = async (key) => {
    const newToDos = { ...toDos };
    newToDos[key] = { ...newToDos[key], changing: !newToDos[key].changing };
    setToDos(newToDos);
    await saveTodos(newToDos);
  };

  const changeToDo = async (key, changedText) => {
    const newToDos = { ...toDos };
    newToDos[key] = {
      ...newToDos[key],
      text: changedText,
      changing: !newToDos[key].changing,
    };
    setToDos(newToDos);
    await saveTodos(newToDos);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => {
          setText(newText);
        }}
        onSubmitEditing={addTodo}
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go"}
        // keyboardType="email-address"
        returnKeyType="done"
        // returnKeyLabel="return!!"   //android에서만 가능
        // secureTextEntry={true}
        // multiline={true}
        // placeholderTextColor="blue"
        // autoCorrect={false}
        // autoCapitalize="words"
      />
      <ScrollView>
        {loading ? (
          <ActivityIndicator
            color="white"
            size="large"
            style={{ marginTop: 30 }}
          />
        ) : (
          Object.keys(toDos).map((key) =>
            toDos[key].working === working ? (
              <View style={styles.toDo} key={key}>
                {toDos[key].changing ? (
                  <TextInput
                    style={styles.change}
                    onChangeText={(newText) => {
                      setChangedText(newText);
                    }}
                    onSubmitEditing={() => {
                      changeToDo(key, changedText);
                    }}
                  ></TextInput>
                ) : (
                  <Text
                    style={
                      toDos[key].finish
                        ? {
                            ...styles.toDoText,
                            textDecorationLine: "line-through",
                          }
                        : { ...styles.toDoText }
                    }
                  >
                    {toDos[key].text}
                  </Text>
                )}

                {/* <TouchableOpacity onPress={deleteToDo(key)}>  이렇게하면 함수가 직접 실행되어버림  */}
                {/* onPress에 인자를 넣은 함수를 반영하려면 아래처럼해야함  */}
                <View style={styles.icons}>
                  <View style={styles.icon}>
                    <TouchableOpacity onPress={() => changingToDo(key)}>
                      <FontAwesome name="pencil" size={18} color="white" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.icon}>
                    <TouchableOpacity onPress={() => deleteToDo(key)}>
                      {/* <Text>🗑️</Text> */}
                      <Fontisto name="trash" size={18} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.icon}>
                    <TouchableOpacity onPress={() => finishToDo(key)}>
                      {toDos[key].finish ? (
                        <Fontisto
                          name="checkbox-active"
                          size={18}
                          color="white"
                        />
                      ) : (
                        <Fontisto
                          name="checkbox-passive"
                          size={18}
                          color="white"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : null
          )
        )}
      </ScrollView>
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
    fontSize: 30,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  icons: { flexDirection: "row" },
  icon: { marginRight: 10 },
  change: { backgroundColor: "white", width: 180 },
});
