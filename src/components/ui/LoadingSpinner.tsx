'use client';

export default function LoadingSpinner() {
  const balls = [
    { color: 'bg-red-500', delay: '0s' },
    { color: 'bg-blue-500', delay: '0.1s' },
    { color: 'bg-green-500', delay: '0.2s' },
    { color: 'bg-yellow-500', delay: '0.3s' },
    { color: 'bg-purple-500', delay: '0.4s' },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes smoothBounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
        }
        .bouncing-ball {
          animation: smoothBounce 1.2s infinite ease-in-out;
        }
      `}</style>
      
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          {/* 5 Bouncing Balls */}
          <div className="flex items-end space-x-2 h-16">
            {balls.map((ball, index) => (
              <div
                key={index}
                className={`w-4 h-4 ${ball.color} rounded-full bouncing-ball shadow-lg`}
                style={{
                  animationDelay: ball.delay,
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          {/* <div className="text-lg font-medium text-gray-700 animate-pulse">
            Loading...
          </div> */}
        </div>
      </div>
    </>
  );
}