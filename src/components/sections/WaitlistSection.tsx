
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, UserCheck } from "lucide-react";

const WaitlistSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log("Form submitted:", { name, email, additionalInfo });
    
    // Show success message
    setSubmitted(true);
    
    // Clear form
    setName("");
    setEmail("");
    setAdditionalInfo("");
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="waitlist" className="section py-20 bg-gradient-to-br from-ampli-green/10 to-ampli-blue/10">
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Imię <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Twoje imię"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="twoj@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="additionalInfo" className="block text-sm font-medium">
                  Dodatkowe informacje (opcjonalnie)
                </label>
                <textarea
                  id="additionalInfo"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Napisz czego najbardziej oczekujesz od platformy?"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-y"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-ampli-green hover:bg-ampli-lightgreen text-white py-6 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" /> Zapisz się na premierę
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center pt-4">
                Zapisując się, wyrażasz zgodę na otrzymywanie informacji marketingowych od Amplichain. Możesz zrezygnować w każdej chwili.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
