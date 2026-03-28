import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function DeletionFailed() {
    const navigate = useNavigate();
    const [giveUp, setGiveUp] = useState(false);

    const handleRetry = () => {
        const count = Number(sessionStorage.getItem("retryCount") || 0) + 1;
        sessionStorage.setItem("retryCount", String(count));
        if (count >= 3) {
            setGiveUp(true);
        } else {
            navigate("/erasing");
        }
    };

    return (
        <div
            className="text-[#f9f9f9] antialiased min-h-screen"
            style={{
                background: "#0c0c0c",
                fontFamily: "'Pretendard', 'Inter', sans-serif",
            }}
        >
            {/* TopNavBar */}
            <header className="bg-[#0c0c0c] flex justify-between items-center w-full px-8 py-6 fixed top-0 z-50">
                <div className="flex items-center gap-8">
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tighter text-white uppercase font-headline hover:opacity-70 transition-opacity"
                    >
                        MEMORY ALCHEMY
                    </Link>
                </div>
            </header>
            <div className="bg-[#1a1a1a] h-[1px] w-full fixed top-[76px] z-50" />

            {/* Main */}
            <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
                <div
                    className="fixed top-1/4 right-0 w-1/3 h-1/2 -z-10 opacity-30 pointer-events-none"
                    style={{ background: "#1a1a1a" }}
                />

                {/* Give Up Card */}
                {giveUp && (
                    <div
                        className="max-w-2xl w-full bg-[#141414] rounded-lg overflow-hidden border border-white/5 relative"
                        style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}
                    >
                        <div className="h-1 w-full bg-[#8A2BE2]" />
                        <div className="p-10 md:p-16 flex flex-col items-center text-center">
                            <div className="mb-8 p-6 rounded-full bg-[#8A2BE2]/10 text-[#8A2BE2] ring-1 ring-[#8A2BE2]/30">
                                <span
                                    className="material-symbols-outlined text-7xl"
                                    style={{
                                        fontVariationSettings: "'wght' 200",
                                    }}
                                >
                                    sentiment_dissatisfied
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter text-white mb-6">
                                어쩔 수 없습니다.
                            </h1>
                            <p className="text-gray-400 font-body text-lg leading-relaxed max-w-md mb-12">
                                그냥 안고 살아가세요...
                            </p>
                            <button
                                onClick={() => {
                                    sessionStorage.removeItem("retryCount");
                                    navigate("/");
                                }}
                                className="px-10 py-4 bg-[#8A2BE2] text-white font-bold text-sm tracking-tight rounded-md transition-all hover:bg-opacity-90 active:scale-[0.98]"
                                style={{
                                    boxShadow: "0 0 20px rgba(138,43,226,0.3)",
                                }}
                            >
                                홈으로 돌아가기
                            </button>
                        </div>
                    </div>
                )}

                {/* Failure Card */}
                {!giveUp && (
                    <div
                        className="max-w-2xl w-full bg-[#141414] rounded-lg overflow-hidden border border-white/5 relative"
                        style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}
                    >
                        <div className="h-1 w-full bg-[#8A2BE2]" />
                        <div className="p-10 md:p-16 flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="mb-8 p-6 rounded-full bg-[#8A2BE2]/10 text-[#8A2BE2] ring-1 ring-[#8A2BE2]/30">
                                <span
                                    className="material-symbols-outlined text-7xl"
                                    style={{
                                        fontVariationSettings: "'wght' 200",
                                    }}
                                >
                                    warning
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter text-white mb-6">
                                삭제 실패!
                            </h1>

                            <p className="text-gray-400 font-body text-lg leading-relaxed max-w-md mb-12">
                                아직 트라우마가 남아있습니다.
                                <br />
                                <span className="opacity-60 text-base">
                                    잠재의식의 뿌리가 예상보다 깊게 자리하고
                                    있습니다. 일단 숨 고르고 다시 시도해주세요.
                                </span>
                            </p>

                            {/* Actions */}
                            <div className="flex flex-col items-center gap-6 w-full">
                                <button
                                    onClick={handleRetry}
                                    className="w-full md:w-auto px-10 py-4 bg-[#8A2BE2] text-white font-bold text-sm tracking-tight rounded-md transition-all hover:bg-opacity-90 active:scale-[0.98]"
                                    style={{
                                        boxShadow:
                                            "0 0 20px rgba(138,43,226,0.3)",
                                    }}
                                >
                                    다시 시도
                                </button>
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-6 opacity-20 pointer-events-none select-none">
                            <span className="text-[0.5rem] font-label tracking-widest text-white">
                                ERROR_CODE: SUB_TRM_0092_NF
                            </span>
                        </div>
                    </div>
                )}

                {/* Quote */}
                <div className="mt-20 max-w-xl text-left self-start md:ml-24 opacity-20">
                    <p className="font-headline text-3xl font-extralight italic tracking-tight leading-snug text-white">
                        "Some echoes are meant to linger, <br />
                        defying even the most precise blades."
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-8 left-8 flex gap-8 items-center text-[0.625rem] font-label text-gray-600 uppercase tracking-widest pointer-events-none">
                <span>© 2024 MEMORY ALCHEMY</span>
                <span>Clinical Grade Memory Management</span>
                <span className="text-[#8A2BE2]/60">
                    Status: Procedure Interrupted
                </span>
            </footer>
        </div>
    );
}
