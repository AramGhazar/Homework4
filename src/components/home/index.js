import { useEffect, useState } from "react";
import { API } from "../utils/constatnts";
import './style.css';

const url = `${API}`;

const Home = () => {
    // const [inputValue, setInputValue] = useState('');

    const [drinks, setDrinks] = useState([]);

    const gettingDrinks = async()=> {
        try {
        const response = await fetch('url');
        const data = await response.json();

        setDrinks(data);
        } catch(e) {
            console.log(e)
        }

    }

    useEffect(()=> {
        gettingDrinks()
    }, [])

  

  return (
    <div>
        {/* <input value={inputValue} onChange={handleInputChange}  />

        <h3>Text: {inputValue}</h3> */}


        {drinks.map((item) => (
            <div key={item.idDrink}>
                <div className='mainCont'>
                    <div className='mainCont1'>
                        <div>
                            <img src={item.strDrinkThumb} alt='drinkimg'></img>
                        </div>
                        <div>
                            <h2>{item.strDrink}</h2>
                            <p>{item.strGlass}</p>
                            <p>{item.strAlcoholic}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Home
