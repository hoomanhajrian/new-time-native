import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
const TimeComponent = () => {
  const [time, updateTime] = useState({
    tableHead: ["\\", "NEW", "OLD"],
    tableData: [
      ["TIME", "Loading", "Loading"],
      ["DATE", "Loading", "Loading"],
    ],
  });
  const [currentBiOra, updateBiOra] = useState<number | undefined>();
  const [currentBiMino, updateBiMino] = useState<number | undefined>();
  const [currentSeko, updateSeko] = useState<number | undefined>();


const newTime = {
DATE:{
    // Number of day
        weekNum:"",

        dayNumber:"1,2,3,4,5,6,7,8,9,10",
},
DATO:{
    //Hours
    BiORA:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    //Minutes
    BiMINO:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
    //Seconds
    SEKO:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
}};

// function to get the passed days from an start date
function days_passed(date:Date) {
    const currentTime:any = new Date(date.getTime());
    const previousTime:any = new Date(date.getFullYear(), 0, 1);

    return Math.ceil(((currentTime - previousTime + 1) / 86400000));
  }


  useEffect(() => {
    
    const interval = setInterval(() => {
      // date.getTime() returns the milliseconds since the invention of it, in java script.
    const date = new Date();
    date.setMonth(date.getMonth()+1);
      // defining hours minutes and seconds;
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const totalPassedSeconds = hours * 3600 + minutes * 60 + seconds;
      // converting total passed seconds to SEKO in 24 hours
      // each Seko is 0.96 seconds.
      const totalPassedSeko = totalPassedSeconds / 0.96;
      // it updates every 100 seconds
      const totalPassedBiMino = totalPassedSeko / 100;
      // Ora, Mino, Seko

      updateBiOra(totalPassedBiMino / 100);
      updateBiMino(
        (totalPassedBiMino / 100 - Math.floor(totalPassedBiMino / 100)) * 100
      );

      updateSeko(
        (totalPassedSeko / 100 - Math.floor(totalPassedSeko / 100)) * 100
      );

      updateTime({...time,
        tableData: [
          ["TIME", `${currentBiOra && Math.floor(currentBiOra)}:${currentBiMino && Math.floor(currentBiMino)}:${currentSeko && Math.floor(currentSeko)}` , `${hours}:${minutes}:${seconds}`],
          ["DATE", `${Math.floor(days_passed(date)/10) }${days_passed(date) - Math.floor(days_passed(date)/10)*10}`, `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`],
        ],
      })
     
    }, 96);

    return () => clearInterval(interval);
  }, [currentSeko]);

  return (
    <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }} style={styles.container}>
      <Row data={time.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={time.tableData} textStyle={styles.text} />
    </Table>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    width:'85%',
    backgroundColor: "#fff",
  },
  head: { height: 50, backgroundColor: "#f1f8ff" },
  text: {  textAlign: "center",writingDirection:'auto',alignContent:'center',padding:5 },
});

export default TimeComponent;
