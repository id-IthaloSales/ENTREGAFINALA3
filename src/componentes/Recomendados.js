import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Recomendados() {

    const handleButtonClick = () => {
        window.scrollTo(0, 0);
    };


    return (
        <section className="container-recomendado">
            
            <h2>
                <Link to="/serie" className="bt_vermais" onClick={handleButtonClick}>
                    Nome serie
                </Link>
            </h2>
            <div className="card-recomendado">
                <section>
                    <Link to="/serie" className="bt_vermais" onClick={handleButtonClick}>
                        <img src="#" alt="Imagem 1" />
                    </Link>

                </section>
            </div>
            <section className="bloco_recomendado_sinopse">

                <br />
                <a className="btn-adcionar"><Button as={Link} to="/serie" onClick={handleButtonClick} >Adicionar à Lista</Button></a>


            </section>
        </section>
    );
}
export default Recomendados;