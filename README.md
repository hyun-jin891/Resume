# Resume

GitHub Pages용 정적 이력서 템플릿입니다. `[YOUR NAME]`, 연락처, 학력, 논문 자리만 본인 정보로 바꾸면 바로 배포할 수 있습니다.

## 파일 구조

```text
.
├── index.html          # 이력서 본문 (GitHub Pages 진입점)
├── 404.html            # 없는 경로 안내 페이지
├── .nojekyll           # Jekyll 처리 없이 정적 파일 그대로 배포
├── .gitignore
├── css/
│   └── style.css       # 레이아웃, 다크모드, 인쇄 스타일
├── js/
│   └── main.js         # 테마 전환, 인쇄, 연도 표시
└── assets/
    ├── favicon.svg     # 파비콘
    ├── profile.jpg     # (선택) 프로필 사진
    └── resume.pdf      # (선택) PDF 이력서
```

## 채우는 방법

1. `index.html`에서 `[YOUR NAME]`, 이메일, GitHub, Scholar, ORCID, 학력/경력/논문을 수정합니다.
2. 프로필 사진을 쓰려면 `assets/profile.jpg`를 넣고, `index.html`의 `<img>` 주석을 해제합니다. 이니셜 `YN`도 함께 바꾸세요.
3. PDF가 있으면 `assets/resume.pdf`로 저장하고 Links 항목이 가리키게 둡니다.

## GitHub Pages 배포

1. 이 저장소를 GitHub에 푸시합니다.
2. 저장소 **Settings → Pages**로 이동합니다.
3. **Source**를 `Deploy from a branch`로 두고, branch는 `main`, folder는 `/ (root)`로 저장합니다.
4. 몇 분 뒤 아래 주소에서 확인할 수 있습니다.

```text
https://<username>.github.io/<repository>/
```

로컬에서는 `index.html`을 브라우저로 열거나, 프로젝트 폴더에서 간단 서버를 띄워 확인하면 됩니다.

```bash
python -m http.server 5500
```

인쇄 버튼으로 PDF 저장도 가능합니다.
