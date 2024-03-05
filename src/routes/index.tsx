import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="p-2 bg-red-500">
      <h3 className='bg-red-500'>Welcome Home!</h3>
    </div>
  )
}