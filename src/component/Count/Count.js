import React from "react";


const Count = ({ entries, name }) => {
    return (
        <div className="shown center shadow-5" style={{ width: '300px' }}>
            <div className="white f1">
                {entries}
            </div>
            <div className="white f3" style={{ width: '50px' }}>
                {` faces detected`}
            </div>
        </div>
    )
}
export default Count;