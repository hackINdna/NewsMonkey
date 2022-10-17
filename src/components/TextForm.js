import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("");

    const changedValue = (event) => {
        setText(event.target.value);
    };

    const clickbtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="my-5">
                    <textarea value={text} onChange={changedValue} className='ta' cols="50" rows="10"></textarea>
                </div>
                <button onClick={clickbtn} className="btn btn-primary">Convert to UpperCase</button>
            </div>
            <div className="container my-5">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h1>Preview Text</h1>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm
