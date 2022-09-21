import React from "react";


const Count = ({ entries, name }) => {
    return (
        <div className="shown center shadow-5 w5">
            <div className="white f1">
                {entries}
            </div>
            <div className="white f3">
                {` faces detected`}
            </div>
        </div>
    )
}
export default Count;