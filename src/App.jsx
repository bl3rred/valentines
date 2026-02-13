import React, { useState, useRef } from 'react';
import { Heart, Lock, Gift, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('password');
  const [password, setPassword] = useState('');
  const [selectedChocolate, setSelectedChocolate] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const noButtonRef = useRef(null);

  const reasons = [
    { id: 1, number: '1', reason: 'I always feel happy around you.' },
    { id: 2, number: '2', reason: 'Your cuddles and hugs and kisses always make me feel comfy and warm.' },
    { id: 3, number: '3', reason: 'I get to eat super yummy and tasty food made by the cutest chef in the whole world.' },
    { id: 4, number: '4', reason: 'You make everything fun no matter what.' },
    { id: 5, number: '5', reason: "You're very heartwarming and patient, and we always try to make things right in the end." },
    { id: 6, number: '6', reason: 'We can always support each other.' },
    { id: 7, number: '7', reason: 'Your beautiful smile, eyes, laugh, and everythinggg.' },
    { id: 8, number: '8', reason: 'I just do and I said sooo.' },
    { id: 9, number: '9', reason: 'Just the thought of you makes me happy and want to be with you.' },
    { id: 10, number: '10', reason: "You're my baby even when you want to be strong and independent." },
    { id: 11, number: '11', reason: 'I want to love you always.' },
    { id: 12, number: '12', reason: 'All these reasons and more!!!!' },
  ];

  const quizQuestions = [
    { id: 1, question: 'Where did we first meet?', options: ['Science Olympiad', 'Calculus AB Class', "Walker's Class", 'Emilio introduced us'], correct: 'Calculus AB Class' },
    { id: 2, question: 'What did we eat after prom?', options: ['Just Pho', 'Ice Cream and Pho', 'Korean BBQ', 'Just Ice Cream'], correct: 'Ice Cream and Pho' },
    { id: 3, question: 'Where did we first kiss (on the lips)?', options: ['My car', 'Never', 'My room', 'None of the Above'], correct: 'My room' },
    { id: 4, question: 'Where did we go during our first air trajectory meeting?', options: ['Lowes', 'Your living room', 'Benches outside your house', 'School'], correct: 'Benches outside your house' },
    { id: 5, question: 'Where were you when I confessed my feelings?', options: ['School', 'Taiwan', 'Home', 'My House'], correct: 'Taiwan' },
    { id: 6, question: 'What is our most played roblox game together?', options: ['Adopt Me', 'Would you Rather', 'Grow a Garden', 'Steal the Domo'], correct: 'Grow a Garden' },
    { id: 7, question: 'Who is my rival?', options: ['Kaneki', 'Mr. Wells', 'Emilio', 'Mochi'], correct: 'Mochi' },
    { id: 8, question: "What's my phone password?", options: ['0000', '1114', '6092', '1234'], correct: '1114' },
    { id: 9, question: "Who's the cutest girl ever?", options: ['you', 'you', 'still you', 'you again'], correct: 'you' },
    { id: 10, question: 'Where do I not like being touched?', options: ['my back', 'my butt', 'my feet', 'my arms'], correct: 'my butt' },
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'makayla') {
      setCurrentPage('chocolates');
    }
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: answer });
  };

  const getWrongCount = () => {
    return quizQuestions.filter(q => {
      if (q.id === 9) return false;
      return quizAnswers[q.id] && quizAnswers[q.id] !== q.correct;
    }).length;
  };

  const handleFinalYes = () => {
    setShowCelebration(true);
  };

  const moveNoButton = () => {
    setNoAttempts(prev => prev + 1);
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-200/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ♡
          </div>
        ))}
      </div>

      {currentPage === 'password' && (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="max-w-md w-full">
            <div className="text-center mb-8 sm:mb-12 animate-slideDown">
              <div className="inline-block p-4 sm:p-6 bg-rose-200/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm relative">
                <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-rose-400" />
                <div className="absolute -top-2 -right-2 text-2xl sm:text-3xl animate-bounce">💌</div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-rose-900 mb-3 px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                A Special Message
              </h1>
              <p className="text-base sm:text-lg text-rose-700/80 px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                For someone extraordinary
              </p>
              <div className="text-4xl sm:text-5xl mt-4 sm:mt-6 animate-float">💝</div>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4 sm:space-y-6 animate-slideUp px-4">
              <div>
                <label className="block text-rose-800 mb-2 text-sm font-medium tracking-wide">
                  Enter the password
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-rose-200 bg-white/50 backdrop-blur-sm focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all text-rose-900 placeholder-rose-300 text-base sm:text-lg"
                  placeholder="Type here..."
                  autoFocus
                />
              </div>
              <div className="text-center text-sm text-rose-600/70 italic flex items-center justify-center gap-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <span>💭 Hint: Your name</span>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-300 to-pink-300 text-rose-900 py-3 sm:py-4 rounded-2xl font-medium hover:from-rose-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 text-base sm:text-lg"
              >
                Unlock 🔓
              </button>
            </form>
          </div>
        </div>
      )}

      {currentPage === 'chocolates' && (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-8 sm:mb-12 animate-slideDown">
              <div className="inline-block p-4 sm:p-6 bg-rose-200/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm relative">
                <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-rose-400" />
                <div className="absolute -top-1 -right-1 text-xl sm:text-2xl animate-bounce">🎀</div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-rose-900 mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Reasons I Love You
              </h2>
              <p className="text-base sm:text-lg text-rose-700/80 px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Click each chocolate to reveal a reason 🍫
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8 animate-slideUp px-4">
              {reasons.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedChocolate(selectedChocolate === item.id ? null : item.id)}
                  className="cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative p-4 sm:p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 ${
                    selectedChocolate === item.id 
                      ? 'bg-rose-300/40 shadow-2xl' 
                      : 'bg-white/40 shadow-lg hover:bg-white/60'
                  }`}>
                    <div className="text-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedChocolate === item.id ? 'bg-rose-400 scale-110' : 'bg-rose-200'
                      }`}>
                        {selectedChocolate === item.id ? (
                          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current animate-pulse" />
                        ) : (
                          <span className="text-xl sm:text-2xl">🍫</span>
                        )}
                      </div>
                      
                      {selectedChocolate === item.id ? (
                        <div className="animate-fadeIn">
                          <p className="text-rose-900 font-medium mb-2 text-sm sm:text-base leading-snug" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            {item.reason}
                          </p>
                        </div>
                      ) : (
                        <p className="text-rose-700 text-lg sm:text-xl font-bold">
                          {item.number}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center px-4">
              <button
                onClick={() => setCurrentPage('quiz')}
                className="bg-gradient-to-r from-rose-300 to-pink-300 text-rose-900 px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-medium hover:from-rose-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 text-base sm:text-lg"
              >
                Continue → ✨
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'quiz' && (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8 sm:mb-12 animate-slideDown">
              <div className="inline-block p-4 sm:p-6 bg-rose-200/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm relative">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-rose-400" />
                <div className="absolute -top-1 -right-1 text-xl sm:text-2xl animate-spin-slow">✨</div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-rose-900 mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How Well Do We Match?
              </h2>
              <p className="text-base sm:text-lg text-rose-700/80 px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Answer these questions about us 💑
              </p>
              {getWrongCount() > 0 && (
                <div className="mt-4 px-4">
                  <div className="inline-block bg-rose-200/50 backdrop-blur-sm px-6 py-3 rounded-full animate-bounce">
                    <p className="text-rose-800 font-medium text-sm sm:text-base" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Oops! {getWrongCount()} {getWrongCount() === 1 ? 'answer is' : 'answers are'} incorrect 😅
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4 sm:space-y-8 mb-6 sm:mb-8 animate-slideUp px-4">
              {quizQuestions.map((q, index) => (
                <div 
                  key={q.id} 
                  className="bg-white/40 backdrop-blur-sm p-4 sm:p-8 rounded-3xl shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-base sm:text-xl text-rose-900 mb-4 sm:mb-6 font-medium leading-snug" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {q.question}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {q.options.map((option) => {
                      const isSelected = quizAnswers[q.id] === option;
                      const isCorrect = option === q.correct || q.id === 9; 
                      const isWrong = isSelected && !isCorrect;
                      
                      return (
                        <button
                          key={option}
                          onClick={() => handleQuizAnswer(q.id, option)}
                          className={`px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                            isWrong
                              ? 'bg-rose-200/60 text-rose-900 shadow-lg scale-105 border-2 border-rose-400'
                              : isSelected
                              ? 'bg-gradient-to-r from-rose-300 to-pink-300 text-rose-900 shadow-lg scale-105'
                              : 'bg-white/60 text-rose-700 hover:bg-white/80 active:scale-95'
                          }`}
                        >
                          {option} {isWrong && '❌'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center px-4">
              <button
                onClick={() => setCurrentPage('final')}
                disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                className="bg-gradient-to-r from-rose-300 to-pink-300 text-rose-900 px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-medium hover:from-rose-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-base sm:text-lg"
              >
                Continue → 💕
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'final' && (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 animate-fadeIn relative overflow-hidden">
          {showCelebration && (
            <>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-2xl sm:text-3xl md:text-4xl animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-20%`,
                      animation: `fall ${2 + Math.random() * 3}s ease-out forwards`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  >
                    {['❤️', '💕', '💖', '🌹', '✨', '💝', '💗', '🎀'][Math.floor(Math.random() * 8)]}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="max-w-2xl w-full text-center relative z-10">
            <div className="mb-8 sm:mb-12 animate-slideDown">
              <div className="inline-block p-6 sm:p-8 bg-rose-200/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-pulse relative">
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-400 fill-current" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-rose-900 mb-6 sm:mb-8 px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                A Message for my Love
              </h2>
              
              <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-12 rounded-3xl shadow-2xl mb-6 sm:mb-8 animate-slideUp mx-4">
                <p className="text-base sm:text-lg md:text-xl text-rose-900 leading-relaxed mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Hello my love,
                </p>
                <p className="text-base sm:text-lg md:text-xl text-rose-900 leading-relaxed mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  I love you so much, and I hope that we may continue our love forever.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-rose-900 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Will you be my valentine?
                </p>
              </div>

              {!showCelebration ? (
                <div className="animate-scaleIn">
                  <h3 className="text-2xl sm:text-3xl font-serif text-rose-900 mb-8">Will you be my Valentine? 💖</h3>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 relative">
                    <button
                      onClick={handleFinalYes}
                      className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-16 py-6 rounded-2xl text-2xl font-medium shadow-2xl transition-all"
                    >
                      Yes! 💕
                    </button>
                    <button
                      ref={noButtonRef}
                      onMouseEnter={moveNoButton}
                      onClick={moveNoButton}
                      className="bg-gray-300 text-gray-700 px-16 py-6 rounded-2xl text-2xl transition-all"
                      style={{ 
                        transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                        position: noAttempts > 0 ? 'absolute' : 'relative'
                      }}
                    >
                      No 😔
                    </button>
                  </div>
                </div>
              ) : (
                <div className="animate-scaleIn space-y-6">
                  <div className="text-7xl animate-bounce">🎉</div>
                  <h3 className="text-4xl font-serif text-rose-900">Happy Valentine's Day! ✨</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
