import React, {useState} from 'react'

export default function TextForm(props) {
    let [text, setText] = useState('');

    const textWords = (event)  => {
        setText = ({
            text: event.target.value,
          length: event.target.value.split(' ').length
        })
      }

    // const handleOnChange = (event) => {
    //     // console.log("On change");
    //     setText(event.target.value);
    // }

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
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={textWords} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color:props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse the text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2 >Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text==='' ?'Enter something above in the text form to preview it' : text }</p> {/* or another way of writing */}
        {/* <p>{text.length > 0 ? text : "Enter something above in the text form to preview it"}</p> */}
    </div>
    </>
  )
}
