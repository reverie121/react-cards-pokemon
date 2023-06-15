import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (baseUrl) => {
    const [cards, setCards] = useState([]);
    const addCard = async (urlExtension="") => {
        const url = baseUrl + urlExtension;
        const card = await axios.get(
                `${url}`
            );

        setCards( data => [...data, { ...card.data, id: uuid() }]);
        };

  return [cards, addCard];

};

export default useAxios;