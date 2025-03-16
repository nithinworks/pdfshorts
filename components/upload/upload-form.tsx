"use client";

import {
  generatePdfSummary,
  generatePdfText,
  storePdfSummaryAction,
} from "@/actions/upload-actions";
import UploadFormInput from "@/components/upload/upload-form-input";
import { useToast } from "@/hooks/use-toast";
import { useUploadThing } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { z } from "zod";
import LoadingSkeleton from "./loading-skeleton";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { cn } from "@/lib/utils";
import { FileUp } from "lucide-react";
import { useDropzone } from "react-dropzone";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDf"
    ),
});

export default function UploadForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading", err);
      setError(err.message);
      toast({
        title: "🚫 Upload Failed",
        description: "Oops! Something went wrong with the upload.",
        variant: "destructive",
      });
    },
    onUploadBegin: (data) => {
      console.log("upload has begun for", data);
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        setError(null);
        if (acceptedFiles.length > 0) {
          const file = acceptedFiles[0];
          setIsLoading(true);
          const validatedFields = schema.safeParse({ file });

          if (!validatedFields.success) {
            const errorMessage =
              validatedFields.error.flatten().fieldErrors.file?.[0] ??
              "Invalid file";
            setError(errorMessage);
            toast({
              title: "❌ Something went wrong",
              variant: "destructive",
              description: errorMessage,
            });
            setIsLoading(false);
            return;
          }

          toast({
            title: "🚀 Starting the Magic",
            description: "Uploading your PDF to our AI wizards...",
          });

          const uploadResponse = await startUpload([file]);
          if (!uploadResponse) {
            toast({
              title: "🤔 That's Strange",
              description:
                "This PDF seems to be playing hide and seek. Try another one?",
              variant: "destructive",
            });
            setIsLoading(false);
            return;
          }

          toast({
            title: "🤖 AI at Work",
            description: "Our AI is speed-reading through your document...",
          });
          const uploadFileUrl = uploadResponse[0].serverData.fileUrl;

          let storeResult: any;
          toast({
            title: "📄 Saving PDF...",
            description: "Hang tight! We are saving your summary! ✨",
          });

          const formattedFileName = formatFileNameAsTitle(file.name);

          const result = await generatePdfText({
            fileUrl: uploadFileUrl,
          });

          toast({
            title: "📄 Generating PDF Summary",
            description:
              "Hang tight! Our AI is reading through your document! ✨",
          });

          const summaryResult = await generatePdfSummary({
            pdfText: result?.data?.pdfText ?? "",
            fileName: formattedFileName,
          });

          toast({
            title: "📄 Saving PDF Summary",
            description: "Hang tight! We are saving your summary! ✨",
          });

          const { data = null, message = null } = summaryResult || {};

          if (data?.summary) {
            storeResult = await storePdfSummaryAction({
              summary: data.summary,
              fileUrl: uploadFileUrl,
              title: formattedFileName,
              fileName: file.name,
            });
            toast({
              title: "✨ Almost There",
              description: "Adding some final touches to your summary...",
            });

            toast({
              title: "🎉 Success!",
              description:
                "Your PDF has been transformed into a beautiful summary!",
            });

            formRef.current?.reset();
            router.push(`/summaries/${storeResult.data.id}`);
          }
        }
      } catch (err: any) {
        setIsLoading(false);
        const errorMessage = err?.message || "An unexpected error occurred";
        setError(errorMessage);
        console.error("Error occurred", err);
        toast({
          title: "😅 Oops!",
          description: errorMessage,
          variant: "destructive",
        });
        formRef.current?.reset();
      }
    },
    onError: (err) => {
      console.error("Error occurred", err);
      setError(err.message);
      toast({
        title: "Error occurred",
        description: err.message,
        variant: "destructive",
      });
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={cn(
          "flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed rounded-xl transition-all duration-200",
          isDragActive
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-200 hover:border-emerald-300"
        )}
      >
        <input {...getInputProps()} />
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-emerald-100 border-t-emerald-500 animate-spin" />
            <p className="text-gray-600">Processing your PDF...</p>
          </div>
        ) : (
          <>
            <div className="p-4 rounded-full bg-emerald-50">
              <FileUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Drag & drop your PDF here, or{" "}
                <span className="text-emerald-600 font-medium">browse</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Maximum file size: 10MB
              </p>
            </div>
          </>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
