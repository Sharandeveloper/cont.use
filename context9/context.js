import react, {component} from 'react';


export const mycontext = react.createContext({});


export const testcontext = react.createContext({});


export class statecontent extends conponent {
    constructor(props) {
        super (props);
        this.state = {
            name: 'react',
            count: 1
        }
    };
    render (){
        return{
            <mycontext.Provider value = ({ count: this.state.count,
                this.increment.decrement: this.decrement })>
            {this.props.children}

            </myccontext.Provider>
        }
    }
 increment = () => {
    this.setstate {{ count: this.state.count + 1}};

 }
 decrement = () => {
    this.setstate({ count: this .state.count - 1});
 }
}

