import React, { useState } from 'react';

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would implement the actual file upload logic
    // For example, using FormData to send to your backend
    const formData = new FormData();
    formData.append('name', name);
    files.forEach(file => {
      formData.append('files', file);
    });

    // Example submission logic (replace with your actual API endpoint)
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        alert('Files uploaded successfully!');
        setFiles([]);
        setName('');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Upload Files</h1>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-[#6380c2] mb-2">Your Name *</label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border-b border-gray-300 focus:border-[#3a73f2] outline-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-[#6380c2] mb-2">Upload Files *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#3a73f2] transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                />
                <label 
                  htmlFor="fileInput"
                  className="cursor-pointer text-[#3a73f2] hover:text-blue-700"
                >
                  Click to select files or drag them here
                </label>
              </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Selected Files:</h3>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={files.length === 0 || !name}
              className="w-full bg-[#3a73f2] text-white py-3 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              Upload Files
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload; 