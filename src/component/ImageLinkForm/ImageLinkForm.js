import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ inputChange, pictureSubmit }) => {
    return (
        <div className="shown w-100 pt4 w-100">
            <div className='center pt2' >
                <div className='form center pa4 br3 shadow-5 w-70 mw7'>
                    <input className='f4 br3 pa2 w-70'
                        type='text'
                        onChange={inputChange}
                        placeholder="enter image link"
                    />
                    <button
                        className='w-30 grow br3 f4 link ph3 pv2 dib hover-blue b--white bg-yellow'
                        onClick={pictureSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;