import fetch from 'node-fetch'

const { API_URL, API_KEY } = process.env

const headers = {
  // 'X-API-KEY': API_KEY,
  Authorization: `Bearer ${API_KEY}`,
}

export async function getItems() {
  const res = await fetch(`${API_URL}/items`, { headers })
  return res.json()
}

export async function getItem({ id }) {
  const res = await fetch(`${API_URL}/items/${id}`, { headers })
  return res.json()
}
