/*export function Documents(){
    return <h1>Documents</h1>
}*/
// Documents.tsx

// Documents.tsx

import React, { useState, useEffect } from 'react';

interface Document {
  title: string;
  content: string;
}

const Documents: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    fetch('/Users/manasa/Desktop/term-project/src/data/documentsEnglish.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        return response.json();
      })
      .then(data => {
        console.log('Loaded documents:', data);
        setDocuments(data);
      })
      .catch(error => console.error('Error loading documents:', error));
  }, []);

  if (documents.length === 0) {
    return <p>Loading documents...</p>;
  }

  return (
    <div>
      <h1>Documents</h1>
      <section>
        {documents.map((document, index) => (
          <div key={index}>
            <h2>{document.title}</h2>
            <p>{document.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Documents;
