export default function BookPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Book Your Session</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is where your booking form or calendar will go.
      </p>

    
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        Start Booking
      </button>
    </main>
  );
}
