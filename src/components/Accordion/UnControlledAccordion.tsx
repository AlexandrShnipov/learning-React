import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

const UnControlledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    //let collapsed = true;
    let [collapsed, setCollapsed] = useState(true)

    return (
        <>
            <hr></hr>
            <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody />}
            <hr></hr>
        </>
    )
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')


    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;