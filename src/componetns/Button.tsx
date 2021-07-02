import React, { ReactNode } from "react";

type Iprops = {
   children: ReactNode,
//    click: () => void
    click (e:React.MouseEvent): void
}

const Button = (props:Iprops) => {
    return (
        <button onClick={props.click}> { props.children } </button>
    )
}


export default Button;