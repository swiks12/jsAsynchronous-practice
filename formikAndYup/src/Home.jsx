import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./App.css";
import { Button } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import updateDescription from "../database/updateDescription";
import { useNavigate } from "react-router-dom";

const CLOUD_SERVICES_TOKEN_URL = import.meta.env.VITE_CLOUD_SERVICES_TOKEN_URL;

const LICENSE_KEY = import.meta.env.VITE_LICENSE_KEY;

const Home = () => {
  const navigate = useNavigate();
  // accesiing the variables method
  // state(this is global or known to the entire project).nameOfSlice(store ma vako name not the slice ko name).values
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const userName = useSelector((state) => state.user.data.name);
  const id = useSelector((state) => state.user.data.id);
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const cloud = useCKEditorCloud({
    version: "44.0.0",
    ckbox: { version: "2.6.1" },
  });

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
      Autoformat,
      AutoImage,
      Autosave,
      BlockQuote,
      Bold,
      CKBox,
      CKBoxImageEdit,
      CloudServices,
      Essentials,
      Heading,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      MediaEmbed,
      Paragraph,
      PasteFromOffice,
      PictureEditing,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextTransformation,
      TodoList,
      Underline,
    } = cloud.CKEditor;

    return {
      ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "insertImage",
            "ckbox",
            "mediaEmbed",
            "insertTable",
            "blockQuote",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          Autoformat,
          AutoImage,
          Autosave,
          BlockQuote,
          Bold,
          CKBox,
          CKBoxImageEdit,
          CloudServices,
          Essentials,
          Heading,
          ImageBlock,
          ImageCaption,
          ImageInline,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          Link,
          LinkImage,
          List,
          ListProperties,
          MediaEmbed,
          Paragraph,
          PasteFromOffice,
          PictureEditing,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextTransformation,
          TodoList,
          Underline,
        ],
        cloudServices: {
          tokenUrl: CLOUD_SERVICES_TOKEN_URL,
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "|",
            "resizeImage",
            "|",
            "ckboxImageEdit",
          ],
        },
        initialData: null,

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
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [cloud, isLayoutReady]);

  useEffect(() => {
    if (editorConfig) {
      configUpdateAlert(editorConfig);
    }
  }, [editorConfig]);

  const handleImage = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (file) {
      //converting to base64 used to store images of small size
      const reader = new FileReader();
      reader.readAsDataURL(file); //for base64
      //reader.onLoad ma chahi k garne vanera logic aba
      reader.onload = () => {
        const loadedImage = reader.result;
        setImage(loadedImage);
      };
    }
  };

  // submit button click
  const handleClick = async () => {
    const response = await updateDescription(id, content);
    const success = response.success;
    const message = response.message;
    success === true ? toast.success(message) : toast.error(message);
    navigate("/login/home/test");
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="h-[50vh] w-[60vw] border border-purple-600 border-1 mt-12 rounded-2xl shadow-lg">
          <p className="text-2xl font-bold text-center mt-6 mb-12">
            Welcome to the Dashboard{" "}
            <span className="text-purple-600 ">{userName}!</span>
          </p>
          <div className="main-container ">
            <div
              className="editor-container editor-container_classic-editor ml-12"
              ref={editorContainerRef}
            >
              <p className="mb-6 text-center text-xl font-semibold">
                Write some words to describe about yourself!!
              </p>
              <div className="editor-container__editor">
                <div ref={editorRef}>
                  {ClassicEditor && editorConfig && (
                    <CKEditor
                      editor={ClassicEditor}
                      config={editorConfig}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log(data);
                        // DOM parser le garda DOM  create vairacha of HTML
                        const parser = new DOMParser();
                        const text = parser.parseFromString(data, "text/html");
                        // ani ya chai DOM ko jasari nai data access gareko huncha
                        const editorText = text.body.textContent;
                        console.log(editorText);
                        setContent(editorText);
                      }}
                    />
                  )}
                </div>
              </div>
              <input type="file" className="mt-2" onChange={handleImage} />
            </div>
            <div className="w-[60vw] flex justify-center mt-6">
              <ButtonComponent
                name="Submit"
                type="submit"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
  if (configUpdateAlert.configUpdateAlertShown) {
    return;
  }

  const isModifiedByUser = (currentValue, forbiddenValue) => {
    if (currentValue === forbiddenValue) {
      return false;
    }

    if (currentValue === undefined) {
      return false;
    }

    return true;
  };

  const valuesToUpdate = [];

  configUpdateAlert.configUpdateAlertShown = true;

  if (
    !isModifiedByUser(
      config.cloudServices?.tokenUrl,
      "<YOUR_CLOUD_SERVICES_TOKEN_URL>"
    )
  ) {
    valuesToUpdate.push("CLOUD_SERVICES_TOKEN_URL");
  }

  if (valuesToUpdate.length) {
    window.alert(
      [
        "Please update the following values in your editor config",
        "to receive full access to Premium Features:",
        "",
        ...valuesToUpdate.map((value) => ` - ${value}`),
      ].join("\n")
    );
  }
}

export default Home;
