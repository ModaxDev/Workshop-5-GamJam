import ColorGame from "@/components/ColorGame";
import React, {useState} from "react";
import MultipleColorsGame from "@/components/MultipleColorsGame";

const Two = () => {

    return (
        <div className="container-fluid  d-flex flex-column">
            <div className="row">
                <div className="col-12">
                    <h1 style={{
                        fontFamily: 'Luckiest Guy',
                        fontStyleS: "normal",
                        fontSize: 96,
                    }} className="text-center mt-3">MULTIPlES COLORS
                        <p style={{
                            fontFamily: 'Concert One',
                            fontStyleS: "normal",
                            fontSize: 40,
                        }} className="text-center">Test de temps de réaction avec plusieurs couleurs</p>
                    </h1>
                </div>
            </div>
            <div className="row flex-grow-1">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <MultipleColorsGame />
                </div>
            </div>
        </div>
    );
}

export default Two
