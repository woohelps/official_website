"use client"


import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx'; // TSX 的支持，确保 JSX 已被引入

const CodePrinter: React.FC<{ code: string }> = ({ code }) => {
    const [displayedCode, setDisplayedCode] = useState<string>('');
    const [charIndex, setCharIndex] = useState<number>(0);

    useEffect(() => {
        Prism.languages.tsx = Prism.languages.extend('typescript', Prism.languages.tsx);

        if (charIndex < code.length) {
            const timer = setTimeout(() => {
                setDisplayedCode(prev => prev + code[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 20); // 每20毫秒显示一个字符

            return () => clearTimeout(timer);
        }
    }, [charIndex, code]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <pre className="bg-gray-800 text-white p-10 rounded font-mono" style={{ minWidth: '600px', minHeight: '200px' }}>
                <code className="language-css" dangerouslySetInnerHTML={{ __html: Prism.highlight(displayedCode, Prism.languages.tsx, 'tsx') }}></code>
            </pre>
        </div>
    );
};

export default CodePrinter;
