import { getItems, getItem } from 'api/QiitaApi'

function Item({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <pre dangerouslySetInnerHTML={{ __html: item.body }}></pre>
    </div>
  )
}

export default Item

export async function getStaticPaths() {
  const data = await getItems()
  const paths = data.map((item) => `/items/${item.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await getItem({ id: params.id })
  const item = { id: data.id, title: data.title, body: data.rendered_body }
  return { props: { item } }
}
