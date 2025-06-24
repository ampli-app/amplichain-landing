import React, { useEffect } from "react";
import { UserCheck } from "lucide-react";

declare global {
  interface Window {
    Tally: {
      loadEmbeds: () => void;
    };
  }
}

const WaitlistSection: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  // Load Tally script when component mounts
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    
    // Append to document head
    document.head.appendChild(script);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Load Tally embeds after component renders
  useEffect(() => {
    // Load embeds if Tally is available
    if (window.Tally && !submitted) {
      window.Tally.loadEmbeds();
    }
  }, [submitted]);

  // Handle form submission success
  const handleFormSuccess = () => {
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // We'll use this to listen for messages from the Tally iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Tally
      if (event.data.type === 'tally.form.submitted') {
        handleFormSuccess();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section id="waitlist" className="section py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Bądź jednym z pierwszych
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Dołącz do listy oczekujących i otrzymaj dostęp do platformy przed oficjalnym startem.
            <br />
            <span className="text-ampli-green font-medium">
              Zapisując się teraz otrzymasz kod rabatowy na start!
            </span>
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center animate-scale-in">
              <UserCheck size={48} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Dziękujemy za dołączenie!</h3>
              <p className="text-green-700 text-center">
                Zostałeś zapisany na listę oczekujących. Będziemy informować Cię o postępach w rozwoju Amplichain.
              </p>
            </div>
          ) : (
            <div className="tally-embed">
              <iframe 
                data-tally-src="https://tally.so/embed/m6pqbA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="476" 
                frameBorder="0" 
                title="Amplichain Waitlist"
              ></iframe>
              
              <p className="text-xs text-gray-500 text-center pt-4">
                Zapisując się, wyrażasz zgodę na otrzymywanie informacji marketingowych od Amplichain. Możesz zrezygnować w każdej chwili.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
