import React, {ReactNode} from "react";
import exp from "constants";

const Tick = () => {
    return (
       <Clock/>
    )
}
setInterval(Tick, 1000)

type ClockPropsType = {
    date: Date;
}
type ClockState = {
    date: Date;
}

class Clock extends React.Component<{}, ClockState> {
    timerID?: number;
    constructor(props: ClockPropsType) {
        super(props);
        this.state  = {date: new Date()}
    }


    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
          <h1>Timer {this.state.date.toLocaleTimeString()}</h1>
  )
    }
}

// const Clock = (props: ClockPropsType) => {
//     return (
//         <>
//             <h1>Timer {props.date.toLocaleTimeString()}</h1>
//         </>
//
//     )
// }

export default Tick
