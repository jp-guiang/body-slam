import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find that Snorlax move</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}