import P from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

export const initialState = {
    counter: 0,
    loading: false,
}

const Context = createContext();

export const CounterContextProvider = ({children}) => {
    const [state, dispatch] = useState(initialState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
    children: P.node.isRequired,
};

export const useCounterContext = () =>{
    const context = useContext(Context);

    if(typeof context === 'undefined'){
        throw new Error('You have to use useCounterContext inside <CounterContext.Provider />');
    }

    return [context[0], context[1]];
};