import { useState, useEffect } from 'react';
import { Heart, Gift, Stars, PartyPopper, SparkleIcon } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const sweetMessages = [
    "My love, every time you smile at me, my heart skips a beat. You're my everything. - Akshat ❤️",
    "I fall more in love with you each day. Your love is the greatest gift I could ever ask for. - Akshat 💝",
    "You're the reason my heart beats, the reason I smile, the reason I believe in love. - Akshat 💖",
    "Baby, you're not just my girlfriend, you're my soulmate, my future, my forever. - Akshat 💕",
    "Your love makes my world complete. I can't wait to spoil you this Valentine's Day! - Akshat 💗"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const messageRotation = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % sweetMessages.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(messageRotation);
    };
  }, []);

  function calculateTimeLeft() {
    const valentinesDay = new Date('2025-02-14T00:00:00');
    const now = new Date();
    const difference = valentinesDay.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-purple-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-pink-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <SparkleIcon
            key={`sparkle-${i}`}
            className="absolute animate-pulse text-yellow-400 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${0.3 + Math.random() * 0.5})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 animate-fade-in">
              My Darling, Be My Valentine ❤️
            </h1>
          </div>
          <p className="text-xl text-gray-700 italic animate-fade-in-delayed">
            A special message to from <b>Akshat</b>, who loves you more than words can express...
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl mb-12 transform hover:scale-105 transition-transform duration-300 max-w-full mx-auto">
          <h2 className="text-2xl sm:text-3xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-semibold">
            Counting Down to Our Most Romantic Valentine's Day Ever...
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center bg-gradient-to-b from-pink-50 to-purple-50 p-6 rounded-lg shadow-inner flex flex-col items-center justify-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  {value}
                </div>
                <div className="text-gray-600 capitalize font-medium mt-2">{unit}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Love Letter Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowLetter(!showLetter)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Heart className={`${showLetter ? 'animate-bounce' : ''}`} />
            {showLetter ? "Close My Heart" : "Read My Love Letter"}
          </button>
          {showLetter && (
            <div className="mt-6 animate-fade-in max-w-2xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">My Dearest Love,</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From the moment you entered my life, everything changed. Your smile lights up my world, your touch makes my heart race, and your love gives meaning to every single day. As Valentine's Day approaches, I want you to know just how deeply and completely I am in love with you.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You're the first person I think about when I wake up and the last person on my mind before I fall asleep. Your love makes me want to be a better person every day. I cherish every moment we spend together, every laugh we share, and every memory we create.
                </p>
                <p className="text-right text-xl font-script text-pink-600">
                  Forever & Always Yours,<br />
                  Akshat ❤️
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sweet Messages Carousel */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <Stars className="text-yellow-400 mr-2" />
            <h2 className="text-2xl text-pink-600 font-semibold">Love Notes Just For You</h2>
          </div>
          <div className="h-32 flex items-center justify-center">
            <p className="text-xl text-gray-700 text-center animate-fade-in">
              {sweetMessages[activeMessageIndex]}
            </p>
          </div>
        </div>

        {/* Mystery Gift Box */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsGiftOpen(!isGiftOpen)}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Gift className={`transition-transform duration-300 ${isGiftOpen ? 'rotate-12' : ''}`} />
            {isGiftOpen ? "Your Special Surprise! 💝" : "Click to Reveal Your Valentine's Surprise..."}
          </button>
          {isGiftOpen && (
            <div className="mt-4 animate-fade-in">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 inline-block shadow-xl">
                <PartyPopper className="text-yellow-400 mb-2 mx-auto animate-bounce" />
                <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text mb-2">
                  🌹 A Night of Romance Awaits 🌹
                </p>
                <p className="text-gray-700">
                  Get ready for a magical evening filled with:<br />
                  ✨ Candlelit dinner under the stars<br />
                  💝 Special surprises just for you<br />
                  🌙 Romantic moonlight walk<br />
                  💑 Endless cuddles and kisses<br />
                  <span className="text-sm text-pink-600 mt-2 block">- From your Akshat, with all my love 💕</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Message */}
        <div className="text-center text-gray-700 mt-16">
          <p className="italic text-lg">
            "Baby, you make my heart skip a beat... and maybe you could surprise me with something sweet? 😘"
            <br />
            <span className="font-semibold text-pink-600">- Your Akshat 💝</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;