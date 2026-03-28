import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function InputMemory() {
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const MAX = 600

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-8 py-6 bg-background sticky top-0 z-50 border-b border-outline-variant/30">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tighter text-on-background uppercase font-headline hover:opacity-70 transition-opacity">
            MEMORY ALCHEMY
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative"
        style={{ background: 'linear-gradient(180deg, #121212 0%, rgba(138,43,226,0.05) 100%)' }}>

        {/* Decorative */}
        <div className="absolute top-24 left-12 opacity-5 pointer-events-none">
          <h2 className="font-headline text-[8rem] font-extrabold tracking-tighter leading-none text-primary">01</h2>
          <p className="font-label text-xs uppercase tracking-widest mt-2 text-on-background">Intake Procedure</p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-12">
          {/* Label */}
          <div className="flex flex-col gap-2 border-l-2 border-primary/40 pl-6">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary font-semibold">
              Memories for Improvement
            </span>
            <h1 className="font-headline text-3xl font-semibold text-on-surface tracking-tight">
              기억 조작단: 기억의 재구성
            </h1>
          </div>

          {/* Title + Image */}
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center">
              오늘 어떤 기억을 지우고 싶으신가요?
            </h2>
            <img
              src="/maninblack.webp"
              alt="man in black"
              className="w-full max-w-lg rounded-lg object-cover"
            />
          </div>

          {/* Input Box */}
          <div className="bg-surface-container-lowest rounded-lg p-10 md:p-16 relative overflow-hidden ring-1 ring-white/[0.05] focus-within:ring-primary/30 transition-shadow"
            style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            {/* Dot texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#8A2BE2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10">
              <textarea
                className="w-full h-48 bg-transparent border-none p-0 text-lg font-light leading-relaxed text-on-surface resize-none focus:outline-none focus:ring-0"
                placeholder="기억을 입력하세요..."
                style={{ color: '#F2F4F4' }}
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, MAX))}
                spellCheck={false}
              />

              <div className="mt-12 flex justify-between items-end border-t border-outline-variant/30 pt-8">
                <div className="flex flex-col gap-1">
                  <p className="text-[0.875rem] text-on-surface-variant italic font-light">
                    당신의 기억은 가장 아름다운 형태로 보존됩니다.
                  </p>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1 font-label text-[0.65rem] uppercase tracking-wider text-on-surface-variant/60 hover:text-primary transition-colors cursor-default">
                      <span className="material-symbols-outlined text-[14px]">lock</span> Encrypted
                    </span>
                    <span className="flex items-center gap-1 font-label text-[0.65rem] uppercase tracking-wider text-on-surface-variant/60 hover:text-primary transition-colors cursor-default">
                      <span className="material-symbols-outlined text-[14px]">history_edu</span> Formal Record
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <span className="font-label text-xs tracking-widest text-primary/80">
                    <span className="text-on-surface font-medium">{text.length}</span> / {MAX}
                  </span>
                  <button
                    onClick={() => navigate('/mode', { state: { memory: text } })}
                    className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-[0.98]"
                  >
                    <span className="font-headline text-sm font-semibold tracking-wide uppercase">기억 미화 시작</span>
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex justify-end pr-4">
            <p className="max-w-xs text-right text-[0.75rem] text-on-surface-variant/50 leading-relaxed font-light">
              제출된 모든 기억은 윤리적 가이드라인에 따라 처리되며, 개선 작업이 완료된 후 원본 데이터는 영구적으로 소멸됩니다.
            </p>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="hidden lg:block absolute bottom-12 right-12 w-64 h-80 rounded-xl overflow-hidden backdrop-blur-xl border border-white/[0.08] p-6 transform rotate-3"
          style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <div className="h-full border border-primary/20 flex flex-col justify-between p-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-primary/20 rounded" />
              <div className="h-2 w-4/5 bg-primary/20 rounded" />
              <div className="h-2 w-2/3 bg-primary/20 rounded" />
            </div>
            <span className="font-label text-[0.6rem] uppercase tracking-widest text-primary/60">Visualizer v.2.4</span>
          </div>
        </div>
      </main>
    </div>
  )
}
