import s from './../OnOf/OnOf.module.css';
import {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChangeUncontrolled: (on: boolean) => void;
}

const UncontrolledOnOf = (props: UncontrolledOnOffPropsType) => {

    //let on = false;

    let [on, setOn] = useState(true) //hook

    const onStyle = {
        background: on ? 'green' : 'white',
    }

    const offStyle = {
        background: on ? 'white' : 'red',
    }

    const indicatorStyle = {
        background: on ? 'green' : 'red',
    }

    const onClicked = () => {
        setOn(true)
        props.onChangeUncontrolled(true)
    }

    const ofClicked = () => {
        setOn(false)
        props.onChangeUncontrolled(false)
    }

    return (
        <>
            <h1 className={s.header}>UncontrolledOnOf</h1>
            <div className={s.buttons}>
                <button style={onStyle} onClick={onClicked}>ON
                </button>
                <button style={offStyle} onClick={ofClicked}>OFF
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


export default UncontrolledOnOf;