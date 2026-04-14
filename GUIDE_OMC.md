# 🧄 OMC 실행 가이드 — Project Garlic (최종)

## 설치 (미설치 시)
```bash
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode
/oh-my-claudecode:omc-setup
```

## 전체 실행 (메인 5종 + 이벤트 3종 + 분석표)
```
autopilot: prompt/00_MASTER_PROMPT.md를 읽고, 거기에 정의된 5가지 Garlic 리브랜딩 메인 디자인 + 3단계 액션플랜 이벤트 페이지 3종을 모두 제작해. pdca plan reference/ 폴더의 기획 문서도 참고해. 모든 산출물은 prompt/ 폴더에 저장. 메인 5종 완성 후 가장 잘 나온 디자인의 톤으로 이벤트 3종 제작. 마지막에 DESIGN_COMPARISON.md 작성.
```

## 메인 디자인만 먼저 빠르게
```
autopilot: prompt/00_MASTER_PROMPT.md를 읽고, 메인 디자인 5종만 먼저 제작해. 이벤트 페이지는 나중에. 모든 산출물은 prompt/ 폴더에 저장.
```

## 이벤트 페이지만 별도 실행
```
autopilot: prompt/00_MASTER_PROMPT.md의 "3단계 액션플랜 이벤트 페이지" 섹션을 읽고, prompt/ 폴더의 메인 디자인 중 가장 잘 된 것의 톤앤매너를 기반으로 이벤트 3종(퇴마콘/100일/런칭)을 제작해. prompt/ 폴더에 저장.
```

## 수정
```
autopilot: prompt/event_01_toemacon.html의 G마켓→Garlic 변환 애니메이션을 더 임팩트있게 수정해.
```

## QA (전체)
```
ultraqa: prompt/ 폴더의 메인 5개 + 이벤트 3개 HTML을 전부 검수해. 반응형, 애니메이션, 브랜드 일관성, 이벤트 간 톤 통일 체크 후 수정.
```

## 산출물 목록

| # | 파일명 | 내용 |
|---|--------|------|
| 1 | 01_garlic_myscene.html | 초개인화 피드형 |
| 2 | 02_garlic_heritage.html | 에디토리얼 헤리티지 |
| 3 | 03_garlic_playground.html | 플레이풀 캐릭터 |
| 4 | 04_garlic_future.html | 테크 AI 중심 |
| 5 | 05_garlic_marketday.html | 따뜻한 시장 감성 |
| 6 | event_01_toemacon.html | 1단계: 퇴마 선포 |
| 7 | event_02_100days.html | 2단계: 100일 프로모션 |
| 8 | event_03_grand_launch.html | 3단계: 공식 런칭 |
| 9 | DESIGN_COMPARISON.md | 전체 비교 분석표 |
