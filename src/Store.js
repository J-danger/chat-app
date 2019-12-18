import React from 'react'
var io = require('socket.io-client');


export const CTX = React.createContext();


const initState = {
    General: [
        // {from: 'myself', msg: 'hello world'},
        // {from: 'myself', msg: 'hello world'},
        // {from: 'myself', msg: 'hello world'},
    ],
    Members: [
        // {from: 'myself1', msg: 'hello world'},
        // {from: 'myself1', msg: 'hello world'},
        // {from: 'myself1', msg: 'hello world'},
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

    const [allChats, dispatch] = React.useReducer(reducer, initState)

    if (!socket){
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type:'RECEIVE MESSAGE', payload: msg});
        })
    }

    const user = 'Anonymous' 

 

    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}