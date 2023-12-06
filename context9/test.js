import React  from "react";

import { mycontext, testcontext } from "./context";

export default (props) => {
    return {
        <mycontext.Consumer>
        {(context) => {
            return {
                <testcontext.consumer>
                ({testcontext} => {
                    return {
                        <>
                        <h1>test component: { textcontext.tes} {context.count} {contet.name}</h1>
                        <button onClick={context.increment}>increment</button>
                        <button onClick={context.decrement}>decrement</button>

                        </>
                    }


                })
            }
            </testcontext.consumer>
            
        

        }}
        </mycontent.consumer>
    }
}