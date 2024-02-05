import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const code = "console.log('Monaco Editor!');";
  return (
    <Editor
      height="400px"
      width="80%"
      language="cpp"
      theme="vs-light"
      value={code}
      options={{
        inlineSuggest: true,
        fontSize: "16px",
        formatOnType: true,
        autoClosingBrackets: true,
        minimap: { scale: 10 }
      }}
    />
  );
}
export default CodeEditor;