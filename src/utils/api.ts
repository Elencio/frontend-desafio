import axios from "axios";
import type { Photo } from "../types/photo";

interface PixabayResponse {
  hits: {
    id: number;
    webformatURL: string;
    tags: string;
  }[];
}

export const fetchPhotos = async (query: string = ""): Promise<Photo[]> => {
  const API_URL = "https://pixabay.com/api/";
  const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY as string; 

  try {
    const response = await axios.get<PixabayResponse>(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        per_page: 12, 
      },
    });

    return response.data.hits.map((hit) => ({
      id: hit.id,
      title: hit.tags,
      url: hit.webformatURL,
    }));
  } catch (error) {
    console.error("Erro ao buscar fotos da Pixabay:", error);
    return [];
  }
};
