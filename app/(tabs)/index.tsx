import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import TimeComponent from "../components/TimeComponent";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time</Text>

      <TimeComponent />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

// const time = document.getElementById("time");
// const dato = document.getElementById("dato");

// // const newTime = {
// // DATE:{
// //     // Number of day
// //         weekNum:"",

// //         dayNumber:"1,2,3,4,5,6,7,8,9,10",
// // },
// // DATO:{
// //     //Hours
// //     BiORA:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
// //     //Minutes
// //     BiMINO:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
// //     //Seconds
// //     SEKO:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
// // }};

// // function to get the passed days from an start date
// function days_passed(date) {
//     var currentTime = new Date(date.getTime());
//     var previousTime = new Date(date.getFullYear(), 0, 1);

//     return Math.ceil(((currentTime - previousTime + 1) / 86400000));
//   }

// const timeConverter = ()=>{
//     // date.getTime() returns the milliseconds since the invention of it, in java script.
//     const date = new Date();
//     // defining hours minutes and seconds;
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     // total passed seconds in a day
//     const totalPassedSeconds = hours*3600 + minutes*60 + seconds;
//     // converting total passed seconds to SEKO in 24 hours
//     // each Seko is 0.96 seconds.
//     const totalPassedSeko = totalPassedSeconds / 0.96;
//     // it updates every 100 seconds
//     const totalPassedBiMino = totalPassedSeko /100;
//     // Ora, Mino, Seko

//     const currentBiOra = totalPassedBiMino/100;
//     const currentBiMino =  (currentBiOra - Math.floor(currentBiOra))*100;
//     const currentSeko = ((totalPassedSeko)/100 - Math.floor(totalPassedSeko/100))*100;

//     time.innerHTML = `<span class="ora">${Math.floor(currentBiOra)}</span><span class="mino">${Math.floor(currentBiMino)}</span><span class="seko">${Math.floor(currentSeko)}</span>`;

//     // calculating DATO

//     dato.innerHTML = `<span class="week">${Math.floor(days_passed(date)/10)}</span><span>${days_passed(date) - Math.floor(days_passed(date)/10)*10}</span>`;
// };

// setInterval(timeConverter,0960);
