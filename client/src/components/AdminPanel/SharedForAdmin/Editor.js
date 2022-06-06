import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState,convertFromHTML } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

const PagesEditor = ({pageInfo}) => {
    const [html,setHtml]=useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(pageInfo)))
  );
  useEffect(() => {
    console.log(pageInfo);
  }, []);


  return (
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onChange={(e)=>{
              console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
              setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
            }}
            wrapperStyle = {{margin: "30px 0"}}
            toolbarStyle = {{boxShadow : "0 3px 10px rgb(0 0 0 / 0.4)", marginBottom :"20px"}}
            editorStyle ={{boxShadow : "0 3px 10px rgb(0 0 0 / 0.4)", margin :"0 auto"}}
        />
     
  );
}
export default PagesEditor;