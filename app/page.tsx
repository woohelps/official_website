import Image from "next/image";
import CodePrinter from "@/components/CodePrinter";

export default function Home() {

  const code = `import React from 'react';

function Avatar() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="https://example.com/avatar.jpg"
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-2 
                   border-gray-300"
      />
    </div>
  );
}

export default Avatar;`;

    return (
        <main className="">
            <CodePrinter code={code} />
        </main>
    );
}
