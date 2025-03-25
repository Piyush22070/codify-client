import { useState, useRef } from "react";
import { toast } from "sonner";
import MonacoEditor from "react-monaco-editor";
import { Sun, Moon } from "lucide-react";

interface CodingAreaProps {
    setCode: (code: string) => void;
    setLanguage: (language: string) => void;
}

export default function CodingArea({ setCode, setLanguage }: CodingAreaProps) {
    const [code, setCodeState] = useState("");
    const [language, setLangState] = useState("cpp");
    const [theme, setTheme] = useState("vs-light");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // cahnge code function
    function handleChangeC(newValue: string) {
        setCode(newValue);
        setCodeState(newValue);
      }

    // change language function
    function handleChangeL(e: React.ChangeEvent<HTMLSelectElement>) {
        setLanguage(e.target.value);
        if(e.target.value === 'java'){
            toast("Java is Not Config on server yet ;)")
        }
    }
    function toggleTheme() {
        setTheme(theme === "vs-dark" ? "vs-light" : "vs-dark");
      }


    // tab funcntion 
    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Tab") {
            e.preventDefault();
            const { selectionStart, selectionEnd } = e.currentTarget;
            const newValue = `${code.substring(0, selectionStart)}\t${code.substring(selectionEnd)}`;
            setCode(newValue);
            setCodeState(newValue);

            // Use a reference to the textarea to set the cursor position
            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 1;
                }
            }, 0);
        }
    }

    return (
        <div className="max-w-4xl mx-auto  p-5 bg-gray-100 shadow-md rounded-lg">

            <div className="w-full flex justify-between items-center mb-4">

               <div>
               <label className="font-sm text-gray-700">
                    Select Language:
                </label>
                <select
                    id="language"
                    onChange={handleChangeL}
                    className="ml-2 p-2 border rounded"
                >
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                </select>
               </div>

                <button
                className="p-2 bg-gray-300 rounded-full transition"
                onClick={toggleTheme}
                >
                {theme === "vs-dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

            </div>
            <div className=" h-screen flex flex-col">
            <MonacoEditor
                width="100%"
                height="100%"
                language={language === "cpp" ? "c" : "python"} // Monaco uses "c" for C++
                theme={theme}
                value={code}
                options={{
                    minimap: { enabled: false },
                    automaticLayout: true,
                    suggestOnTriggerCharacters: true, // Enable suggestions
                    quickSuggestions: true, // Show suggestions while typing
                    snippetSuggestions: "inline", // Show code snippets
                  }}
                onChange={handleChangeC}
                />
            </div>
        </div>
    );
}