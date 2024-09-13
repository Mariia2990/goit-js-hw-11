const keyApi = '45922188-6c9bdbb7442dfc44aff321ea7';
const url = "https://pixabay.com/api";

export function getGallery(queryValue) {
  const searchParams = new URLSearchParams({
    key: keyApi,
    q: queryValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const fullUrl = `${url}?${searchParams.toString()}`;

  // Додаємо return перед fetch для повернення промісу
  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data; // Повертаємо дані для подальшого використання
    })
    .catch(error => {
      console.error('There was an error with the fetch operation:', error);
      throw error; // Перекидаємо помилку для обробки у виклику
    });
}
