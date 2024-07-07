import { useState, useRef } from "react";
import { toast } from "sonner";

interface CodingAreaProps {
    setCode: (code: string) => void;
    setLanguage: (language: string) => void;
}

export default function CodingArea({ setCode, setLanguage }: CodingAreaProps) {
    const [code, setCodeState] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // cahnge code function
    function handleChangeC(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newValue = e.target.value;
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
            <div className="p-1 flex flex-row">
                <label htmlFor="language" className="px-6 text-xs font-medium text-gray-500 uppercase">
                    Language:
                </label>
                <select
                    id="language"
                    onChange={handleChangeL}
                    className="px-2 py-1 rounded-md focus:outline-none focus:ring-2"
                >
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                </select>
            </div>
            <div className=" h-full flex flex-col">
                <textarea
                    ref={textareaRef}
                    className="w-full h-[970px] flex-grow rounded-md borderp-2 font-mono text-sm resize-none focus:outline-none focus:ring-2"
                    onChange={handleChangeC}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the Code..."
                    value={code}
                />
            </div>
        </div>
    );
}