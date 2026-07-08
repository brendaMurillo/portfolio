"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    loadPyodide: any;
  }
}

export default function PythonRunner() {
  const [code, setCode] = useState(`print("Hello, World!")`);
  const [output, setOutput] = useState("Loading Python engine...");
  const [pyodide, setPyodide] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadPython = async () => {
      if (!document.getElementById("pyodide-script")) {
        const script = document.createElement("script");
        script.id = "pyodide-script";
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
        script.async = true;

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide();
          setPyodide(pyodideInstance);
          setIsReady(true);
          setOutput("Python engine ready. Click Run Code!");
        };

        document.body.appendChild(script);
      }
    };

    loadPython();
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput("Python engine is still loading...");
      return;
    }

    try {
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);

      pyodide.runPython(code);

      const result = pyodide.runPython("sys.stdout.getvalue()");
      const error = pyodide.runPython("sys.stderr.getvalue()");

      setOutput(error || result || "No output.");
    } catch (err) {
      setOutput(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-pink-300/40 bg-[#0b1020] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-pink-300/20 bg-black px-5 py-3">
          <p className="font-mono text-sm text-pink-300">
            python_playground.py
          </p>

          <p className="font-mono text-sm text-yellow-300">
            {isReady ? "Ready" : "Loading"}
          </p>
        </div>

        <div className="flex min-h-[160px] bg-[#111827]">
          <div className="select-none bg-black/40 px-4 py-5 text-right font-mono text-sm leading-7 text-white/35">
            {code.split("\n").map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="min-h-[160px] w-full resize-y bg-[#111827] p-5 font-mono text-base leading-7 text-pink-300 outline-none caret-yellow-300"
          />
        </div>

        <div className="border-t border-pink-300/20 bg-black px-5 py-4">
          <button
            type="button"
            onClick={runCode}
            disabled={!isReady}
            className="rounded-full border border-yellow-300 bg-gradient-to-r from-pink-400 to-yellow-300 px-6 py-3 font-bold text-black transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {isReady ? "▶ Run Code" : "Loading Python..."}
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-yellow-300/40 bg-black shadow-xl">
        <div className="flex items-center justify-between bg-pink-500/20 px-5 py-3">
          <h3 className="font-mono text-lg font-bold text-yellow-300">
            Output
          </h3>

          <span className="rounded-full border border-pink-300/40 px-3 py-1 font-mono text-xs text-pink-300">
            terminal
          </span>
        </div>

        <pre className="min-h-[80px] whitespace-pre-wrap bg-black p-5 font-mono text-base leading-7 text-pink-300">
          {output}
        </pre>
      </div>
    </div>
  );
}