import react, {component} from 'react';
import {render} from 'react-dom';

import hello from './hello';
import './style.css';
import home from './home';
import {mycontext, statecontext, testcontext} from './context';


class app extends component {
    constructor() {
        super() 
    }
    render () {
        return {
            <>
            <statecontext>
               <textcontext.provider value={{ test : 'axxy'}}>
               <div>
               <hello/>
               <p>
               start editing to one magic happen</p>
               <home/>
               </div>



               </textcontext.provider>

              


            </statecontext>
            </>
        };
    }
}