import { FileUp } from "lucide-react";

export default function UploadHeader() {
  return (
    <div className="flex flex-col items-center gap-6 mb-8">
      <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
        <FileUp className="w-8 h-8 text-emerald-600" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Upload Your PDF
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Get an AI-powered summary of your document in seconds
        </p>
      </div>
    </div>
  );
}
