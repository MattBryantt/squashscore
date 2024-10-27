import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet} from "react-native";


export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.scorePanelContainer}>
        <ScorePanel/>
      </View>
      <View style={styles.scoreCardContainer}>
        <ScoreCard/>
      </View>
    </View>
  );
};

const GameData = () => {
  
}

type gameCardProps = {
  gameNumber: number;
}

const ScorePanel = () => {
  return (
    <View style={styles.scorePanelContainer}>
      <View style={styles.scoreContainer}>
        <Score/>
        <Text style={styles.scoreText}>-</Text>
        <Score/>
      </View>
      <ServeSymbol/>
    </View>
  );
};

const Score = () => {
  const [count, setCount] = useState(0);

  return (
    <Pressable onPress={() => setCount(count + 1)}>
      <Text style={styles.scoreText}>{count}</Text>
    </Pressable>
  );
};

const ServeSymbol = () => {
  const [serveLeft, setServeLeft] = useState(true);

  const togglePosition = () => {
    setServeLeft(!serveLeft);
  };
  return (
    <Pressable
      onPress={togglePosition}
      style={[styles.serveButton, 
        serveLeft ? styles.serveLeftButton : styles.serveRightButton]}
    />
  );
};

const ScoreCard = () => {
  return (
    <View style={styles.scoreCardContent}>
      <Text style={styles.scoreCardText}>Scorecard</Text>
      <View style={styles.gameCardContainer}>
        <GameCard gameNumber={1}></GameCard>
      </View>
      <View style={styles.gameCardContainer}>
        <GameCard gameNumber={2}/>
      </View>
      <View style={styles.gameCardContainer}>
        <GameCard gameNumber={3}/>
      </View>
      <View style={styles.gameCardContainer}>
        <GameCard gameNumber={4}/>
      </View>
      <View style={styles.gameCardContainer}>
        <GameCard gameNumber={5}/>
      </View>
    </View>
  );
};

const GameCard = ({gameNumber}: gameCardProps) => {
  return (
    <View style={styles.gameCardContent}>
      <Text style={styles.gameCardText}>Game {gameNumber}</Text>
      <Pressable><Text style={styles.gameCardText}>{'>'}</Text></Pressable>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f1f"
  },
  scorePanelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingBottom: 15,
  },
  scoreCardContainer: {
    flex: 2,
    width: "90%",
    paddingTop: 15,
  },

  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  scoreText: {
    fontSize: 52,
    color: "#f1f1f1",
    fontWeight: "bold"
  },

  serveButton: {
    position: "absolute",
    backgroundColor: "#f1f1f1",
    width: 22,
    height: 22,
    borderRadius: 11,
    bottom: 0,
    padding: 10
  },
  serveLeftButton: {
    left: 0,
  },
  serveRightButton: {
    right: 0,
  },

  scoreCardText: {
    fontSize: 26,
    paddingBottom: 5,
    color: "#f1f1f1",
    fontWeight: "bold",
    textAlign: "left",
  },

  scoreCardContent: {
    flex: 1,
    paddingBottom: 25,
  },

  gameCardContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  gameCardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    borderColor: "#4f4f4f",
    borderRadius: 12,
    borderWidth: 1,
  },
  gameCardText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#f1f1f1",
  }
});
