import type { Project } from "../types/Project";

import Bandnol1 from "../assets/projects/Bandnol1.png";
import Delipus1 from "../assets/projects/Delipus1.jpg";
import TicketingWarrior1 from "../assets/projects/TicketingWarrior1.png";
import TicketingWarrior2 from "../assets/projects/TicketingWarrior2.png";
import HomeinspectorApp1 from "../assets/projects/HomeinspectorApp1.png";
import HomeinspectorWeb1 from "../assets/projects/HomeinspectorWeb1.png";
import HomeinspectorWeb2 from "../assets/projects/HomeinspectorWeb2.png";

export const PROJECT: Project[] = [
  {
    id: 6,
    title: "Newsugar",
    description:
      "오늘의 뉴스를 간편하게 요약하고, AI 기반 퀴즈로 제공하여 사용자 참여와 학습을 돕는 뉴스 요약 서비스입니다.",
    isPublic: true,
    images: ["TicketingWarrior1.png"],
    url: "https://github.com/Project-Newsugar",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "Docker",
      "Redis",
      "Gemini API",
    ],
    duration: "2025년 12월 3일 ~ 2025년 1월 13일",
    team: [
      { role: "PM", count: 1 },
      { role: "Frontend (React)", count: 2 },
      { role: "Backend (Spring Boot)", count: 2 },
      { role: "Infra", count: 4 },
      { role: "DevOps", count: 4 },
    ],
    totalMembers: 4,
    myRole: ["Frontend (React)", "Backend (Spring Boot)", "Infra", "DevOps"],
    keyFeatures: [
      "회원가입, 로그인, 로그아웃, 회원정보 수정 기능 구현",
      "6시간마다 외부 뉴스 수집 및 AI 요약 생성",
      "카테고리별 뉴스 요약 제공",
      "AI 기반 퀴즈 생성 및 즉시 채점, 정답 공개",
      "사용자 설정 알림 기능: 오전 뉴스 브리핑, 저녁 퀴즈 알림",
    ],
    reflections:
      "이번 프로젝트에서는 뉴스 수집, AI 요약, 퀴즈 로직과 같은 백엔드 기능과 함께 프론트엔드 화면 구현, 상태 관리, UI/UX 최적화 등 프론트 중심 작업도 수행했습니다. React를 기반으로 사용자 인터페이스를 설계하고, API 연동을 통해 실시간 뉴스와 퀴즈 데이터를 효율적으로 화면에 표시하도록 구현했습니다. 팀원과 협업하며 컴포넌트 구조 설계, 상태 관리 전략(Jotai) 적용, 반응형 UI 구현 등 실무적인 프론트엔드 경험을 쌓은 것이 큰 성과였습니다. 하지만 아직은 로컬 개발환경에서만 기능이 동작하므로, 앞으로 남은 3주 동안은 실제 배포 환경에서의 프론트 연동과 인프라 구성도 경험할 계획입니다. Docker 기반 빌드와 배포, CI/CD 파이프라인 연동, AWS 환경에서의 프론트 호스팅까지 참여하며 실무적인 프론트 운영 경험을 쌓고, 사용자 관점에서 안정적이고 직관적인 UI/UX를 제공하는 능력을 더욱 강화할 예정입니다.",
  },
  {
    id: 4,
    title: "Ticketing Warrior",
    description:
      "고가용성과 안정성을 갖춘 클라우드 기반 티켓팅 실전 연습 시뮬레이터입니다. 뿐만 아니라, AWS의 서버리스 및 매니지드 서비스를 적극 활용하여 대규모 트래픽에도 견딜 수 있는 인프라를 구축했습니다.",
    isPublic: true,
    images: [TicketingWarrior1, TicketingWarrior2],
    url: "https://github.com/orgs/Ticketing-Warrior/repositories",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    duration: "2025년 11월 25일 ~ 2025년 12월 3일",
    team: [
      { role: "PM", count: 1 },
      { role: "Frontend", count: 2 },
      { role: "Backend", count: 2 },
      { role: "Infra", count: 2 },
      { role: "DevOps", count: 1 },
    ],
    totalMembers: 5,
    myRole: ["Frontend (React)", "Backend (Node.js)"],
    keyFeatures: [
      "프론트엔드: API 전체 연동 및 Jotai 상태 관리",
      "백엔드: 제한된 시간 내 예매 연습 기능 구현 (0~15초)",
      "백엔드: 좌석 선택 및 예매 기능 구현, Redis 락으로 동시 예매 충돌 방지",
      "백엔드: 개인 순위 확인 기능 구현 (예매 성공 시간 기준 상위 % 계산)",
      "백엔드: 부하 테스트 서버 설계 및 실행, 시스템 안정성/확장성 검증",
    ],
    reflections:
      "이번 프로젝트는 실제 대규모 트래픽 환경을 고려한 백엔드 시스템을 구축한 첫 경험이었습니다. 처음에는 Redis 기반 락 처리, ECS Fargate 자동 확장, Aurora RDS 트랜잭션 관리 등 새로운 기술 스택이 많아 어렵게 느껴졌지만, 팀원들과 지속적으로 협업하며 문제를 해결했습니다. 특히 부하 테스트(FA)를 통한 트래픽 시뮬레이션 과정에서, 시스템의 안정성과 확장성을 점검하며 설계 단계에서부터 성능 최적화의 중요성을 깨달았습니다. 이 경험을 통해 문제 해결 능력과 협업 능력 모두 크게 성장할 수 있었습니다.",
  },
  {
    id: 5,
    title: "Bandnol",
    description:
      "인디밴드 노래를 하루 한 곡씩 주고받으며 함께 디깅하고 즐기는 팬 커뮤니티 플랫폼, 밴놀 (Bandnol)",
    isPublic: true,
    images: [Bandnol1],
    url: "https://github.com/Bandnol/Bandnol-Server",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "React Native",
      "Gemini API",
    ],
    duration: "2025년 6월 ~ 2025년 8월",
    team: [
      { role: "PM", count: 1 },
      { role: "Designer", count: 1 },
      { role: "Frontend", count: 4 },
      { role: "Backend", count: 3 },
    ],
    totalMembers: 9,
    myRole: ["Frontend(Flutter)", "Backend (Node.js)"],
    keyFeatures: [
      "하루 한 곡 추천 수신/발신 서비스",
      "관심 아티스트 설정 및 관련 업데이트 확인",
      "AI 코멘트 작성 보조 및 개인화",
      "관심 아티스트 전용 채널 확인 및 팬 활동 기록",
      "추천 기록 달력으로 곡 및 코멘트 관리",
    ],
    reflections:
      "이번 프로젝트는 제가 주도해야 하는 첫 프로젝트였습니다. 개발에 대한 지식이 많지 않아 처음에는 팀원들과 머리를 맞대고 하나하나 고민하며 개발해야 했습니다. 외부 API를 활용해 앱을 개발하는 것도 처음이었고, AI를 활용해 기능을 구현하는 것도 처음이어서, 처음 기능 명세서를 확정할 때 어떤 기능은 가능하고 어떤 기능은 어려운지 명확히 판단하기 어려웠습니다. 하지만 팀원들과 지속적으로 소통하며 매일 디스코드에 모여 함께 코딩한 덕분에 문제를 하나씩 해결해 나갈 수 있었고, 결국 프로젝트를 끝까지 완수할 수 있었습니다. 이번 경험을 통해 소통과 협업의 중요성을 깊이 느낄 수 있었고, 어려움 속에서도 포기하지 않고 끝까지 완수하는 과정에서 많은 성장을 할 수 있었습니다.",
  },
  {
    id: 1,
    title: "Homeinspector App",
    description:
      "사전점검을 보다 편리하게 진행할 수 있도록 지원하고, 점검 결과를 자동으로 리포트로 생성해 고객님께 발송하는 어플리케이션입니다.",
    isPublic: false,
    images: [HomeinspectorApp1],
    url: "",
    technologies: ["Flutter", "Node.js", "Firebase", "Nodemailer"],
    duration: "2024년 12월 ~",
    team: [{ role: "개인 프로젝트", count: 1 }],
    totalMembers: 1,
    myRole: ["Frontend(Flutter)", "Backend (Node.js)"],
    keyFeatures: [
      "프론트엔드와 백엔드 전반의 이슈를 파악하고 해결",
      "회사 요청에 따라 기능 개선 및 추가 구현 진행",
      "하자 내역 등록 및 관리: 문제 기록과 사진 업로드로 현장 관리 가능",
      "열화상 이미지 업로드 및 공기질 데이터 입력으로 시각적 점검 지원",
      "자동 리포트 생성 및 발송 (Node.js - Nodemailer 이용), 기준치 초과 시 불량, 아니면 양호 표시, 사용자 이력 관리 및 직관적 UI/UX 제공",
    ],
    reflections:
      "혼자 프론트엔드와 백엔드 역할을 모두 수행해야 했기 때문에, 전체적인 구조를 이해하고 각 기술 스택의 흐름을 빠르게 파악하는 데 어려움이 있었습니다. 특히 추가 기능 구현을 처음 할 때에는 화면 구현과 API 연동, 데이터베이스 설계 등 모든 과정을 혼자 감당해야 했기에 작업량과 복잡도가 상당히 높았습니다. 이러한 과정을 통해 전체 서비스의 흐름을 한눈에 조망하며 개발하는 능력을 기를 수 있었고, 프론트엔드와 백엔드 간의 연결 구조를 명확히 이해하고 조율하는 경험을 쌓을 수 있었습니다. 또한, 문제 해결 과정에서의 유연한 사고와 멀티태스킹 능력도 함께 향상되었습니다.",
  },
  {
    id: 2,
    title: "Homeinspector Web",
    description:
      "사전점검 예약 고객에게 예약, 난방 신청, 예약 확정, 안내 등 다양한 상황에 맞는 카카오톡 메시지를 정해진 템플릿으로 자동 발송하는 웹 서비스입니다. 이를 통해 고객과의 소통을 체계적이고 효율적으로 관리할 수 있습니다.",
    isPublic: false,
    images: [HomeinspectorWeb1, HomeinspectorWeb2],
    url: "",
    technologies: ["Flutter", "Node.js", "Firebase", "KakaoTalk API"],
    duration: "2024년 12월 ~ ",
    team: [{ role: "개인 프로젝트", count: 1 }],
    totalMembers: 1,
    myRole: ["Backend (Node.js)"],
    keyFeatures: [
      "단지 및 고객 등록: 정보를 손쉽게 등록하고 관리",
      "평수 기반 금액 자동 계산으로 메시지 요금 반영",
      "템플릿 기반 카카오톡 메시지 발송 (카카오톡 알림톡 API 사용)",
      "메시지 내용 자동 커스터마이징 및 발송 내역 관리/이력 조회",
      "프론트엔드와 백엔드 전반 이슈 해결, 요청에 따른 기능 개선 및 추가 구현, Firebase Hosting 배포",
    ],
    reflections:
      "혼자서 프론트엔드와 백엔드 역할을 모두 담당하다 보니, 전체적인 시스템 구조를 빠르게 파악하고 각 기술 스택의 흐름을 이해하는 데 어려움이 있었습니다. 특히, 추가 기능을 처음 구현할 때는 화면 구성부터 API 연동, 데이터베이스 설계까지 모든 작업을 혼자 처리해야 해서 업무량과 복잡도가 매우 높았습니다. 게다가 웹 서버 배포 경험이 처음이어서 해당 과정에서도 여러 어려움을 겪었습니다. 이 과정을 통해 전체 서비스의 전반적인 흐름을 한눈에 볼 수 있는 능력을 키웠고, 프론트엔드와 백엔드 간의 연동 구조를 명확히 이해하고 조율하는 소중한 경험을 쌓았습니다. 또한, 웹 서버 배포와 운영 환경 구성에 관한 실무 경험을 쌓으면서 문제 발생 시 유연하게 대처하고 여러 업무를 동시에 처리하는 역량도 크게 향상시켰습니다.",
  },
  {
    id: 3,
    title: "Delipus (딜리퍼스)",
    description:
      "학생들이 단체로 배달 음식을 주문하여, 배달비를 절약하고 할인 혜택을 누릴 수 있는 플랫폼을 제공합니다. 배달을 시키고 싶은 경우에도 최소 배달 주문 금액으로 인해 먹지 못하는 문제를 해결합니다.",
    isPublic: true,
    images: [Delipus1],
    url: "https://github.com/GC-Project-Space/Delivery-Server",
    technologies: ["React Native", "Spring Boot", "MySQL", "Firebase"],
    duration: "2025년 4월 ~ 2025년 6월",
    team: [
      { role: "Frontend (React Native)", count: 2 },
      { role: "Backend (Spring Boot)", count: 6 },
    ],
    totalMembers: 8,
    myRole: ["Backend (Spring Boot)"],
    keyFeatures: [
      "회원가입: 이메일, 비밀번호 입력 및 유효성 검증",
      "로그인: 이메일/비밀번호 인증 및 로그인 상태 관리",
      "로그아웃: 세션/토큰 만료 처리 후 안전하게 로그아웃",
      "회원정보 수정: 프로필, 연락처 등 정보 변경 및 서버 동기화",
    ],
    reflections:
      "제한된 시간 내 CI/CD 구축과 배포를 진행하며 처음 경험하는 과정이라 어려움이 있었지만, 팀원들과 지속적으로 소통하고 공식 문서를 참고하여 과정을 순조롭게 마무리할 수 있었습니다. 이를 통해 우선순위를 정해 신속하게 개발하고, 문제 발생 시 적극적으로 소통하며 자료를 공유하는 중요성을 배웠습니다. 프론트엔드 인력이 부족한 상황에서 백엔드 개발자로서 API 설계에 집중하고, 데이터를 효율적으로 처리하여 프론트엔드와 원활하게 연동될 수 있도록 노력했습니다. 또한, 프론트엔드와 백엔드 인력이 동등하지 않은 상황에서도 상대방의 배려와 협력을 통해 프로젝트 진행이 가능하다는 것을 깨달았습니다. 프로젝트 참여를 통해 팀원들과 빠르게 친해지고 주기적인 회의를 진행하며, 문서화의 중요성과 협업 시 주의할 점들을 배우는 경험을 얻었습니다. 결과적으로 문제 해결 능력과 협업 능력을 크게 향상시키며 프로젝트를 성공적으로 완수할 수 있었습니다.",
  },
];
