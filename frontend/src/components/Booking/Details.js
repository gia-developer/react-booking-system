import "../../styles/Booking/Details.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

function Details({ src, name, category, address, city, stars }) {
    return (
        <section className="section__booking-details">
            <div>
                <h2>Detalle de la reserva</h2>
                <img src={src} alt={name} />
                <div>
                    <p className="p__category-name">{category}</p>
                    <h3>{name}</h3>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" size="small" defaultValue={stars + .0} value={stars + .0} precision={0.5} emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.5 }} />} readOnly />
                    </Stack>
                    <p className="p__accommodation-direction">{address + ", " + city}</p>
                    <ul>
                        <li>
                            <h4>Check in</h4>
                            <span>-/-/-</span>
                        </li>
                        <li>
                            <h4>Check out</h4>
                            <span>-/-/-</span>
                        </li>
                    </ul>
                    <Link to="/ok" className="btn button__solid-type">Confirmar reserva</Link>
                </div>
            </div>
        </section>
    )
}

export default Details;