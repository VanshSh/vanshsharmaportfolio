export async function gql(query) {
  const data = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: process.env.REACT_APP_API_KEY_HASHNODE_KEY,
    },
    body: JSON.stringify({
      query,
    }),
  })
  const result = data.json()
  return result
}
