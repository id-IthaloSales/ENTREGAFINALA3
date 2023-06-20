
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { useState } from "react";

import domnslayer from '../assets/domnslayer.jpg';




function SerieCard() {
    const [isFavorited, setIsFavorited] = useState(false);
    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
    };
    const handleButtonClick = () => {
        window.scrollTo(0, 0);
    };


    return (
        <div className="bloco-list">
            {/*<img src={domnslayer} alt="domnslayer" />*/}
            <h2>
                <Link to="/serie" className="bt_vermais" onClick={handleButtonClick}>
                    Nome serie
                </Link>
            </h2>

            <button id="bttcategorizar" className={`serie-card ${isFavorited ? 'active' : ''}`} onClick={handleFavorite}>
                <FaStar className="serie-actions__icon" style={{ color: isFavorited ? 'gold' : 'inherit' }} />
            </button>

        </div>
    );
}
export default SerieCard;