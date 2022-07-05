import s from './OnOf.module.css';
import React from "react";

type OnOffPropsType = {
    on: boolean;
    onChange: (on: boolean) => void;
}

const OnOf = (props: OnOffPropsType) => {

    //let on = false;


    const onStyle = {
        background: props.on ? 'green' : 'white',
    }

    const offStyle = {
        background: props.on ? 'white' : 'red',
    }

    const indicatorStyle = {
        background: props.on ? 'green' : 'red',
    }

    return (
        <>
            <hr></hr>
            <h1 className={s.header}>OnOf</h1>
            <div className={s.buttons}>
                <button
                    style={onStyle}
                    onClick={() => props.onChange(true)}>ON
                </button>
                <button
                    style={offStyle}
                    onClick={() => props.onChange(false)}>OFF
                </button>
                <span style={indicatorStyle}></span>
            </div>
        </>
    )
    //2
    // return (
    //     <>
    //         <h1 className={s.header}>OnOf</h1>
    //         <div className={s.buttons}>
    //             {props.on
    //                 ? <>
    //                     <button className={s.on}>ON</button>
    //                     <button>OFF</button>
    //                     <span className={s.on}></span>
    //                 </>
    //
    //                 : props.off
    //                     ? <>
    //                         <button>ON</button>
    //                         <button className={s.off}>OFF</button>
    //                         <span className={s.off}></span>
    //                     </>
    //
    //                     : <>
    //                         <button>ON</button>
    //                         <button>OFF</button>
    //                         <span></span>
    //                     </>
    //             }
    //         </div>
    //     </>
    //
    // )

    //3
    // if (typeof props.onn !== "undefined" || typeof props.off !== "undefined") {
    //     if (props.onn) {
    //         return (
    //             <>
    //                 <h1 className={s.header}>OnOf</h1>
    //
    //                 <div className={s.buttons}>
    //
    //                     <button className={s.onn}>ON</button>
    //                     <button>OFF</button>
    //
    //                     <span className={s.onn}></span>
    //
    //                 </div>
    //             </>
    //         )
    //     } else {
    //         return (
    //             <>
    //                 <h1 className={s.header}>OnOf</h1>
    //
    //                 <div className={s.buttons}>
    //
    //                     <button>ON</button>
    //                     <button className={s.off}>OFF</button>
    //
    //                     <span className={s.off}></span>
    //
    //                 </div>
    //             </>
    //         )
    //     }
    //
    // } else {
    //     return (
    //         <>
    //             <h1 className={s.header}>OnOf</h1>
    //
    //             <div className={s.buttons}>
    //
    //                 <button>ON</button>
    //                 <button>OFF</button>
    //
    //                 <span></span>
    //
    //             </div>
    //         </>
    //     )
    // }

}


export default OnOf;