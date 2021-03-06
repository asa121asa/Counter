import React from 'react';
import s from "./bottom.module.css"

type BottomsType={

    title: string
    disabled: boolean
    execFunc: ()=> void

}

function Bottoms(props: BottomsType) {

    return (


            <button className={s.bottoms}
                    disabled={props.disabled}
                    onClick={()=>{props.execFunc()}}
            >
                {props.title}
            </button>


    );
}

export default Bottoms;
