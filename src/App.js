import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';

function App() {
  const [editorText, setEditorText] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)`);

  const [markedPreview, setMarkedPreview] = useState("");
  const [editorMaxmize, setEditorMaxmize] = useState(false);
  const [previewMaxmize, setPreviewMaxmize] = useState(false);
  useEffect(() => {
    setMarkedPreview(() => marked(editorText));
  }, [editorText]);



  return (
    <div className={editorMaxmize || previewMaxmize ? "container-fluid" : "container"}>
      <div className={editorMaxmize || previewMaxmize ? "m-3" : "d-flex flex-column my-5"}>

        <div
          className={editorMaxmize
            ? "col-12 p-0 mx-auto"
            : "col-10 col-lg-7 p-0 mx-auto"}
          style={previewMaxmize ?
            { "display": "none" } :
            {
              "display": "block",
              "boxShadow": "0 0 5px 5px rgba(0, 0, 0, 0.4)"
            }}>

          <div className="d-flex justify-content-between px-2 pt-1 header-editor">
            <div className="d-flex">
              <div className="mr-2">
                <i className="fa fa-th-large"></i>
              </div>
              <div>
                <h6>Editor</h6>
              </div>
            </div>
            <div>
              <i className={editorMaxmize ? "fa fa-window-minimize" : "fa fa-window-maximize"}
                style={{ "cursor": "pointer" }}
                onClick={() => { setEditorMaxmize(prevState => !prevState) }}></i>
            </div>
          </div>

          <textarea
            id="editor"
            className="border border-dark"
            style={editorMaxmize ? { "height": "90vh" } : {}}
            onChange={(e) => setEditorText(e.target.value)}
            value={editorText}>
          </textarea>

        </div>

        <div
          className={previewMaxmize
            ? "col-12 p-0 mx-auto" : "col-12 col-lg-9 p-0 mx-auto mt-4"}
          style={editorMaxmize ?
            { "display": "none" } :
            {
              "display": "block",
              "boxShadow": "0 0 5px 5px rgba(0, 0, 0, 0.4)",
            }}>
          <div className="d-flex justify-content-between px-2 pt-1 preview-editor">
            <div className="d-flex">
              <div className="mr-2">
                <i className="fa fa-th-large"></i>
              </div>
              <div>
                <h6>Preview</h6>
              </div>
            </div>
            <div>
              <i className={previewMaxmize ? "fa fa-window-minimize" : "fa fa-window-maximize"}
                style={{ "cursor": "pointer" }}
                onClick={() => { setPreviewMaxmize(prevState => !prevState) }}></i>
            </div>
          </div>
          <div id="preview" className="border border-dark" dangerouslySetInnerHTML={{ __html: markedPreview }} />
        </div>
      </div>
    </div >
  );
}

export default App;
