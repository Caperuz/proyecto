import { useState, useEffect } from 'react'

    function useFetch(url, initialState){
    const [data, setData] = useState (initialState)
    function getData() {
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: '{ allCards {id,price,imgUrl,link,scale,stayId,description}, allStayDatas{bestPrice,customId,id,label} }'
                }),
            })
        .then(response => response.json())
        .then(response =>{ setData(response.data) })
    }
    useEffect(() => { 
        getData()
    }, []);
    
    return{
        data
    }
}
export default useFetch