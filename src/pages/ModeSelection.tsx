import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'

const modes = [
  {
    icon: 'auto_awesome',
    title: '교훈으로 승화',
    label: 'The Lesson',
    quote: '"그 실패는 사실 도약의 발판이었습니다"',
  },
  {
    icon: 'newspaper',
    title: '뉴스 기사 스타일',
    label: 'The News',
    quote: '"오늘의 주요 뉴스: 당신의 실수는 대단한 해프닝"',
  },
  {
    icon: 'visibility_off',
    title: '음모론 만들기',
    label: 'The Conspiracy',
    quote: '"정부는 사실 당신이 늦잠 자길 원했습니다"',
  },
  {
    icon: 'gavel',
    title: '법정 재판',
    label: 'The Verdict',
    quote: '"판결: 당신의 잘못이 아님을 선고함"',
  },
]

export default function ModeSelection() {
  const navigate = useNavigate()
  const location = useLocation()
  const memory: string = location.state?.memory || ''
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary/30">
      <Header activeNav="저장소" />

      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* SideNav */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 bg-[#1A1A1A] p-6 rounded-xl h-fit sticky top-32 border border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5efS_i37lkM2tt1Q9LEBe6aTWt45RLKIhOzzVxO6rJFDVp49f_s0Vlt5shkw6t-2SmSHxJkLT3uTby4AuuGuVxdoRTi82Bg6lnIIMBAc0XxArcjBt3qfivCDy23HkmSsK1LNgldM-uuPqmbQt77qHrmypmj5AaWKTWVWAi4yWIpfLZ1jfqJbZB9GHJGOO4YfkpWKDgCZAQbUPSIYRSoOB0yjPfvGWsWHh0dZQYWxfQOe9g3q2vlhrxvKAnF_S85f2z8XjIMZS-_W8"
                alt="사용자 프로필"
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
            <div>
              <p className="text-lg font-black text-white font-headline">임상 큐레이터</p>
              <p className="text-[0.7rem] text-[#D1D1D1]/40 uppercase tracking-widest font-label">Lead Specialist</p>
            </div>
          </div>

          <nav className="space-y-1 mb-10">
            {[
              { icon: 'upload_file', label: '기억 업로드' },
              { icon: 'content_cut', label: '수술대', active: true },
              { icon: 'inventory_2', label: '기록 보관소' },
              { icon: 'delete_forever', label: '영구 삭제' },
            ].map(({ icon, label, active }) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-3 p-3 rounded-lg group transition-all ${
                  active
                    ? 'bg-white/10 text-primary font-semibold shadow-sm'
                    : 'text-[#D1D1D1]/40 hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined group-active:scale-95 duration-150">{icon}</span>
                <span className="font-body text-[0.875rem]">{label}</span>
              </a>
            ))}
          </nav>

          <p className="mt-4 text-[0.75rem] text-center text-[#D1D1D1]/30 font-body italic leading-tight">
            과거를 개선하십시오.
          </p>
        </aside>

        {/* Main Content */}
        <section className="flex-1 space-y-12">
          <div className="max-w-2xl">
            <p className="text-label text-primary font-semibold tracking-widest uppercase mb-2">
              Stage 02: Recalibration
            </p>
            <h2 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1] mb-6">
              수술대 위에 놓인 기억,<br />어떤 질감으로 덮을까요?
            </h2>
            <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
              <p className="text-on-surface-variant font-body leading-relaxed italic">
                {memory ? `"${memory}"` : '입력된 기억이 없습니다.'}
              </p>
            </div>
          </div>

          {/* Mode Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-0 md:pr-12">
            {modes.map(({ icon, title, label, quote }) => {
              const selected = selectedLabel === label
              return (
                <div
                  key={label}
                  onClick={() => setSelectedLabel(label)}
                  className={`group cursor-pointer p-8 rounded-lg transition-all border flex flex-col justify-between min-h-[220px] shadow-sm ${!selected && 'hover:border-primary/40 hover:bg-[#252525]'}`}
                  style={{
                    backgroundColor: selected ? '#ffffff' : '#1E1E1E',
                    borderColor: selected ? '#ffffff' : 'rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="space-y-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-md transition-colors"
                      style={{ backgroundColor: selected ? 'rgba(138,43,226,0.15)' : 'rgba(138,43,226,0.1)' }}
                    >
                      <span className="material-symbols-outlined text-3xl" style={{ color: '#8A2BE2' }}>{icon}</span>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold font-headline mb-1 transition-colors"
                        style={{ color: selected ? '#000000' : '#F2F4F4' }}
                      >
                        {title}
                      </h3>
                      <p className="text-sm font-label tracking-tight uppercase" style={{ color: 'rgba(138,43,226,0.7)' }}>{label}</p>
                    </div>
                  </div>
                  <p
                    className="mt-6 text-[0.9rem] font-medium italic border-t py-4 transition-colors"
                    style={{
                      color: selected ? '#000000' : '#D1D1D1',
                      borderColor: selected ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {quote}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Footer Action */}
          <div className="flex justify-end pr-12 pt-8">
            <div className="flex flex-col items-end gap-4">
              <p className="text-xs text-on-surface-variant/40 font-label text-right max-w-xs">
                * 선택된 모드는 비가역적이며, 원래의 감정적 고통은 인위적인 평온함으로 대체됩니다.
              </p>
              <button
                onClick={() => selectedLabel && navigate('/result', { state: { memory, mode: selectedLabel } })}
                className="px-12 py-5 bg-primary text-on-primary font-bold rounded-md hover:bg-primary-dim transition-colors flex items-center gap-2 group shadow-lg shadow-primary/20"
              >
                수술 집도하기
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Visual Artifact */}
      <div className="fixed bottom-0 right-0 p-8 pointer-events-none opacity-[0.03]">
        <p className="text-[8rem] font-black text-primary font-headline select-none leading-none tracking-tighter">SURGERY</p>
      </div>
    </div>
  )
}
