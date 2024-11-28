import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // For GitHub flavored markdown support

const ReadmeDisplay = () => {
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    // You could fetch your README file if it's hosted somewhere or imported directly
    // For local files, you'd need a Webpack loader to import the file, or you could load it as text
    fetch("/README.md")
      .then((response) => response.text())
      .then((text) => {
        setReadmeContent(text);
      })
      .catch((error) => console.error("Error fetching README:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="markdown-content p-4">
        <ReactMarkdown remarkPlugins={[gfm]}>{readmeContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ReadmeDisplay;
