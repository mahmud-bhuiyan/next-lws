"use client";

export default function Button() {
  return (
    <div className="mt-5 btn">
      <button
        onClick={() => console.log("Button clicked")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Button
      </button>
    </div>
  );
}
