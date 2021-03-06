import { get, post } from '../http/client';

export async function loadMovies() {
  const movies = await get('/data/index.json');
  return movies;
}

export async function loadClusters() {
  const clusters = await get('/data/clusters-25.json');
  return clusters;
}

export async function getRecommendations(selections) {
  const recommendation = await post('/api/recommendation', selections);
  return recommendation;
}
