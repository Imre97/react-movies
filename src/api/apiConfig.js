const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3dc80c4144c631575a3f3c4014372b34',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig