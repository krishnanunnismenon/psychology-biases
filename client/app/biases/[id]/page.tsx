import Link from "next/link";
import { notFound } from "next/navigation";

// Define types for our biases
type Bias = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
};

// Sample biases data with extended information
const biasesData: Bias[] = [
  {
    id: "action-bias",
    title: "ACTION BIAS",
    description: "The action bias describes our tendency to favor action over inaction.",
    longDescription: "The action bias describes our tendency to favor action over inaction. In uncertain situations, we feel compelled to do something, even when doing nothing would be more effective. This bias often leads to unnecessary interventions and can result in worse outcomes than simply waiting and observing.",
    imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "confirmation-bias",
    title: "CONFIRMATION BIAS",
    description: "The confirmation bias describes our tendency to search for and favor information that confirms our existing beliefs.",
    longDescription: "The confirmation bias describes our tendency to search for and favor information that confirms our existing beliefs while giving less consideration to alternative possibilities. This bias leads us to interpret new evidence as confirmation of our existing theories and ignore contradictory data.",
    imageUrl: "https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "anchoring-bias",
    title: "ANCHORING BIAS",
    description: "The anchoring bias is a cognitive bias that causes us to rely heavily on the first piece of information we encounter.",
    longDescription: "The anchoring bias is a cognitive bias that causes us to rely heavily on the first piece of information we encounter. When making decisions, we interpret newer information from the reference point of our anchor, instead of seeing it objectively. This can significantly impact negotiations, pricing decisions, and estimates.",
    imageUrl: "https://images.unsplash.com/photo-1569937756447-1d44f657dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "cashless-effect",
    title: "CASHLESS EFFECT",
    description: "The cashless effect describes our tendency to be more willing to pay when using a credit card compared to cash.",
    longDescription: "The cashless effect describes our tendency to be more willing to pay when using a credit card compared to cash. When we don't physically see the money leaving our possession, we are more likely to spend or make a purchase. This psychological disconnect between digital payments and actual money can lead to increased spending and potential financial issues.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "hindsight-bias",
    title: "HINDSIGHT BIAS",
    description: `Most users will convince themselves they "knew" it all along.`,
    longDescription: `Hindsight bias, also known as the 'knew-it-all-along effect', is our tendency to believe we could have predicted an outcome after it has already occurred. Your brain loves rewriting history! Ever thought, "I knew that would happen" after an event? That's your mind tricking you into believing you predicted the past. This bias can prevent us from learning from our mistakes and lead to overconfidence in future predictions.`,
    imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  }
];

export default function BiasDetailPage({ params }: { params: { id: string } }) {
  // Find the bias with the matching ID
  const bias = biasesData.find(b => b.id === params.id);
  
  // If no matching bias is found, show 404
  if (!bias) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{bias.title}</h1>
        
        <p className="text-lg mb-8 text-center">
          {bias.description}
        </p>
        
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <p className="text-gray-700">
              {bias.longDescription}
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={bias.imageUrl} 
              alt={`${bias.title} illustration`} 
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link href="/biases">
            <button className="btn-secondary mr-4">
              BACK TO ALL BIASES
            </button>
          </Link>
          <button className="btn-primary">
            QUICK CHALLENGE
          </button>
        </div>
      </div>
    </div>
  );
}