# 지구저구 (JIGU JEOGU) 브랜드 웹사이트

지구저구(JIGU JEOGU)는 의식 있고 지속 가능한 소비를 돕는 **지구를 위한 저속구매(Slow Consumption)** 브랜드입니다. 

이 웹사이트는 제공된 오리지널 브랜드 메인 이미지를 화면 전체에 모던하고 반응형으로 가득 채워, 브랜드 아이덴티티를 온전히 전달하도록 디자인되었습니다.

## 🌟 주요 특징

1. **Brand Image Landing**:
   - 4K 해상도의 브랜드 오리지널 이미지를 활용하여 디테일까지 선명하게 보여줍니다.
2. **Responsive Design**:
   - 데스크톱, 태블릿, 모바일 등 어떤 화면 크기에서도 비율 깨짐 없이 가로/세로 최적의 비율로 중앙 정렬되어 노출됩니다.
3. **Premium Loading Animation**:
   - 페이지 진입 시 이미지가 부드럽고 우아하게 페이드인(Fade-in) 되면서 미세하게 커지는 마이크로 인터랙션이 적용되었습니다.
4. **SEO & Accessibility**:
   - 검색 최적화(SEO) 및 웹 접근성(시각장애인 스크린 리더 지원)을 위해 보이지 않는 시맨틱 `<h1>` 태그와 이미지 대체 텍스트(alt)가 완벽히 구성되었습니다.
5. **Unicode Compatibility**:
   - 파일명을 영문 `brand-main-page.png`로 저장하여 GitHub Pages 등 웹 호스팅 서버 배포 시 한글 인코딩 깨짐 및 404 에러를 원천 방지하였습니다.

---

## 🛠️ 기술 스택
- **Markup**: HTML5 (시맨틱 마크업)
- **Styling**: Vanilla CSS3 (Flexbox, Responsive Viewport)
- **Logic**: Vanilla JavaScript (ES6, Image Load Trigger)

---

## 💻 로컬에서 실행하는 방법

별도의 서버 설치 없이 웹 브라우저에서 바로 확인할 수 있습니다.

1. `index.html` 파일을 웹 브라우저(Chrome, Safari 등)에서 엽니다.
2. 브라우저 크기를 늘리거나 줄이며 반응형 레이아웃이 정상 동작하는지 테스트합니다.

---

## 🚀 GitHub에 올려서 공유하기 (GitHub Pages 연동)

이 웹사이트를 GitHub에 올리고 무료로 호스팅(GitHub Pages)하여 친구들이나 다른 사람들에게 웹 링크로 공유할 수 있습니다.

### 1단계: GitHub에 새 리포지토리 만들기
1. [GitHub](https://github.com)에 로그인합니다.
2. 우측 상단의 **`+`** 버튼을 누르고 **`New repository`**를 선택합니다.
3. **Repository name**에 `jigu-jeogu-website` 등 원하는 이름을 입력합니다.
4. **Public**을 선택해야 다른 사람들에게 링크로 공유할 수 있습니다.
5. `Initialize this repository with...` 섹션(README, gitignore 등)은 **모두 체크 해제(기본값)**한 상태로 **`Create repository`**를 클릭합니다.

### 2단계: 로컬 저장소를 GitHub에 연결하고 올리기
저장소가 만들어지면 나타나는 주소를 복사하여 터미널(지구저구 브랜드 웹사이트 폴더 위치)에서 아래 명령어들을 실행합니다.

```bash
# 로컬 Git 커밋 생성 (최초 1회)
git add .
git commit -m "feat: 지구저구 브랜드 메인 이미지 랜딩 페이지 최초 릴리즈"

# 기본 브랜치명을 main으로 변경
git branch -M main

# GitHub 원격 저장소 주소 연결 (복사한 본인의 레포지토리 주소 입력)
git remote add origin https://github.com/본인의_사용자명/레포지토리_이름.git

# GitHub으로 업로드
git push -u origin main
```

### 3단계: 무료 웹사이트 호스팅(GitHub Pages) 켜기
업로드가 완료되면, 누구나 접속할 수 있도록 웹사이트 링크를 만듭니다.

1. GitHub의 본인 레포지토리 화면 상단 메뉴에서 **`Settings`** (설정) 탭을 클릭합니다.
2. 왼쪽 사이드바에서 **`Pages`** 메뉴를 클릭합니다.
3. **Build and deployment** 섹션의 **Branch** 설정을 `None`에서 **`main`** (또는 `/root`)으로 변경하고 **`Save`**를 클릭합니다.
4. 약 1~2분 정도 기다린 후 새로고침하면 상단에 **"Your site is live at `https://사용자명.github.io/레포지토리_이름/`"** 이라는 메시지와 함께 접속 가능한 주소가 생성됩니다.
5. 이 주소를 공유하여 다른 사람들이 접속해 볼 수 있게 하세요!
