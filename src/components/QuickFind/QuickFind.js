import React from "react";
import "./quickfind.css"
import { useContext, useEffect } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { TodoContext  } from "../../App"
import { MdNoEncryption, MdNoEncryptionGmailerrorred } from "react-icons/md";


export default function QuickFind(){

    const {inboxTodos, todayTodos, upcomingTodos} = useContext(TodoContext);

    const items = [...inboxTodos, ...todayTodos, ...upcomingTodos]

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
    }

    const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    }

    const handleOnFocus = () => {
    console.log('Focused')
    }

    const formatResult = (item) => {
    return (
        <>
            <span style={{display: 'block', textAlign: 'left' }}>{item.text}</span>
        </>
    )
    }


    return(
    <div id="quick-find">
        <form className="form-block" autocomplete="off">
            {/* <input name="fsearch" className="quick-find-input" type="text" id="q" placeholder="Quick Find"/> */}
            <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
                items={items}
                placeholder="Quick Find"
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                fuseOptions={{keys:["text"]}}
                resultStringKeyName="text"
                styling={{
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 0
                }}
            />
        </div>
        </form>


        
    </div>
    )
}