import React, { useState, useEffect } from 'react';

const UploadAdmin = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    // Fetch uploads from your backend
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    try {
      const response = await fetch('/api/uploads');
      if (response.ok) {
        const data = await response.json();
        setUploads(data);
      }
    } catch (error) {
      console.error('Failed to fetch uploads:', error);
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Uploaded Files</h1>
        
        <div className="bg-white rounded-lg shadow">
          {uploads.map((upload, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 p-4 hover:bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{upload.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Uploaded on: {new Date(upload.date).toLocaleDateString()}
                  </p>
                  <ul className="mt-2">
                    {upload.files.map((file, fileIndex) => (
                      <li key={fileIndex} className="text-[#3a73f2] hover:underline">
                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                          {file.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-500">
                  {upload.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadAdmin; 