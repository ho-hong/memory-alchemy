import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { transformMemory } from '../api/transform'
import ReactMarkdown from 'react-markdown'

export default function BeautifiedResult() {
  const navigate = useNavigate()
  const location = useLocation()
  const memory: string = location.state?.memory || ''
  const mode: string = location.state?.mode || ''

  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!memory || !mode) return
    transformMemory(mode, memory)
      .then(setResult)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [memory, mode])

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      {/* TopAppBar */}
      <nav className="bg-[#0F0F0F] flex justify-between items-center w-full px-8 py-6 sticky top-0 z-50 border-b border-[#262626]">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-bold tracking-tighter text-white uppercase font-headline hover:opacity-70 transition-opacity">MEMORY ALCHEMY</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        {/* Header */}
        <header className="max-w-3xl">
          <span className="text-xs font-label tracking-[0.2em] text-[#8A2BE2] uppercase mb-4 block">
            Operation: Aesthetic Enhancement — {mode}
          </span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-white leading-[0.9] mb-6">
            개선된 기억의 아카이브.
          </h1>
          <p className="text-lg text-[#A1A1A1] font-body leading-relaxed max-w-xl">
            기억의 파편이 정교한 서사로 재구성되었습니다. 이제 당신의 과거는 보존할 가치가 있는 기록이 되었습니다.
          </p>
        </header>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Panel: 변환된 기억 */}
          <section className="lg:col-span-8 bg-[#151515] rounded-lg overflow-hidden border border-[#262626]">
            <div className="p-10 md:p-16">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#8A2BE2]" />
                <span className="text-xs font-label text-[#8A2BE2] tracking-widest uppercase">The Refined Narrative</span>
              </div>

              {loading && (
                <div className="flex flex-col items-center justify-center py-24 gap-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A2BE2] animate-ping" />
                  <p className="text-[#A1A1A1] font-body text-sm tracking-widest uppercase animate-pulse">
                    기억을 미화하는 중...
                  </p>
                </div>
              )}

              {error && (
                <div className="py-12 text-center">
                  <p className="text-red-400 font-body text-sm mb-2">오류가 발생했습니다</p>
                  <p className="text-[#A1A1A1] text-xs font-label">{error}</p>
                </div>
              )}

              {!loading && !error && (
                <div className="font-body text-[#E1E1E1] leading-loose text-base prose prose-invert max-w-none
                  prose-p:my-2 prose-p:leading-loose
                  prose-strong:text-white prose-strong:font-bold
                  prose-headings:text-white prose-headings:font-headline prose-headings:tracking-tight
                  prose-ul:my-2 prose-li:my-0.5">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              )}

              <div className="mt-12 flex justify-end">
                <span className="text-xs font-label text-[#757c7d] uppercase tracking-tighter">
                  Archived by Clinical Curator v4.2
                </span>
              </div>
            </div>
          </section>

          {/* Side Panel: 원본 기억 */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#0e1111] p-8 rounded-lg border border-[#444444]/30 opacity-80">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#757c7d]">history</span>
                  <span className="text-xs font-label text-[#757c7d] uppercase tracking-wider">Original Input</span>
                </div>
                <span className="px-2 py-1 bg-[#2A2A2A] text-[10px] font-label text-[#D1D1D1] rounded">원본 기억</span>
              </div>
              <div className="font-body text-sm leading-relaxed italic border-l-2 border-[#444444]/30 pl-4 whitespace-pre-wrap" style={{ color: 'rgba(255,255,255,0.7)' }}>
                "{memory}"
              </div>
              <div className="mt-8 pt-6 border-t border-[#444444]/10 flex flex-col gap-4">
                <div className="flex justify-between items-center text-[10px] font-label text-[#757c7d] uppercase">
                  <span>Mode</span>
                  <span className="text-[#8A2BE2]">{mode}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] font-body text-[#A1A1A1]/40 text-center px-4 leading-normal">
                경고: 원본 기록을 삭제하면 복구가 불가능하며, 개선된 기억만이 당신의 유일한 과거로 남게 됩니다.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="w-full py-4 bg-[#8A2BE2] text-white font-headline font-bold text-sm tracking-widest rounded-md hover:bg-[#7022b8] transition-all duration-300 shadow-lg shadow-[#8A2BE2]/10 flex items-center justify-center gap-2 uppercase"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>delete_forever</span>
                원본 기억 삭제
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full py-3 bg-transparent text-[#A1A1A1] font-headline font-semibold text-xs tracking-wider border border-[#444444]/30 rounded-md hover:bg-[#2A2A2A] transition-all duration-300 uppercase"
              >
                기억 보존 및 종료
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8 flex justify-between items-center bg-[#151515] mt-20 border-t border-[#262626]">
        <div className="text-[10px] font-label text-[#757c7d] uppercase tracking-widest">
          © 2024 MEMORY ALCHEMY | Clinical Curation Unit
        </div>
        <div className="flex gap-6 text-[10px] font-label text-[#757c7d] uppercase tracking-widest">
          <a href="#" className="hover:text-[#8A2BE2] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#8A2BE2] transition-colors">Protocol</a>
          <a href="#" className="hover:text-[#8A2BE2] transition-colors">Support</a>
        </div>
      </footer>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#1E1E1E] overflow-hidden flex flex-col relative border border-white/10 border-t-4 border-[#8A2BE2]/80"
            style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            <div className="p-10 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8A2BE2]/10 text-[#8A2BE2] rounded-md">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-headline font-extrabold tracking-tight text-white">정말 삭제하시겠습니까?</h2>
                  <p className="text-sm leading-relaxed text-white/60 max-w-sm">
                    이 조치는 되돌릴 수 없습니다. 원본 기억 데이터는 아카이브에서 영구적으로 소멸되며, 모든 신경 보정 기록이 즉시 삭제됩니다.
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6875rem] font-label uppercase tracking-widest text-white/40">Operation Type</span>
                  <span className="text-[0.6875rem] font-label font-bold text-[#8A2BE2] uppercase">Permanent Erasure</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[0.6875rem] font-label uppercase tracking-widest text-white/40">Neural Impact</span>
                  <span className="text-[0.6875rem] font-label font-bold text-white/80 uppercase">High Risk</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-4 text-sm font-bold text-white/60 bg-white/5 hover:bg-white/10 transition-colors rounded-md border border-white/5"
                >
                  취소
                </button>
                <button
                  onClick={() => { setShowModal(false); navigate('/erasing') }}
                  className="flex-[2] py-4 text-sm font-bold text-white bg-[#8A2BE2] hover:bg-[#7022b8] transition-all rounded-md"
                >
                  삭제 확정
                </button>
              </div>
            </div>
            <div className="bg-[#181818] px-10 py-4 flex justify-between items-center border-t border-white/5">
              <div className="flex items-center gap-2 text-white/30">
                <span className="material-symbols-outlined text-[1rem]">lock_clock</span>
                <span className="text-[0.65rem] font-label uppercase">Authorization Required: Curator-7</span>
              </div>
              <span className="text-[0.65rem] font-label text-white/30 uppercase">ECHO-SYSTEM V.4.0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
