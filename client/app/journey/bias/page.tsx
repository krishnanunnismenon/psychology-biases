import Link from "next/link";

export default function BiasPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="bg-primary text-white text-center py-1 px-4 rounded-full mb-4 w-max mx-auto">
          HINDSIGHT BIAS
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center">Hindsight Bias</h1>
        
        <p className="text-lg mb-6 text-center">
          Most users will convince themselves they "knew" it all along.
        </p>
        
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <p className="text-gray-700">
              <strong>Is Your brain loves rewriting history!</strong> Ever thought, "I knew that would happen" after an event? That's your mind tricking you into believing you predicted the past.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Person with shadow" 
              className="w-48 h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link href="/biases">
            <button className="btn-primary">
              NEXT LESSON
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}