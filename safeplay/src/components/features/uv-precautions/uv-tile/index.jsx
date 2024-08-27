import {useState} from 'react';
import './index.css';

// UVTile component that displays UV index and type on the front side and precautions on the back side
// It flips to show precautions when hovered over
const UVTile = ({index, type, precautions}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`uv-tile ${isFlipped ? 'flipped' : ''}`}
             onMouseEnter={() => setIsFlipped(true)}
             onMouseLeave={() => setIsFlipped(false)}>
            {/* Front side of the tile displaying UV index and type */}
            <div className={`front ${type}`}>
                <h2>{index}</h2>
                <p>{type}</p>
            </div>
            {/* Back side of the tile displaying precautions */}
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