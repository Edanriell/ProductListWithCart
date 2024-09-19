export const convertBase64ToImageUrl = (base64Image: string, mimeType: string): string => {
	return `data:${mimeType};base64,${base64Image}`;
};
