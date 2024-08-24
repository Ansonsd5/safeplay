import { useState } from 'react';
import './UVTile.css';

const UVTile = ({ index, type, precautions }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`uv-tile ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className='front'>
                <h2>{index}</h2>
                <p>{type}</p>
            </div>
            <div className='back'>
                <h3>Precautions</h3>
                <ul>
                    {precautions.map((precaution, index) => (
                        <li key={index}>{precaution}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UVTile;
