import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <h1 className="text-4xl font-bold">Justiway Travel and Tours</h1>
      <p className="mt-4 text-lg">Your journey begins here!</p>
      <Image
        src="/globe.svg"
        alt="Travel Image"
        width={300}
        height={300}
        className="rounded-lg mt-6"
      />
    </main>
  );
}
