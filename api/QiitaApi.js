import fetch from 'node-fetch'

const apiUrl = process.env.API_URL

const headers = {
  'X-API-KEY': process.env.API_KEY,
}

export async function getItems() {
  const res = await fetch(`${apiUrl}/items`, { headers })
  return res.json()
}

export async function getItem({ id }) {
  const res = await fetch(`${apiUrl}/items/${id}`, { headers })
  return res.json()
}
