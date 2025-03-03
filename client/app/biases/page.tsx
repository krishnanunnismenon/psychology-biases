import Link from "next/link";

// Define types for our biases
type Bias = {
  id: string;
  title: string;
  description: string;
};

export default function BiasesPage() {
  // Sample biases data
  const biases: Bias[] = [
    {
      id: "action-bias",
      title: "ACTION BIAS",
      description: "The action bias describes our tendency to favor action over inaction. In uncertain situations, we feel compelled to do something, even when doing nothing would be more effective."
    },
    {
      id: "confirmation-bias",
      title: "CONFIRMATION BIAS",
      description: "The confirmation bias describes our tendency to search for and favor information that confirms our existing beliefs while giving less consideration to alternative possibilities."
    },
    {
      id: "anchoring-bias",
      title: "ANCHORING BIAS",
      description: "The anchoring bias is a cognitive bias that causes us to rely heavily on the first piece of information we encounter. When making decisions, we interpret newer information from the reference point of our anchor, instead of seeing it objectively."
    },
    {
      id: "cashless-effect",
      title: "CASHLESS EFFECT",
      description: "The cashless effect describes our tendency to be more willing to pay when using a credit card compared to cash. When we don't physically see the money leaving our possession, we are more likely to spend or make a purchase."
    },
    {
      id: "hindsight-bias",
      title: "HINDSIGHT BIAS",
      description: `Most users will convince themselves they "knew" it all along. Your brain loves rewriting history! Ever thought, "I knew that would happen" after an event? That's your mind tricking you into believing you predicted the past.`
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">COGNITIVE BIASES</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {biases.map((bias) => (
          <Link key={bias.id} href={`/biases/${bias.id}`}>
            <div className="card cursor-pointer h-full">
              <h2 className="text-xl font-bold mb-3">{bias.title}</h2>
              <p className="text-gray-700 text-sm">
                {bias.description.length > 150 
                  ? bias.description.substring(0, 150) + "..." 
                  : bias.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}