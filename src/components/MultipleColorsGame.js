import
React, {useState, useEffect, useRef} from 'react';
import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "@/components/Confetti";


const MultipleColorsGame = () => {
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

    const randomColor = () => {
        const colors = ['#e74c3c', '#3498db', '#9b59b6', '#f1c40f', '#2ecc71',"#d35400", "#c0392b","#1abc9c","#5f27cd","#01a3a4"];
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    };

    const startGame = () => {
        setGameState('running');
        setMessage('');
        setCurrentColor('#ecf0f1'); // Réinitialiser la couleur

        const changeColor = () => {
            const newColor = randomColor();
            setCurrentColor(newColor);

            if (newColor !== '#2ecc71') {
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
        if (gameState === 'running') {
            if (currentColor === '#2ecc71') {
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
            <div className="row h-100">
                <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                    <div
                        className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
                        <Confetti ref={confettiRef}/>
                        {gameState === 'ready' && (
                            <button className="btn btn-primary btn-large" onClick={startGame}>Commencer</button>
                        )}

                        {gameState === 'running' && (
                            <button className="btn btn-secondary btn-large" onClick={handleClick}>Stop</button>
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

export default MultipleColorsGame;
