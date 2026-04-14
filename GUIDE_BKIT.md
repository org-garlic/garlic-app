# 🧄 bkit 실행 가이드 — Project Garlic

## Step 1: 환경 확인
```bash
/bkit:version
ls pdca\ plan\ reference/
```

## Step 2: PDCA Plan
```bash
/bkit:pdca-plan
```
```
Project Garlic 리브랜딩 프론트엔드 목업 프로젝트를 시작한다.
- `pdca plan reference/` 폴더의 기획 문서를 모두 분석
- `prompt/00_MASTER_PROMPT.md`의 5가지 디자인 방향 확인
- 브랜드명: Garlic (G.A.R.L.I.C = Global·Authentic·Rooted·Lifestyle·Identity·Commerce)
- 핵심 컨셉: "마늘 먹고 사람 됐다" — 초개인화 쇼핑, 캐릭터 IP, 갈릭 DNA
- 산출물은 모두 prompt/ 폴더에 저장
```

## Step 3: PDCA Design
```bash
/bkit:pdca-design
```
```
00_MASTER_PROMPT.md의 5가지 Garlic 디자인 방향을 기반으로
각 디자인의 와이어프레임 구조를 설계해.
공통 요소: Garlic 로고, 마누리 캐릭터, 초개인화 피드, 갈릭데이 프로모션
설계 문서를 prompt/WIREFRAME_SPEC.md로 저장.
```

## Step 4: 구현
```
00_MASTER_PROMPT.md를 읽고 Design 1(갈릭 마이씬)부터 구현 시작.
완성 → prompt/01_garlic_myscene.html 저장 → Design 2로.
5개 전부 완성될 때까지 순차 진행.
```

## Step 5: PDCA Check
```bash
/bkit:pdca-iterate
```
```
prompt/ 폴더의 5개 HTML을 검수해.
피치덱 기준: 초개인화 표현, 캐릭터 IP 활용, AD-Lite 원칙, 2030 타겟 매력도.
개선 필요 부분 수정.
```

## Step 6: PDCA Report
```bash
/bkit:pdca-report
```
```
prompt/DESIGN_COMPARISON.md 작성.
KPI(MAU 1000만, 첫구매 전환율 20%, D7 리텐션 15%) 달성에 가장 적합한 디자인 분석 포함.
```
