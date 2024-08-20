import { NotFoundException } from "../exceptions/NotFoundException.js";

const loadData = async (brand) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 60000);

    let url = `https://scrapper-service-auto.onrender.com/scrapper-service/${brand}`;

    try {
        const response = await fetch(url, { signal });

        if(response.status === 404) {
            throw new NotFoundException(`No found ${brand}`)
        } else if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();      
        return data;

    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Fetch aborted due to timeout');
        } 
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};

export const getReviewSummary = async (model) => {
        
    const data =  await loadData(model);
    const datos = data[model];
    const totalRating = datos.reduce((sum, response) => sum + response.rating, 0);
    const averageRating = totalRating / datos.length;

    const concatenatedBestTexts = datos
    .map(response => `${response.bestText}`)
    .join(' ');

    const concatenatedWorstTexts = datos
    .map(response => `${response.worstText}`)
    .join(' ');

    return {
        rating: averageRating,
        bestText: concatenatedBestTexts,
        worstText: concatenatedWorstTexts
    }
    
}