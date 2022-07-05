import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: number;  // RatingValueType- или так
    onClick: (value: RatingValueType) => void;
}

const Rating = (props: RatingPropsType) => {
    console.log('Rating rendering')
    return (
        <div>
            <RatingTitle/>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
//     if (props.value === 1) {
//         return (
//             <div>
//                 <RatingTitle/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//         )
//     }
//     if (props.value === 2) {
//         return (
//             <div>
//                 <RatingTitle/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//         )
//     }
//     if (props.value === 3) {
//         return (
//             <div>
//                 <RatingTitle/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//         )
//     }
//     if (props.value === 4) {
//         return (
//             <div>
//                 <RatingTitle/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//             </div>
//         )
//     }
//     if (props.value === 5) {
//         return (
//             <div>
//                 <RatingTitle/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//             </div>
//         )
//     }
//     return (
//         <div>
//             <RatingTitle/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     )
}

const RatingTitle = () => {
    console.log('RatingTitle rendering')
    return (
        <h3>Rating</h3>
    )
}

type StarPropsType = {
    selected: boolean;
value: RatingValueType;
onClick : (value: RatingValueType) => void;
}

// const Star = (props: StarPropsType) => {
//     console.log('Star rendering')
//     if (props.selected === true) {
//         return (
//             <span><b>star </b></span>
//         )
//     } else {
//         return (
//             <span>star </span>
//         )
//     }
// }

const Star = (props: StarPropsType) => {
    console.log('Star rendering')
    return (
        <>
            <span onClick={() => props.onClick(props.value)}>
                {props.selected ? <b>star </b> : 'star '}
            </span>
        </>

    )
}

export default Rating;




