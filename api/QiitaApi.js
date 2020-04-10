import fetch from 'node-fetch'

const apiUrl = 'https://qiita.com/api/v2'

export async function getItems() {
  const res = await fetch(`${apiUrl}/items`)
  return res.json()
}
