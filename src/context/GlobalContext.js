import React ,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';
// initial state / expense -ve no / income +ve no
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

// Provider Component gives value to other components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


//Delete Transaction using Action
function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

//Add Transaction 
function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}