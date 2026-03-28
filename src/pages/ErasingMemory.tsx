import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STEPS = ['기억 탐색 중...', '감정 흔적 제거 중...', '잔존 미련 분석 중...', '삭제 중...']
const STEP_DURATION = 900

export default function ErasingMemory() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [displayProgress, setDisplayProgress] = useState(0)
  const totalDuration = STEPS.length * STEP_DURATION + 400

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < STEPS.length - 1) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, STEP_DURATION)

    const timer = setTimeout(() => navigate('/failed'), totalDuration)
    setTimeout(() => setProgress(99.9), 50)

    const tickInterval = 50
    const tickCount = (totalDuration - 50) / tickInterval
    const increment = 99.9 / tickCount
    let current = 0
    const progressInterval = setInterval(() => {
      current = Math.min(current + increment, 99.9)
      setDisplayProgress(current)
      if (current >= 99.9) clearInterval(progressInterval)
    }, tickInterval)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [navigate])

  return (
    <div className="font-body selection:bg-brand-accent/30 min-h-screen" style={{ background: '#0a0a0a', color: '#e1e3e3' }}>
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
        style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAwPj5pzCgmjLVnULlzDiNsCDeUeXSBOswa4Db0mkDIWBOHBTXKsWGosRHQbbxts6VS4PIkVbuKV8Z-f-BmcYS_cOcyvtlUPfAaSFAqeiBkP9gby4J9sHZwdfq-5Sx37eJ721LHNAS73SmkmqQKsMn-DYURIDoQXUF-r7Ly8QXB7mUhCuR3Nm2g8ekNgjfOiNgUU3Vuh4e-bzMdHk67aU0oias171P36FLW5_mVEJUh4Nsy_7gcjC3YJpYgpDekVt6_S6NrwxEpQKX-)' }}
      />

      {/* Procedure label */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 z-20">
        <div className="px-4 py-1 border border-[#A855F7]/20 rounded-full backdrop-blur-md" style={{ background: 'rgba(30,33,33,0.3)' }}>
          <span className="font-label text-[9px] uppercase tracking-[0.3em] text-[#A855F7]/90">Procedure: IMPROVE_PAST_V4</span>
        </div>
      </div>

      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6" style={{ background: '#0a0a0a' }}>
        {/* Background glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(168,85,247,0.1)' }} />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: 'rgba(63,72,74,0.1)' }} />
        </div>

        <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-12 opacity-80">
            <span className="material-symbols-outlined text-4xl text-[#A855F7]"
              style={{ fontVariationSettings: "'wght' 200", filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.5))' }}>
              leak_remove
            </span>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            <header className="mb-16">
              <h1 className="font-headline text-xs tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(191,200,202,0.4)' }}>
                System Status: Permanent Erasure
              </h1>
              <div className="h-[1px] w-12 mx-auto" style={{ background: 'rgba(168,85,247,0.4)' }} />
            </header>

            <div className="relative flex flex-col items-center justify-center space-y-4">
              {STEPS.map((label, i) => {
                const isActive = i === step
                const isPast = i < step
                return isActive ? (
                  <div key={i} className="py-2 px-8 rounded-lg border backdrop-blur-sm transition-all duration-500"
                    style={{ background: 'rgba(21,21,21,0.5)', borderColor: 'rgba(168,85,247,0.2)', boxShadow: '0 0 20px rgba(168,85,247,0.1)' }}>
                    <p className="font-headline text-2xl font-medium tracking-tight text-glow" style={{ color: '#A855F7' }}>{label}</p>
                  </div>
                ) : (
                  <p key={i} className="font-headline text-2xl font-light tracking-tight transition-all duration-500"
                    style={{ color: isPast ? 'rgba(225,227,227,0.25)' : 'rgba(225,227,227,0.08)' }}>
                    {label}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-20 w-full max-w-xs space-y-3">
            <div className="flex justify-between items-end mb-1">
              <span className="font-label text-[10px] uppercase tracking-widest" style={{ color: 'rgba(191,200,202,0.5)' }}>Processing Delta</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-[#A855F7]">{displayProgress.toFixed(1)}%</span>
            </div>
            <div className="h-[2px] w-full relative overflow-hidden" style={{ background: '#2d3132' }}>
              <div
                className="absolute top-0 left-0 h-full bg-[#A855F7]"
                style={{
                  width: `${progress}%`,
                  boxShadow: '0 0 8px rgba(168,85,247,0.6)',
                  transition: `width ${totalDuration - 50}ms linear`,
                }}
              />
              <div className="absolute top-0 left-0 h-full w-full shimmer-bar opacity-80" />
            </div>
            <div className="flex justify-between items-start pt-1 opacity-40">
              <span className="font-label text-[8px] tracking-tight">UUID: 882-X-9102</span>
              <span className="font-label text-[8px] tracking-tight text-[#A855F7]">SECURE_LEVEL: OMEGA</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" style={{ boxShadow: '0 0 5px rgba(168,85,247,0.8)' }} />
              <span className="font-label text-[10px] uppercase tracking-widest" style={{ color: 'rgba(191,200,202,0.8)' }}>Destructive Process Active</span>
            </div>
            <p className="text-[10px] max-w-[180px] leading-relaxed" style={{ color: 'rgba(191,200,202,0.4)' }}>
              This action is irreversible. Neuro-patterns are being reformatted according to Clinical Curator protocol.
            </p>
          </div>
          <div className="text-right">
            <span className="font-headline text-lg font-black tracking-tighter uppercase" style={{ color: 'rgba(168,85,247,0.2)' }}>MEMORY ALCHEMY</span>
          </div>
        </footer>

      </main>
    </div>
  )
}
