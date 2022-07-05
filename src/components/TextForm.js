import React, {useState} from 'react'

export default function TextForm(props) {
    let [text, setText] = useState('');

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success')
    }

    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success')
}

    const handleClearClick = () => {
        let newText = ""; 
        setText(newText);
        props.showAlert('Text has been cleared!', 'success')
}
    const handleReverseClick = () => {
        // let newText = text.split(" ").reverse().join(" ");
        let strArr = text.split(" ");
        let reverse = strArr.reverse();
        let newText = reverse.join(" ");
        setText(newText);
        props.showAlert('Converted to reverse!', 'success')
    }

  return (
      <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1 className='my-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white', color:props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse the text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2 >Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text==='' ?'Nothing to preview' : text }</p> {/* or another way of writing */}
        {/* <p>{text.length > 0 ? text : "Enter something above in the text form to preview it"}</p> */}
    </div>
    </>
  )
}
