import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
