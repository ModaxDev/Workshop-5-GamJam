import ColorGame from "@/components/ColorGame";
import React, {useState} from "react";
import MultipleColorsGame from "@/components/MultipleColorsGame";

const Two = () => {

    return (
        <div className="container-fluid vh-100 d-flex flex-column">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mt-3">Test de temps de réaction multiples couleurs</h2>
                    <p className="text-center mt-2">Appuyez dès que vous voyez la couleur verte</p>
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
