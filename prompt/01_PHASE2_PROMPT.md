# 🧄 Project Garlic Phase 2 — 리브랜딩 앱 목업 (피드백 반영)

> **프로젝트**: G마켓 → Garlic 리브랜딩
> **Phase 2 목표**: 피드백 기반 페이지 재구성 + 신규 페이지 개발
> **디자인 기준**: 실제 지마켓 CSS 스타일 최대한 반영 + Garlic 리브랜딩 적용
> **폰트**: GmarketSans (Bold/Medium/Light) — 지마켓 공식 폰트

---

## 📋 디자인 시스템 (지마켓 기반)

### 폰트
```css
@font-face { font-family: 'GmarketSans'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff'); font-weight: 700; }
@font-face { font-family: 'GmarketSans'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff'); font-weight: 500; }
@font-face { font-family: 'GmarketSans'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); font-weight: 300; }
```

### 컬러 팔레트
| 토큰 | 값 | 용도 |
|------|-----|------|
| --garlic-green | #00C73C | 메인 브랜드 (지마켓 그린 계승) |
| --garlic-dark-green | #1B4332 | 프리미엄/헤리티지 |
| --garlic-gold | #D4A843 | 액센트/프리미엄 |
| --garlic-cream | #F5F0E8 | 배경 |
| --garlic-coral | #FF7F6B | CTA/할인 강조 |
| --garlic-neon | #00FF88 | AI/테크 강조 |
| --garlic-black | #222222 | 텍스트 |
| --garlic-bg | #F7F7F7 | 기본 배경 |

### 이미지 자산 (reference/ 폴더 — ../reference/파일명 으로 참조)
| 파일 | 용도 |
|------|------|
| 로고_심플.jpg | Garlic G 로고 (메인 CI) |
| 피닉스_프로젝트_이후_앱로고.png | 네온 G 앱 아이콘 |
| 갈릭_귀여운_이미지.png | Garlic 귀여운 텍스트 캐릭터 |
| 갈릭브랜드_옷_로고.png | Garment G 의류 로고 4종 |
| 퇴마콘1~3.png | 퇴마콘서트 장면 (N서울타워) |
| 인스타_퇴마콘_광고.png | 인스타 퇴마콘 홍보 |
| 광고범벅_쇼핑앱_화면.png | Before: 광고 범벅 문제점 |
| 지마켓_리브랜딩_홈개편_목업.png | 리브랜딩 홈 목업 |
| 카톡_GARLIC딜_이벤트알림.png | 카카오톡 알림 |
| 지마켓_대장례식_인포그래픽.png | 대장례식 인포그래픽 |

---

## 🏗 페이지 구조

### 메인 앱 페이지 (4종)

#### ① 홈 — `01_home.html`
- 마누리의 추천 한마디 (캐릭터 말풍선)
- 넛징 태그: `갈릭 DNA 92%`, `AI 추천`, `마누리 추천 ❤️`
- 마늘 100원 딜 + 카운트다운
- 하단 네비: 홈/카테고리/마늘밭/마늘키우기/마이갈릭

#### ② 회사소개 — `02_about.html`
- "마늘 먹고 사람 될게요" 히어로 + 퇴마콘 이미지 배경
- Before(광고범벅) → After(Garlic 클린) 비교
- "A New Chapter" + G.A.R.L.I.C 풀네임
- "진짜 나마늘 위한 쇼핑의 시작 — 지금 만나기 →"

#### ③ 마늘까기 도전 — `03_challenge.html`
- 출석체크 달력 (1알/일, 10알=쿠폰, 100일=변신)
- 마늘까기 미니게임 UI
- 갈릭고 퀴즈 (초성퀴즈)
- 마늘 모은 현황 + 랭킹

#### ④ MY 페이지 — `04_mypage.html`
- 다크모드 마늘 DNA 레이더 차트
- 나의 마늘/쿠폰/포인트 현황
- 마늘 키우기 성장 단계
- AI 추천 + 주문/배송

### 이벤트/특별 페이지 (5종)

#### ⑤ 퇴마콘 이벤트 — `event_toemacon.html`
- 퇴마콘서트 이미지 풀스크린 히어로
- 초대장 티켓 UI + 마늘봉 굿즈
- G→Garlic 로고 모핑 + 타임라인
- 사전등록 폼

#### ⑥ 마늘 키우기 — `garlic_tamagotchi.html`
- 마늘 캐릭터 3단계 진화 (꼬마→프렌즈→요정)
- 관리: 물주기/밥주기/놀아주기/미니게임
- Day N/100 프로그레스 + 보상 미리보기
- 커플 마늘 키우기

#### ⑦ 의성 마늘 축제 — `event_uiseong_festival.html`
- 축제 프로그램 타임라인 + 마늘 수확 체험
- 갈릭파크 2028 티저 + 산지직송 특판

#### ⑧ 글로벌 갈릭크로 — `garlic_global.html`
- "Rooted in Korea, Growing Global"
- 글로벌 맵 + K-Culture 마늘 인포그래픽
- 알리바바 JV + 해외 셀러

#### ⑨ 마늘 IP 종합 — `garlic_ip.html`
- 출석 시스템 + 키우기 소개
- 캐릭터 3단계 진화 체계
- Before→After 앱 개편 + 굿즈 갤러리
- SNS 밈 문화

---

## 작업 순서

1. ① 홈 → 2. ④ MY → 3. ③ 마늘까기 → 4. ② 회사소개
5. ⑤ 퇴마콘 → 6. ⑥ 마늘키우기 → 7. ⑨ IP → 8. ⑦ 의성 → 9. ⑧ 글로벌
10. index.html 업데이트 → GitHub push

## 실행
```
autopilot: prompt/01_PHASE2_PROMPT.md를 읽고 9개 페이지 모두 제작. reference/ 이미지 활용, GmarketSans 폰트, 지마켓 CSS 스타일 적용. prompt/ 폴더 저장 후 GitHub push.
```
