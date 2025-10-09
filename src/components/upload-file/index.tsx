import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { UserRound } from "lucide-react";

export interface UploadFileProps {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  image: File | null;
}

const UploadFile: React.FC<UploadFileProps> = ({ setImage, image }) => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <Card className="w-80">
        <CardContent className="flex flex-col gap-5 justify-center items-center">
          <h2>Upload Image</h2>

          <div className="bg-muted h-40 w-40 rounded-xl flex justify-center items-center">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="size-20 object-cover"
              />
            ) : (
              <UserRound className="size-20" />
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            ref={inputFileRef}
          />
          <Button onClick={() => inputFileRef.current?.click()}>Upload</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadFile;
