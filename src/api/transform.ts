// ================================================================
// ✏️ 각 모드별 시스템 프롬프트 (구조화된 출력)
// ================================================================
const PROMPTS: Record<string, string> = {
  'The Lesson': `
사용자가 입력한 부정적인 경험을 "자기계발서" 스타일로 재해석하라.

출력 형식 (반드시 Markdown 구조로 작성):
- 첫 줄: **짧은 제목 (굵게)**
- 이후: 3~5문장의 본문
- 문단 간 줄바꿈 포함
- 핵심 키워드 1~2개는 **굵게 강조**

조건:
- 반드시 긍정적인 의미와 교훈을 강조할 것
- 실패를 성장의 계기로 바꿔 표현할 것
- 약간 오글거리지만 진지한 톤 유지
- "~이다", "~다" 형태 사용
- 전체 출력은 반드시 3~5문장

목표:
사용자가 자신의 경험을 의미 있는 성장 과정처럼 느끼도록 만든다.
`,

  'The News': `
사용자가 입력한 사건을 "뉴스 기사" 형식으로 재구성하라.

출력 형식 (Markdown 필수):
- 첫 줄: **[헤드라인]** 형식의 제목
- 둘째 줄: 날짜 또는 상황 요약 (선택)
- 이후: 3~5문장 기사 본문
- 줄바꿈 명확히 적용

조건:
- 객관적인 뉴스 톤 (기자 시점)
- 실제보다 더 긍정적이고 의미 있는 사건처럼 표현
- 전문가 코멘트 1문장 포함 가능
- 과하게 진지한 톤 유지
- 전체 출력은 반드시 3~5문장

목표:
사소한 실패를 사회적으로 의미 있는 사건처럼 보이게 만든다.
`,

  'The Conspiracy': `
사용자의 경험을 "음모론"처럼 재해석하라.

출력 형식 (Markdown 필수):
- 첫 줄: **강렬한 주장 문장 (굵게)**
- 이후: 3~5문장 설명
- 중요한 단어는 **굵게 강조**
- 줄바꿈 포함

조건:
- 이 사건이 우연이 아니라 계획된 것처럼 설명
- "사실", "이미 예정된", "숨겨진 의도" 표현 사용
- 약간 비현실적이지만 그럴듯하게 작성
- 살짝 웃긴 톤 유지
- 전체 출력은 반드시 3~5문장

목표:
사용자가 자신의 실패를 더 큰 흐름 속 일부처럼 느끼게 만든다.
`,

  'The Verdict': `
사용자의 경험을 "법정 판결문" 형식으로 재구성하라.

출력 형식 (Markdown 필수):
- 첫 줄: **사건명 (굵게)**
- 이후:
  - "사건 개요:" 문장
  - "판단:" 문장
  - "판결:" 문장
- 각 항목은 줄바꿈으로 구분
- 핵심 단어는 **굵게 강조**

조건:
- 사용자에게 유리한 방향으로 판단 (무죄 또는 감형)
- 객관적이고 딱딱한 법률 문체
- 과하게 진지한 톤 유지
- 전체 출력은 반드시 3~5문장

목표:
사용자의 행동을 정당화하고 책임을 완화하는 방향으로 표현한다.
`,
}
// ================================================================
const BASE_URL = import.meta.env.VITE_API_BASE_URL as string
const API_KEY = import.meta.env.VITE_API_KEY as string

export async function transformMemory(mode: string, memory: string): Promise<string> {
  const systemPrompt = PROMPTS[mode]

  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: memory },
      ],
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`API 오류: ${response.status} — ${body}`)
  }

  const data = await response.json()
  return data.choices[0].message.content as string
}