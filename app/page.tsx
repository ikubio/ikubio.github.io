import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 py-12">
      <main className="flex-1 flex flex-col">
        <div className="pt-4 w-full">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter">Iku Bio</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-400 mt-2 font-light">Biology scaled</p>
        </div>
      </main>
      <footer className="py-12">
        <div>
          <div className="space-y-1">
            <p className="text-base">Iku Bio Inc.</p>
            <p className="text-base">New York, NY</p>
          </div>
          <div className="mt-4">
            <Link href="mailto:inquiries@iku.bio" className="text-base hover:underline">
              inquiries@iku.bio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
