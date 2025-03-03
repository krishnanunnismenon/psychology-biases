import Link from "next/link";

export default function QuestionPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-8 text-center">What do you think this is?</h1>

                <div className="flex justify-center mb-8">
                    <img
                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                        alt="Clear dog image"
                        className="w-64 h-64 object-cover rounded-lg blur-lg"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <Link href="/journey/Answer">
                        <button className="w-full border rounded-lg py-2 px-4 text-gray-700 flex items-center justify-center">
                            🐈 "A CAT"
                        </button>
                    </Link>
                    <Link href="/journey/Answer">
                        <button className="w-full border rounded-lg py-2 px-4 text-gray-700 flex items-center justify-center">
                            🚗 "A CAR"
                        </button>
                    </Link>
                </div>
                 <Link href="/journey/Answer">
                     <button className="border rounded-lg py-2 px-6 text-gray-700 flex items-center justify-center w-full">
                         🚀 "A SPACESHIP"
                   </button>
                </Link>
            </div>
        </div>
    );
}
