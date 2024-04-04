import AppWindow from './AppWindow'
import { useState, useEffect, useRef } from 'react'
import EditorMonaco from '@monaco-editor/react';
import files from './files.js';


function EditorWindows() {
  const posicionIframeX = window.innerWidth / 2;
  const editorRef = useRef(null) 
  const [fileName, setFileName] = useState('index.html')
  const file = files[fileName]

  useEffect(()=>{
    editorRef.current?.focus();
  }, [file.name])

  const [textoHtml, setTextoHtml] = useState(files['index.html'].value);
  const [textoCss, setTextoCss] = useState(files['style.css'].value);
  const [textoJs, setTextoJs] = useState(files['script.js'].value);


  

  function update(e){
    if (file.name == 'index.html') {
      setTextoHtml(e)
    }else if(file.name == 'style.css'){
      setTextoCss(e)
    }else if(file.name == 'script.js'){
      setTextoJs(e)
    }
  }
  function updateCss(e){
    setTextoCss(e.target.value)
  }
  function updateJs(e){
    setTextoJs(e.target.value)
  }
  const html =  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
      ${textoCss}
      </style>
    </head>
    <body>
    ${textoHtml}
      <script>
        ${textoJs}
      </script>
    </body>
    </html>
    `

  return (
    <>
      <AppWindow defaults={{x: 10, y: 10, width: '48vw', height: '88vh',}} title='Code' >
        <div className='buttons-files' >
        <button className='button-html'
            disabled = {fileName === 'index.html'}
            onClick={() => setFileName('index.html')}
          >Index.html </button>
          <button className='button-css'
            disabled = {fileName === 'style.css'}
            onClick={() => setFileName('style.css')}
          >Style.css</button>
          <button className='button-js'
            disabled = {fileName === 'script.js'}
            onClick={() => setFileName('script.js')}
          >Script.js</button>
        </div>
        <div className='editorHtml'>
        <EditorMonaco 
        height="100%" 
        onChange={update} 
        defaultLanguage={file.languaje} 
        fontSize="130" 
        options={{ automaticLayout: true, minimap: { enabled: false}}} 
        theme='vs-dark' 
        defaultValue={file.value } 
        onMount={(editor) => (editorRef.current = editor)}
        path={file.name}
        miniMap = {false}
        />
        </div>
        
      </AppWindow>
      <AppWindow defaults={{x: posicionIframeX, y: 10, width: '48vw', height: '88vh',}} title='Preview' >
        <iframe srcDoc={html} frameBorder="0"></iframe>
      </AppWindow>
    </>
  )

}

export default EditorWindows
