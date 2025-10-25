export default async function UserIdPage({
  params: { user },
}: {
  params: { user: string }
}) {
  return (
    <main>
      <h1>{user}</h1>
    </main>
  )
}
