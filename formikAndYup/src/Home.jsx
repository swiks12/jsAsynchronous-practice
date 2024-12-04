import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import "./App.css";

const LICENSE_KEY =import.meta.env.VITE_LICENSE_KEY;

const Home = () => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const cloud = useCKEditorCloud({ version: "44.0.0" });

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);
  const { ClassicEditor, editorConfig } = useMemo(() => {
    if (cloud.status !== "success" || !isLayoutReady) {
      return {};
    }

    const {
      ClassicEditor,
      AutoLink,
      Autosave,
      Bold,
      Essentials,
      Italic,
      Link,
      Paragraph,
    } = cloud.CKEditor;

    return {
      ClassicEditor,
      editorConfig: {
        toolbar: {
          items: ["bold", "italic", "|", "link"],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          AutoLink,
          Autosave,
          Bold,
          Essentials,
          Italic,
          Link,
          Paragraph,
        ],
        initialData:null,
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        placeholder: "Type or paste your content here!",
      },
    };
  }, [cloud, isLayoutReady]);
  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {ClassicEditor && editorConfig && (
              <CKEditor editor={ClassicEditor} config={editorConfig} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
