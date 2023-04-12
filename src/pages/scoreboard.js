import React, { useState, useEffect } from "react";


const ScoreBoard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/FindAllScore");
            const resultat = await res.json();
            setScores(resultat);
        })();
    }, []);

    return (
        <div style={{marginTop: 77}} className={"bg-white rounded w-100 mx-auto text-center shadow"}>
            <h3 style={{
                fontFamily: 'Concert One',
                fontStyleS: "normal",
                fontSize: 40,
            }} className="my-3">Classement total</h3>
            <hr/>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Pseudo</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score,index) => (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{score.Pseudo}</td>
                    <td>{score.Score}</td>
                </tr>
                ))
                }
            </tbody>
            </table>
    </div>
    );
};



export default ScoreBoard;
