import React, {useState, useEffect, useRef} from 'react';
import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "@/components/Confetti";

const ColorGame = () => {
    const [gameState, setGameState] = useState('ready'); // 'ready', 'running', 'finished'
    const [selectedColor, setSelectedColor] = useState("#2ecc71"); // Vert par défaut
    const [currentColor, setCurrentColor] = useState('#ecf0f1'); // Rouge au départ
    const [startTime, setStartTime] = useState(null);
    const [reactionTime, setReactionTime] = useState(null);
    const [score, setScore] = useState(null);
    const [message, setMessage] = useState(''); // Nouvel état pour le message
    const confettiRef = useRef(); // Ajoutez cette ligne pour créer la
    const [previousResults, setPreviousResults] = useState([]);

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    useEffect(() => {
        document.body.style.backgroundColor = currentColor;
    }, [currentColor]);

    const startGame = () => {
        setGameState("running");
        setMessage("");
        setCurrentColor("#ecf0f1"); // Réinitialiser la couleur
        const delay = Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000;
        setTimeout(() => {
            setCurrentColor(selectedColor); // Utilisez la couleur sélectionnée
            setStartTime(new Date().getTime());
        }, delay);
    };

    const handleClick = () => {
        if (gameState === 'running') {
            if (currentColor !== '#ecf0f1') {
                const endTime = new Date().getTime();
                const reaction = endTime - startTime;
                setReactionTime(reaction);
                const newScore = calculateScore(reaction);
                setScore(newScore);
                setGameState('finished');
                triggerConfetti();

                // Ajouter les résultats aux résultats précédents
                setPreviousResults((prevResults) => [
                    ...prevResults,
                    {reactionTime: reaction, score: newScore},
                ]);
            } else {
                // Si l'utilisateur clique trop tôt
                setMessage("C'est trop tôt, vous avez perdu !");
                setGameState('finished');
            }
        }
    };

    const bestScore = (results) => {
        if (results.length === 0) return null;
        return Math.max(...results.map((result) => result.score));
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
        return Math.max(minScore, maxScore - reactionTime / maxReactionTime * maxScore);
    };

    return (
        <div className="container-fluid vh-100">
            <div className="mb-4 d-flex align-items-center">
                <label htmlFor="color-select" className="me-2">
                    Choisissez une couleur :
                </label>
                <select
                    id="color-select"
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="form-select form-control w-auto" // Ajoutez les classes Bootstrap ici
                >
                    <option value="#2ecc71">Vert</option>
                    <option value="#e67e22">Orange</option>
                    <option value="#f1c40f">Jaune</option>
                    <option value="#95a5a6">Gris</option>
                </select>
            </div>
            <div className="row h-100">
                <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                    <div
                        className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
                        <Confetti ref={confettiRef}/>
                        {gameState === 'ready' && (
                            <button className="btn btn-primary btn-large" onClick={startGame}>Commencer</button>
                        )}

                        {gameState === 'running' && (
                            <button className="btn btn-secondary btn-large" onClick={handleClick}>Validé</button>
                        )}

                        {gameState === 'finished' && (
                            <div className="text-center">
                                {message && <p className="text-danger">{message}</p>}
                                {reactionTime && <p>Temps de réaction: {reactionTime} ms</p>}
                                {score !== null && <p>Score: {Math.round(score)}</p>}
                                <button className="btn btn-primary btn-large" onClick={startGame}>Recommencer</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="h-100 d-flex flex-column justify-content-start align-items-center">
                        <h3 className="mb-4">Derniers Résultats</h3>
                        <p>
                            <strong>Meilleur score :</strong>{" "}
                            {bestScore(previousResults) !== null
                                ? Math.round(bestScore(previousResults))
                                : "N/A"}
                        </p>
                        <p>
                            <strong>Moyennes des scores :</strong>{" "}
                            {averageScore(previousResults) !== null
                                ? Math.round(averageScore(previousResults))
                                : "N/A"}
                        </p>
                        {previousResults.map((result, index) => (
                            <div key={index}>
                                <span>Essai {index + 1} :</span>
                                <span> Temps de réaction - {result.reactionTime} ms,</span>
                                <span> Score - {Math.round(result.score)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ColorGame;
