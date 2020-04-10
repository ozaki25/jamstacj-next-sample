function Items() {
  const items = [
    { id: 1, title: 'サンプル1' },
    { id: 2, title: 'サンプル2' },
    { id: 3, title: 'サンプル3' },
  ]

  return (
    <div className="container">
      <h1>Hello</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
