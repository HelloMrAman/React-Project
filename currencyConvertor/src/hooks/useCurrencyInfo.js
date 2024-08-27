import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => { //use of useEffect: we don't need to make a function inside function to stop direct execution
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])); //To hold data we'll use setData
        console.log(data);
    }, [currency]) //currency is dependency for useEffect
    console.log(data);
    return data; //we are returing data so we can't show the setData in ui; So we have a functionality of "export default useCurrencyInfo": It returns whole method
}

export default useCurrencyInfo;

//Now custom hook design is done here ***************************************************

