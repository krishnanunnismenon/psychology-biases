import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Master Your Mind,
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Make Smarter Decisions!
        </h2>
        
        <h3 className="text-xl font-semibold mb-4">
          Break Free from Hidden Biases
        </h3>
        
        <p className="text-gray-700 mb-6">
          Did you know that your brain takes shortcuts that affect your
          decisions—often without you realizing it? These subconscious traps
          can lead to poor choices. Learn to recognize these cognitive biases
          and interact with the world.
        </p>
        
        <Link href="/journey/blurred">
          <button className="btn-primary uppercase">
            START JOURNEY
          </button>
        </Link>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
            alt="Brain illustration" 
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}