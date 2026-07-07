import { useState, useRef, useEffect } from 'react';
import { Headphones, Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  let audioSrc = src;
  
  // Converter link do Drive (preview/view) para link direto de download
  if (src.includes('drive.google.com') && src.includes('/d/')) {
    const match = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      audioSrc = `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
  }

  const changeSpeed = () => {
    const newRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [audioSrc, playbackRate]);

  return (
    <div className="mb-6 bg-areia-suave/50 rounded-xl p-4 border border-areia-escura">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-marrom-terra flex items-center gap-2">
          <Headphones className="h-4 w-4" /> 
          Áudio da Aula
        </h4>
        <button
          onClick={changeSpeed}
          className="px-3 py-1 bg-marrom-terra text-white text-xs font-bold rounded-lg hover:bg-marrom-terra/90 transition-colors"
          title="Alterar velocidade de reprodução"
        >
          {playbackRate}x
        </button>
      </div>
      <audio 
        ref={audioRef}
        key={audioSrc} 
        controls 
        className="w-full h-10 outline-none" 
        src={audioSrc}
      >
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}
