import React, { useState, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "@/components/Confetti";
import ScoreBoard from "@/pages/scoreboard";
import Select from "react-select";

const MultipleColorsGame = () => {
  const [gameState, setGameState] = useState("ready"); // 'ready', 'running', 'finished'
  const [selectedColor, setSelectedColor] = useState("#2ecc71"); // Vert par défaut
  const [currentColor, setCurrentColor] = useState("#ecf0f1"); // Rouge au départ
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState(""); // Nouvel état pour le message
  const confettiRef = useRef(); // Ajoutez cette ligne pour créer la
  const [previousResults, setPreviousResults] = useState([]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  const randomColor = () => {
    const colors = [
      "#e74c3c",
      "#3498db",
      "#9b59b6",
      "#f1c40f",
      "#2ecc71",
      "#d35400",
      "#c0392b",
      "#1abc9c",
      "#5f27cd",
      "#01a3a4",
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const startGame = () => {
    setGameState("running");
    setMessage("");
    setCurrentColor("#ecf0f1"); // Réinitialiser la couleur

    const changeColor = () => {
      const newColor = randomColor();
      setCurrentColor(newColor);

      if (newColor !== "#2ecc71") {
        const delay = Math.floor(Math.random() * (1000 - 300 + 1)) + 300; // Réduire le délai entre les changements de couleur
        setTimeout(changeColor, delay);
      } else {
        setStartTime(new Date().getTime());
      }
    };

    const startDelay = Math.floor(Math.random() * (1000 - 300 + 1)) + 300; // Réduire le délai initial
    setTimeout(changeColor, startDelay);
  };

  const handleClick = () => {
    if (gameState === "running") {
      if (currentColor === "#2ecc71") {
        const endTime = new Date().getTime();
        const reaction = endTime - startTime;
        setReactionTime(reaction);
        const newScore = calculateScore(reaction);
        setScore(newScore);
        setGameState("finished");
        triggerConfetti();

        // Ajouter les résultats aux résultats précédents
        setPreviousResults((prevResults) => [
          ...prevResults,
          { reactionTime: reaction, score: newScore },
        ]);
      } else {
        // Si l'utilisateur clique trop tôt
        setMessage("C'est trop tôt, vous avez perdu !");
        setGameState("finished");
      }
    }
  };

  const bestScore = (results) => {
    if (results.length === 0) return null;
    const sortedResults = results
      .slice()
      .sort((a, b) => (a.score > b.score ? -1 : 1));
    return sortedResults[0].score;
  };

  const averageScore = (results) => {
    if (results.length === 0) return null;
    const sum = results.reduce((acc, result) => acc + result.score, 0);
    return sum / results.length;
  };

  const triggerConfetti = () => {
    confettiRef.current.onClickCustom();
  };

  const calculateScore = (reactionTime) => {
    const maxScore = 1000;
    const minScore = 0;
    const maxReactionTime = 2000;
    return Math.max(
      minScore,
      maxScore - (reactionTime / maxReactionTime) * maxScore
    );
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-3">
          <div
            className={
              "h-100 d-flex flex-column justify-content-start align-items-center"
            }
          >
            <ScoreBoard />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <Confetti ref={confettiRef} />
            {gameState === "ready" && (
              <button
                style={{
                  fontFamily: "Luckiest Guy",
                  fontStyleS: "normal",
                  fontSize: 64,
                }}
                className="btn btn-danger btn-large rounded-circle circular-button"
                onClick={startGame}
              >
                <p>GO</p>
              </button>
            )}

            {gameState === "running" && (
              <button
                style={{
                  fontFamily: "Luckiest Guy",
                  fontStyleS: "normal",
                  fontSize: 64,
                }}
                className="btn btn-danger btn-large rounded-circle circular-button"
                onClick={handleClick}
              >
                STOP
              </button>
            )}

            {gameState === "finished" && (
              <div className="text-center">
                <div className="text-center bg-white rounded shadow p-2 px-3 mb-4">
                  <div>
                    {message && (
                      <span className="text-danger pb-1">{message}</span>
                    )}
                  </div>
                  <div>
                    {reactionTime && (
                      <span className={"pb-1"}>
                        <strong>Temps de réaction</strong> : {reactionTime} ms
                      </span>
                    )}
                  </div>
                  <div>
                    {score !== null && (
                      <span className={"pb-1"}>
                        <strong>Score</strong> : {Math.round(score)}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  style={{
                    fontFamily: "Luckiest Guy",
                    fontStyleS: "normal",
                    fontSize: 64,
                  }}
                  className="btn btn-danger btn-large rounded-circle circular-button"
                  onClick={startGame}
                >
                  GO
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 d-flex flex-column justify-content-start align-items-center">
            <div
              className={"w-100 h-100 bg-white rounded shadow text-center mb-5"}
            >
              <h3
                style={{
                  fontFamily: "Concert One",
                  fontStyleS: "normal",
                  fontSize: 40,
                }}
                className="my-3"
              >
                Derniers résultats
              </h3>
              <hr />
              <p
                style={{
                  fontFamily: "Dongle",
                  fontStyleS: "normal",
                  fontSize: 30,
                }}
              >
                <strong>Meilleur score :</strong>{" "}
                {bestScore(previousResults) !== null
                  ? Math.round(bestScore(previousResults))
                  : "N/A"}
              </p>
              <p
                style={{
                  fontFamily: "Dongle",
                  fontStyleS: "normal",
                  fontSize: 30,
                }}
              >
                <strong>Moyenne des scores :</strong>{" "}
                {averageScore(previousResults) !== null
                  ? Math.round(averageScore(previousResults))
                  : "N/A"}
              </p>
              {previousResults.map((result, index) => (
                <div
                  style={{
                    fontFamily: "Dongle",
                    fontStyleS: "normal",
                    fontSize: 30,
                  }}
                  className="row"
                  key={index}
                >
                  <div className="col-6 text-center">
                    <span>Essai {index + 1} :</span>
                  </div>
                  <div className="col-6 text-left">
                    <span>{Math.round(result.score)}</span>
                  </div>
                </div>
              ))}
              <div className="mb-5"></div>
              <button
                className="btn btn-primary btn-large"
                onClick={() =>
                  setPreviousResults((prevResults) => [
                    ...prevResults.sort((a, b) => a.score - b.score),
                  ])
                }
              >
                Trier les scores
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleColorsGame;
