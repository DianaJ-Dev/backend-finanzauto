export const translateToSpanish = async (text) => {
    let result = "";
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|es`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    result = data.responseData.translatedText;

    return result;
};
