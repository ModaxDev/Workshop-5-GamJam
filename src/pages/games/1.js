import ColorGame from "@/components/ColorGame";

const One = () => {

    return (
        <div className="container-fluid vh-100 d-flex flex-column">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mt-3">Test de temps de réaction avec la couleur</h2>
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
