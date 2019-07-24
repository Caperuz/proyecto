import React from 'react'
import Menu from './Menu'
import useFetch from './useFetch'

function Button() {
    const menus = useFetch('https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',[])
    return (
        <React.Fragment>
            <nav className="menu">
                <ul>
                    {   
                        menus.data.allStayDatas && menus.data.allStayDatas.filter (user => user).map ( Renderall => 
                        <Menu key={Renderall.customId} bestPrice={Renderall.bestPrice} customId={Renderall.customId} id={Renderall.id} label={Renderall.label} />
                    )}
                </ul>
            </nav>
        </React.Fragment>
    )
}
export default Button