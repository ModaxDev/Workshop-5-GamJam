import React, {useState, useEffect, useRef} from 'react';
import Confetti from "@/components/Confetti";
import ScoreBoard from "../pages/scoreboard";
import Select from 'react-select';
import { useAppContext } from "../context/context.js"




const ColorGame = () => {
    const { pseudo, setpseudo } = useAppContext();
    const [gameState, setGameState] = useState('ready'); // 'ready', 'running', 'finished'
    const [selectedColor, setSelectedColor] = useState("#2ecc71"); // Vert par défaut
    const [currentColor, setCurrentColor] = useState('#ecf0f1'); // Rouge au départ
    const [startTime, setStartTime] = useState(null);
    const [reactionTime, setReactionTime] = useState(null);
    const [score, setScore] = useState(null);
    const [message, setMessage] = useState(''); // Nouvel état pour le message
    const confettiRef = useRef(); // Ajoutez cette ligne pour créer la
    const [previousResults, setPreviousResults] = useState([]);

    const options = [
        {value: '#2ecc71', label: 'Vert', color: '#2ecc71'},
        {value: '#e67e22', label: 'Orange', color: '#e67e22'},
        {value: '#f1c40f', label: 'Jaune', color: '#f1c40f'},
        {value: '#95a5a6', label: 'Gris', color: '#95a5a6'},
    ];

    const handleColorChange = (selectedOption) => {
        setSelectedColor(selectedOption.value);
    };

    const colorStyles = {
        control: (styles) => ({...styles, backgroundColor: 'white', minHeight: '60px'}),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return {
                ...styles,
                backgroundColor: isFocused ? data.color : null,
                color: isFocused ? 'white' : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
        singleValue: (styles) => ({
            ...styles,
            fontSize: '18px', // Taille de la police personnalisée
        }),
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
    const SaveScore = async (score, p) => {
        const res = await fetch("/api/UpdateScoreByPseudo", {
            method: "POST",
            body: JSON.stringify({score: score, pseudo: p})
        });

        const resultat = await res.json();
    };

    const handleClick = async () => {
        if (gameState === 'running') {
            if (currentColor !== '#ecf0f1') {
                const endTime = new Date().getTime();
                const reaction = endTime - startTime;
                setReactionTime(reaction);
                const newScore = calculateScore(reaction);
                setScore(newScore);
                setGameState('finished');
                console.log("pseudo"+ pseudo)
                SaveScore(newScore, pseudo);
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
        const result = Math.max(minScore, maxScore - reactionTime / maxReactionTime * maxScore);
        return Math.round(result);
    };

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-3">
                    <div className={"h-100 d-flex flex-column justify-content-start align-items-center"}>
                        <ScoreBoard newscore={score}/>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div
                        className="container-fluid d-flex flex-column justify-content-center align-items-center">
                        <Confetti ref={confettiRef}/>
                        {gameState === 'ready' && (
                            <button style={{
                                fontFamily: 'Luckiest Guy',
                                fontStyleS: "normal",
                                fontSize: 64,
                            }} className="btn btn-danger btn-large rounded-circle circular-button"
                                    onClick={startGame}><p>GO</p></button>
                        )}

                        {gameState === 'running' && (
                            <button style={{
                                fontFamily: 'Luckiest Guy',
                                fontStyleS: "normal",
                                fontSize: 64,
                            }} className="btn btn-danger btn-large rounded-circle circular-button"
                                    onClick={handleClick}>STOP</button>
                        )}

                        {gameState === 'finished' && (
                            <div className="text-center">
                                <div className="text-center bg-white rounded shadow p-2 px-3 mb-4">
                                    <div>
                                        {message && <span className="text-danger pb-1">{message}</span>}
                                    </div>
                                    <div>
                                        {reactionTime && <span
                                            className={"pb-1"}><strong>Temps de réaction</strong> : {reactionTime} ms</span>}
                                    </div>
                                    <div>
                                        {score !== null && <span
                                            className={"pb-1"}><strong>Score</strong> : {Math.round(score)}</span>}
                                    </div>
                                </div>
                                <button style={{
                                    fontFamily: 'Luckiest Guy',
                                    fontStyleS: "normal",
                                    fontSize: 64,
                                }} className="btn btn-danger btn-large rounded-circle circular-button"
                                        onClick={startGame}>GO
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="h-100 d-flex flex-column justify-content-start align-items-center">
                        <div className="mb-4 d-flex align-items-center">
                            <label style={{
                                fontFamily: 'Dongle',
                                fontStyleS: "normal",
                                fontSize: 38,
                            }}
                                   htmlFor="color-select" className="me-2">
                                Choisis ta couleur :
                            </label>
                            <Select
                                value={options.find((option) => option.value === selectedColor)}
                                onChange={handleColorChange}
                                options={options}
                                styles={colorStyles}
                            />
                        </div>
                        <div className={"w-100  h-100 bg-white rounded shadow text-center mb-5"}>
                            <h3 style={{
                                fontFamily: 'Concert One',
                                fontStyleS: "normal",
                                fontSize: 40,
                            }} className="my-3">Derniers résultats</h3>
                            <hr/>
                            <p style={{
                                fontFamily: 'Dongle',
                                fontStyleS: "normal",
                                fontSize: 30,
                            }}>
                                <strong>Meilleur score :</strong>{" "}
                                {bestScore(previousResults) !== null
                                    ? Math.round(bestScore(previousResults))
                                    : "N/A"}
                            </p>
                            <p style={{
                                fontFamily: 'Dongle',
                                fontStyleS: "normal",
                                fontSize: 30,
                            }}>
                                <strong>Moyenne des scores :</strong>{" "}
                                {averageScore(previousResults) !== null
                                    ? Math.round(averageScore(previousResults))
                                    : "N/A"}
                            </p>
                            {previousResults.map((result, index) => (
                                <div style={{
                                    fontFamily: 'Dongle',
                                    fontStyleS: "normal",
                                    fontSize: 30,
                                }} className="row" key={index}>
                                    <div className="col-6 text-center">
                                        <span>Essai {index + 1} :</span>
                                    </div>
                                    <div className="col-6 text-left">
                                        <span>{Math.round(result.score)}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="mb-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorGame;
