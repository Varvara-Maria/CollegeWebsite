import React, { useEffect, useState } from "react";
import { useRef } from "react";
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/plugins.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { Button } from "@mui/material";



const PagesEditor = ({pageInfo, setPageInfo}) => {

    const [model,setModel] = useState(pageInfo);

  useEffect(() => {
    console.log(pageInfo);
    
  }, []);
  const editor = useRef({});

  const initializeEditor = (e, editorRef) => {
    editor.current = editorRef;
    window.editor = editorRef;
  };

const editorConfig = {
    pluginsEnabled: [
        'fullscreen',
        'codeBeautifier',
      ],
    toolbarButtons: {

        'moreText': {
      
          'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      
        },
      
        'moreParagraph': {
      
          'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      
        },
      
        moreRich: {
      
          buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      
        },
      
        moreMisc: {
      
          buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
      
          align: 'right',
      
          buttonsVisible: 2
      
        }
      
      }
  };
  const uploadImage = (file) =>{
    console.log(file)
  }

  return (
    <>
     <Button variant="contained" sx = {{margin : "20px auto"}} onClick = {()=>setPageInfo(model)}>Зберегти вміст сторінки</Button>
     <FroalaEditorComponent onModelChange = {(content)=>{
         console.log(content)
         setModel(content);
        

        }} model = {model} config = {{
        toolbarButtons: {
          moreText: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'strikeThrough',
              'subscript',
              'superscript',
              'fontFamily',
              'fontSize',
              'textColor',
              'backgroundColor',
              'inlineClass',
              'inlineStyle',
              'clearFormatting',
            ],
            align: 'left',
            buttonsVisible: 3,
          },
          moreParagraph: {
            buttons: [
              'alignLeft',
              'alignCenter',
              'alignRight',
              'formatOLSimple',
              
              'alignJustify',
              'formatOL',
              'formatUL',
              'paragraphFormat',
              'paragraphStyle',
              'lineHeight',
              'outdent',
              'indent',
              'quote',
            ],
            align: 'left',
            buttonsVisible: 3,
          },
          moreRich: {
            buttons: [
              'insertLink',
              'insertImage',
              'insertVideo',
              'insertTable',
              'emoticons',
              'fontAwesome',
              'specialCharacters',
              'embedly',
              'insertFile',
              'insertHR',
            ],
            align: 'left',
            buttonsVisible: 3,
          },
          moreMisc: {
            buttons: [
              'undo',
              'redo',
              'fullscreen',
              'print',
              'getPDF',
              'spellChecker',
              'selectAll',
              'html',
              'help',
            ],
            align: 'right',
            buttonsVisible: 2,
          },
        },
    }}  />
    </>
  );
  
}
export default PagesEditor;