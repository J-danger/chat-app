import React from 'react'
var io = require('socket.io-client');


export const CTX = React.createContext();


const initState = {
    general: [
        {from: 'myself', msg: 'hello world'},
        {from: 'myself', msg: 'hello world'},
        {from: 'myself', msg: 'hello world'},
    ],
    topic2: [
        {from: 'myself1', msg: 'hello world'},
        {from: 'myself1', msg: 'hello world'},
        {from: 'myself1', msg: 'hello world'},
    ]
}

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE MESSAGE':
            return{
                ...state,
                [topic]: [
                    ...state[topic],
                    { from, msg }
                ]
            }
            default: 
            return state
    }
}

export function sendChatAction(value){
    socket.emit('chat message', value);
}

let socket;


export default function Store(props){

    if (!socket){
        socket = io(':3001')
    }

    const [allChats] = React.useReducer(reducer, initState)

    return(
        <CTX.Provider value={{allChats, sendChatAction}}>
            {props.children}
        </CTX.Provider>
    )
}