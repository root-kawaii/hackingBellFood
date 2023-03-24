import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";
import ProgressChartElement from "./screens/viz/progressChartElement";

const data = [
  {
    question: "Should you buy a recycled t-shirt or reuse an old one ?",
    optionA: "Recycled",
    optionB: "Reuse",
    answer: "Reuse",
  },
  {
    question: "What is a reasonable number of meat-based meals per week",
    optionA: "One",
    optionB: "Two",
    optionC: "Zero",
    optionD: "Seven",
    answer: "Two",
  },
  {
    question: "A 5 year old AAA-rated lamp is as efficient as a new one",
    optionA: "True",
    optionB: "False",
    answer: "False",
  },
];

export default function QuizPage() {
  const [points, setPoints] = useState(0);
  const [done, setDone] = useState(true);

  function countFun(prop) {
    var count = 0;
    for (const i in prop) {
      if (prop[i]["isRight"] === true) {
        count = count + 1;
      }
    }
    setPoints(count);
    setDone(false);
  }

  if (done) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <QuizeSingleChoice
          containerStyle={{ backgroundColor: "#74C69D", paddingTop: 30 }}
          questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
          responseStyle={{
            borderRadius: 15,
          }}
          responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
          selectedResponseStyle={{
            borderRadius: 15,
            backgroundColor: "#1B4332",
          }}
          selectedResponseTextStyle={{
            fontSize: 14,
            fontWeight: "normal",
          }}
          responseRequired={true}
          nextButtonText={"Next"}
          nextButtonStyle={{ backgroundColor: "#06d755" }}
          nextButtonTextStyle={{ color: "#FFF" }}
          prevButtonText={"Prev"}
          prevButtonStyle={{ backgroundColor: "#fa5541" }}
          prevButtonTextStyle={{ color: "#FFF" }}
          endButtonText={"Done"}
          endButtonStyle={{ backgroundColor: "#000" }}
          endButtonTextStyle={{ color: "#FFF" }}
          buttonsContainerStyle={{ marginTop: "auto" }}
          onEnd={(results) => {
            countFun(results), console.log(results);
          }}
          data={data}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }} backgroundColor={"#95D5B2"}>
        <Text style={styles.title}>Your score is {points}</Text>
        <ProgressChartElement
          data={[points, data.length]}
        ></ProgressChartElement>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 100,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
