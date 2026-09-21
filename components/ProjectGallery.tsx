"use client";

import { useState } from "react";

type Props = {
  images: string[];
  title: string;
  imageFit?: "contain" | "cover";
};

export default function ProjectGallery({ images, title, imageFit }: Props) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const current = images[index];

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handleNext}
        aria-label="Tap image to see the next screenshot"
        className="portfolio-detail-image-frame w-full transition hover:-translate-y-1"
      >
        <img
          src={current}
          alt={`${title} screenshot ${index + 1} of ${images.length}`}
          className={
            imageFit === "cover"
              ? "portfolio-detail-image portfolio-image-cover"
              : "portfolio-detail-image portfolio-image-contain"
          }
        />
      </button>

      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-3">
          <p className="text-sm opacity-80">
            Tap the image to view more ({index + 1}/{images.length})
          </p>
        </div>
      )}
    </div>
  );
}
