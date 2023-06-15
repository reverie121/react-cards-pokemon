import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
    const [cards, setCards] = useState([]);

    const addCard = async () => {
        const card = await axios.get(
                `${url}`
            );

        setCards( data => [...data, { ...card.data, id: uuid() }]);
        };

  return [cards, addCard];

};

export default useAxios;