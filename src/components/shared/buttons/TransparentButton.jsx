import React from "react";

function TransparentButton({children, ...rest}) {
    return <button 
        className="w-[8rem] h-[2.5rem] border border-solid border-white rounded-2xl font-bold text-[0.8rem]
            bg-transparent text-white 
            disabled:bg-white disabled:text-black 
            enabled:hover:bg-gray-700 enabled:hover:text-white"  
        {...rest}>{ children }</button>
}

export default TransparentButton;
