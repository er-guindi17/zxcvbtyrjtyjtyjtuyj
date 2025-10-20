import { GoogleGenAI } from "@google/genai";
import { UploadedImage, Personality } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getPromptForPersonality = (personality: Personality): string => {
    switch (personality) {
        case 'Ingenioso':
            return 'Eres una persona ingeniosa y lista. Tu respuesta debe ser humorística e inteligente.';
        case 'Romántico':
            return 'Eres una persona romántica y encantadora. Tu respuesta debe ser dulce y sincera.';
        case 'Atrevido':
            return 'Eres una persona audaz y segura de sí misma. Tu respuesta debe ser directa y atrevida.';
        case 'Misterioso':
            return 'Eres una persona misteriosa e intrigante. Tu respuesta debe ser enigmática y que invite a la reflexión.';
        case 'Amigable':
            return 'Eres una persona amigable y accesible. Tu respuesta debe ser cálida y amable.';
        default:
            return 'Eres un asistente útil.';
    }
}

export const generateIcebreaker = async (personality: Personality): Promise<string> => {
    const systemInstruction = getPromptForPersonality(personality);
    const prompt = `Escribe un DM corto, atractivo y creativo para romper el hielo. No más de 25 palabras.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.9,
                topP: 1,
                topK: 1,
            }
        });

        return (response.text || '').trim();
    } catch (error) {
        console.error("Error generating icebreaker:", error);
        throw new Error("Error al generar el rompehielos desde la API de Gemini.");
    }
};

export const generateImageResponse = async (image: UploadedImage, personality: Personality): Promise<string> => {
    const systemInstruction = getPromptForPersonality(personality);
    const prompt = `Escribe un DM corto, atractivo y personalizado en respuesta a esta imagen. Sé creativo y adapta tu respuesta a la personalidad seleccionada. No más de 25 palabras.`;
    
    const imagePart = {
        inlineData: {
            data: image.base64,
            mimeType: image.mimeType,
        },
    };

    const textPart = {
        text: prompt,
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.9,
                topP: 1,
                topK: 1,
            }
        });
        
        return (response.text || '').trim();
    } catch (error) {
        console.error("Error generating image response:", error);
        throw new Error("Error al generar la respuesta a la imagen desde la API de Gemini.");
    }
};
