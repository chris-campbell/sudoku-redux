import React from "react";
import { NewGameBtn } from "./styles/styles";

const NewGameButton: React.FC = () => {
  const createGame = async () => {
    // const result = await axios.get("/createGame");
    // console.log(result);
  };

  return <NewGameBtn onClick={createGame}>New Game</NewGameBtn>;
};

export default NewGameButton;
