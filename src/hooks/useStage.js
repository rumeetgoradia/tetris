import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";
// import { player, resetPlayer } from "./usePlayer"

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = newStage => (
      newStage.reduce((acc, row) => {
        // Check if you can find a 0 in the row; if not, it's full
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => ++prev);
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return acc;
        }
        acc.push(row);
        return acc;
      }, [])
    )

    const updateStage = prevStage => {
      //First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      //Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`
            ];
          }
        });
      });
      // Check if collision
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
