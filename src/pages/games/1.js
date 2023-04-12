import ColorGame from "@/components/ColorGame";


const One = () => {

    return (
        <div className="container-fluid  d-flex flex-column">
            <div className="row">
                <div className="col-12">
                    <h1 style={{
                        fontFamily: 'Luckiest Guy',
                        fontStyleS: "normal",
                        fontSize: 96,
                    }} className="text-center mt-3">ONE COLOR
                        <p style={{
                            fontFamily: 'Concert One',
                            fontStyleS: "normal",
                            fontSize: 40,
                        }} className="text-center">Test de temps de réaction avec une couleur</p>
                    </h1>
                </div>
            </div>
            <div className="row flex-grow-1">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <ColorGame />
                </div>
            </div>
        </div>
    );
}

export default One
