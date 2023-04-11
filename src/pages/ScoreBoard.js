import { useState, useEffect } from "react";
const ScoreBoard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/scoreboardApi");
            const resultat = await res.json();
            setScores(resultat);
            console.log(resultat);
        })();
    }, []);

    return (
        <>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Pseudo</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score,index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{score.Pseudo}</td>
                    <td>{score.Score}</td>
                </tr>
                ))
                }
            </tbody>
            </table>
    </>
    );
};

export default ScoreBoard;