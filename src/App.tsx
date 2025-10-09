import React from "react";
import UploadFile from "./components/upload-file";
import { Card, CardContent } from "./components/ui/card";
import { Camera as CameraIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import Camera from "./components/camera";
import ThemeToggleButton from "./components/theme/components";

const App: React.FC = () => {
  const [image, setImage] = React.useState<File | null>(null);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-5">
      <h1 className="font-bold text-3xl">Face Recognition</h1>

      <div className="flex flex-row gap-5">
        <UploadFile setImage={setImage} image={image} />

        <Card className="w-80">
          <CardContent className="flex flex-col gap-5 justify-center items-center">
            <h2>Validation Photo</h2>
            <div className="bg-muted h-40 w-40 rounded-xl flex justify-center items-center">
              <CameraIcon className="size-20" />
            </div>
            <Button onClick={() => setOpen(true)} disabled={!image}>
              Open Validation
            </Button>
          </CardContent>
        </Card>
      </div>
      {image && (
        <Camera open={open} onOpenChange={() => setOpen(false)} image={image} />
      )}
      <div className="absolute bottom-5 right-5">
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default App;
