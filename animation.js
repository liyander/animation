export const animationStyles = `
        @keyframes rocket-launch {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          20% {
            transform: translateY(60vh) rotate(-2deg);
          }
          40% {
            transform: translateY(30vh) rotate(2deg);
          }
          60% {
            transform: translateY(10vh) rotate(-1deg);
          }
          80% {
            transform: translateY(-15vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-25vh) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes graffiti-pop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-10deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(3deg);
          }
          70% {
            transform: scale(0.95) rotate(-2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(2);
          }
        }

        @keyframes flame {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(1.15) scaleX(0.9);
            opacity: 0.9;
          }
        }

        @keyframes flame-outer {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(1);
          }
          33% {
            transform: translateX(-50%) scaleY(1.1) scaleX(1.1);
          }
          66% {
            transform: translateX(-50%) scaleY(0.95) scaleX(0.95);
          }
        }

        @keyframes smoke {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(40px) scale(2);
            opacity: 0;
          }
        }

        .animate-rocket-launch {
          animation: rocket-launch 1.8s ease-out forwards;
        }

        .animate-graffiti-pop {
          animation: graffiti-pop 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }

        .animate-flame {
          animation: flame 0.15s ease-in-out infinite;
        }

        .animate-flame-outer {
          animation: flame-outer 0.2s ease-in-out infinite;
        }

        .animate-smoke {
          animation: smoke 0.8s ease-out infinite;
        }

        .rocket-container {
          filter: drop-shadow(0 0 10px rgba(255, 150, 50, 0.5));
        }
`;
