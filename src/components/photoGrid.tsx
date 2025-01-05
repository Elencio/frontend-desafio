import type { Photo } from "../types/photo";

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition transform duration-200"
          >
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              {photo.title}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-full">Nenhuma foto encontrada.</p>
      )}
    </div>
  );
};