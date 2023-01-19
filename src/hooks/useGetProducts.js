import { useEffect, useState } from "react";


export const useGetProducts = (API) => {

    const [products, setProducts] = useState([])

    useEffect(async () => {

      const response = await fetch(API)
      const data = await response.json();
      setProducts(data)

    }, [])
    
    return products


}
