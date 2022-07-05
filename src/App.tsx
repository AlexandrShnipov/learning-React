import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import Tick from "./components/Timer/Timer";
import OnOf from "./components/OnOf/OnOf";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import UnControlledRating from './components/Rating/UnControlledRating';
import UncontrolledOnOf from "./components/UncontrolledOnOf/UncontrolledOnOf";


function App(props: any) {
    console.log('App rendering')

    const [ratingValue, setRatingValue] =
        useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] =
        useState<boolean>(true);
    const [switchOnUncontrolled, setSwitchOnUncontrolled] =
        useState<boolean>(true);
    const [switchOn, setSwitchOn] =
        useState<boolean>(true);

    return (
        <div className="App">
            <Tick/>
            <PageTitle title={'This is my project Page 1'}/>
            <PageTitle title={'This is my project Page 2'}/>
            <Accordion
                titleValue={'Accordion'}
                collapsed={accordionCollapsed}
                onClick={() => setAccordionCollapsed(!accordionCollapsed)}
            />

            <UnControlledAccordion titleValue={'UnControlledAccordion'}/>
            <h2>Article 1</h2>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
            <h2>Article 2</h2>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UnControlledRating/>
            <UnControlledRating/>
            <UncontrolledOnOf
                onChangeUncontrolled={setSwitchOnUncontrolled}/>
            {switchOnUncontrolled.toString()}
            <OnOf
                on={switchOn}
                onChange={setSwitchOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log('PageTitle rendering')
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

export default App
