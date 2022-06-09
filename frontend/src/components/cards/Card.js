import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

function Card({id, title, src, location, description, category, punctuation, score, stars, services}) {
    return (
        <article>
            <div>
                <div className="div__info-accommodation">
                    <div>
                        <div className="div__category-stars">
                           <p className="p__category-name">{category}</p>
                           <Stack spacing={1}>
                                <Rating name="half-rating-read" size="small" defaultValue={stars} value={stars} precision={0.5} emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.5 }} />} readOnly />
                            </Stack>
                        </div>
                        <h3>{title}</h3>
                    </div>
                    <div className="div__puntuation-number">
                        <span>{punctuation}</span>
                        <p>{score}</p>
                    </div>
                </div>
                <p className="p__accommodation-direction">{location} <Link to="#">mostrar <span>en el mapa</span></Link></p>
                <ul className="ul__services-list">
                    {services?.map((service) => (
                        <li key={service.characteristic.id} className={`li__${(service.characteristic.title.toLowerCase().replace(/\s+/g, '-'))}`}>{service.characteristic.title}</li>
                    ))}
                </ul>
                <div className="div__show-text">
                    <p className="p__description-text">{description}</p>
                    <Link to="#">más...</Link>
                </div>
                <Link to={`/product/${id}`}className="btn button__solid-type">ver más</Link>
            </div>
            <img src={src} alt={title} />
        </article>
    )
}

export default Card;