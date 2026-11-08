# 사람 자판기 (vfm-mind)

**배댓 · 맨탈** — 자판기를 세 사이트로 나눈 것 중 하나예요 (2026-11-08). 서버 없이 GitHub 하나로 돌아가요 (카드 결제 0원, 유지 토큰 0).
- 주소: https://jeffreryinko.github.io/vfm-mind/
- 다른 자판기: [시사 자판기](https://jeffreryinko.github.io/vendingForMe/) (시사·도구·AI) · [이야기 자판기](https://jeffreryinko.github.io/vfm-story/) (이야기·역사·뇌)
- 같은 주소(jeffreryinko.github.io)라서 폰에 저장된 별표·메모·보관함은 세 사이트가 함께 써요.

| 부품 | 무엇 |
|---|---|
| `baedat/` | 한국 유튜브 월간 인기 영상 50개 × 배댓 10개. 자료 `data/baedat/<YYYY-MM>.json` |
| `mental/` | 「멘탈리스트」 기술을 회차·장면별 카드로. 자료 `data/mental/` |
| 배댓 로봇 `robot/baedat_run.py` | 매월 1일 05:23 지난달 판을 만들어요 (`baedat.yml`). 유형·감정은 낱말 규칙(로봇) — 예전 클로드 예약 작업 대신 |

비밀 설정: 저장소 Settings → Secrets and variables → Actions → `YOUTUBE_API_KEY`
