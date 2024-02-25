import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
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
  const [state, updateState] = useState({
    tableHead: ["", "NEW", "OLD"],
    tableData: [
      ["TIME", "Loading", "Loading"],
      ["DATE", "Loading", "Loading"],
    ],
  });
  const [currentBiOra, updateBiOra] = useState<number | undefined>();
  const [currentBiMino, updateBiMino] = useState<number | undefined>();
  const [currentSeko, updateSeko] = useState<number | undefined>();

  useEffect(() => {
    const interval = setInterval(() => {
      // date.getTime() returns the milliseconds since the invention of it, in java script.
      const date = new Date();
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

      updateState(({ tableData }) => {
        return {};
      });
    }, 96);

    return () => clearInterval(interval);
  }, []);

  return (
    <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
      <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={state.tableData} textStyle={styles.text} />
    </Table>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: "#fff",
  },
  head: { height: 100, backgroundColor: "#f1f8ff" },
  text: { margin: 20, width: 50, textAlign: "center" },
});

export default TimeComponent;
