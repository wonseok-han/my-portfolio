import { memo, useEffect, useState } from 'react';

import LazyImage from './LazyImage';

interface ImageDialogProps {
  open?: boolean;
  src: string;
  onClose: () => void;
}

const ImageDialog = ({ open = true, src, onClose }: ImageDialogProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleExtraClick = () => {
    onClose();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return isOpen ? (
    <div
      className="fixed inset-0 z-50 flex scale-100 items-center justify-center opacity-100 transition-opacity duration-500 ease-in"
      onClick={handleExtraClick}
    >
      <div className="relative max-h-[90%] max-w-[90%] rounded bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h2 className="text-lg font-semibold">Image Dialog</h2>
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400 text-white"
            onClick={handleExtraClick}
          >
            X
          </button>
        </div>
        <div className="mt-4 max-h-[80vh] overflow-auto">
          <LazyImage
            alt="Selected"
            className="h-auto w-full object-contain"
            src={src}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default memo(ImageDialog);
