import { useRef, ChangeEvent } from "react";

interface ImageUploaderProps {
  handleImage: (image: string) => void;
}

const ImageUploader = ({ handleImage }: ImageUploaderProps) => {
  // Referencia para el input de archivo
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Manejar el cambio en el input de archivo
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      handleImage(newImageURL);
    }
  };

  // Manejar el clic en el botón
  const handleButtonClick = (): void => {
    // Disparar el clic en el input de archivo oculto
    fileInputRef.current?.click();
  };

  return (
    <div>
      {/* Input de archivo oculto */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      {/* Botón para activar el input de archivo */}
      <button onClick={handleButtonClick}>Image</button>
    </div>
  );
};

export default ImageUploader;
