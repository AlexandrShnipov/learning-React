import React from "react";

export type AccordionPropsType = {
    titleValue: string;
    collapsed?: boolean;
    onClick: () => void;
}

const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
        return (
            <>
                <AccordionTitle
                    title={props.titleValue}
                    onClick={props.onClick}/>
                { !props.collapsed && <AccordionBody/> }
            </>
        )
}

// const Accordion = (props: AccordionPropsType) => {
//     console.log('Accordion rendering')
//     if (!props.collapsed) {
//         return (
//             <>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </>
//         )
//     } else {
//         return (
//             <AccordionTitle title={props.titleValue}/>
//         )
//     }
// }

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.onClick()}}>
            {props.title}
        </h3>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <hr></hr>
        </>

    )
}

export default Accordion;