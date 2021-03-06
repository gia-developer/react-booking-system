import { React, useState, useEffect } from 'react';
import Api from "../Helpers/Api";
import "../../styles/Favourites/FavouritesList.css";
import HeaderProduct from '../Products/HeaderProduct';
import Card from "../Cards/Card";
import SuccessfulBooking from '../Booking/SuccessfulBooking';

function FavouritesList() {
    const [favourites, setFavourites] = useState(null);
    const id = JSON.parse(localStorage.getItem("user")).id;

    useEffect(()=>{
        //Cargo favoritos
        const getFavourites = async()=>{
            await fetch(Api + "favourites/findByUserId/" + id,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (favourites) {
                setFavourites(favourites)
            })
        }      
        getFavourites();
    }, [id]);
    
    const arr = favourites || [];
    return (
        arr.length === 0 ?
        <SuccessfulBooking type="favourite" /> :
        <div className='div__favourites-list'>
            <HeaderProduct name="Mis favoritos" type="home" />
            <section className="section__favourites-list">
                <ul className="ul__accommodation-list">
                    {favourites?.map((favourite) => {
                        return <li key={favourite.prodId.id}>
                            <Card id={favourite.prodId.id} title={favourite.prodId.name} src={favourite.prodId.images[0]?.nombre_url} address={favourite.prodId.address} description={favourite.prodId.desc} category={favourite.prodId.category.title} punctuation={favourite.prodId.punctuation} score={favourite.prodId.score} stars={favourite.prodId.stars} services={favourite.prodId.productsC} latitude={favourite.prodId.y} longitude={favourite.prodId.x} />
                        </li>
                    })}
                </ul>
            </section>
        </div>
    )
}

export default FavouritesList;