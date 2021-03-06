import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Search from './Search/Search';
import Card from './Cards/Card';
import "../styles/Home.css";
import "../styles/Result.css";
import Api from "./Helpers/Api";

function Home({title}) {
  const [productsCities, setProductsCities] = useState(null);
  const location = useLocation();

  useEffect(()=>{
    //Cargo productos por ciudad
    const getProductsperCities = async()=>{
        await fetch(Api + "products/getListProducts/" + location.search, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function (productsCities) {
            setProductsCities(productsCities);
        })
    }
    getProductsperCities();
  },[location]);

  const category = productsCities?.slice(0,1).map((category) => category?.category.title);

  return (
    <>
        <Search />
        <section className='section__cards-results'>
          <h2>{title === undefined ? `Resultados de: ${category}` : title}</h2>
          <ul className="ul__accommodation-list">{console.log(productsCities)}
            {productsCities?.map((city) => {
              return <li key={city?.id}><Card id={city?.id} title={city?.name} src={city?.images[0]?.nombre_url}
               address={city?.address} description={city?.desc} category={city?.category.title} punctuation={city?.punctuation} 
               stars={city?.stars} score={city?.score} latitude={city?.y} longitude={city?.x} services={city?.characteristic} /></li>;
            })}
          </ul>
        </section>
    </>
  )
}

export default Home;