'use client';

import UploadFormInput from '@/components/upload/upload-form-input';
import { useToast } from '@/hooks/use-toast';
import { useUploadThing } from '@/utils/uploadthing';
import { z } from 'zod';

const schema = z.object({
  file: z
    .instanceof(File, { message: 'Invalid file' })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      'File size must be less than 20MB'
    )
    .refine(
      (file) => file.type.startsWith('application/pdf'),
      'File must be a PDf'
    ),
});

export default function UploadForm() {
  const { toast } = useToast();

  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      console.log('uploaded successfully!');
    },
    onUploadError: (err) => {
      console.error('error occurred while uploading', err);
      toast({
        title: 'Error occurred while uploading',
        description: err.message,
      });
    },
    onUploadBegin: ({ file }) => {
      console.log('upload has begun for', file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    //validating the fields
    const validatedFields = schema.safeParse({ file });

    console.log(validatedFields);

    if (!validatedFields.success) {
      toast({
        title: '❌ Something went wrong',
        variant: 'destructive',
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          'Invalid file',
      });
      return;
    }

    toast({
      title: '📄 Uploading PDF...',
      description: 'We are uploading your PDF! ',
    });

    //upload the file to uploadthing

    const resp = await startUpload([file]);
    if (!resp) {
      toast({
        title: 'Something went wrong',
        description: 'Please use a different file',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: '📄 Processing PDF',
      description: 'Hang tight! Our AI is reading through your document! ✨',
    });
    //parse the pdf using lang chain
    //summarize the pdf using AI
    //save the summary to the database
    //redirect to the [id] summary page
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
