import type { Project } from "../types/Project";

export const PROJECT: Project[] = [
  {
    id: 1,
    title: "HomeInspector App",
    description:
      "사전점검을 보다 편리하게 진행하고, 점검 결과를 자동 리포트로 생성하여 발송하는 앱입니다. 하자 내역 관리, 열화상 이미지 등록, 공기질 데이터 입력, 자동 리포트 발송, 사용자 이력 관리 등 기능을 제공합니다.",
    isPublic: true,
    imageUrl:
      "https://images.unsplash.com/photo-30cf1960-267d-4016-8d21-57b14ec9dc33", // 앱 이미지
    technologies: [
      "React Native",
      "Node.js",
      "Firebase",
      "PostgreSQL",
      "Nodemailer",
    ],
    duration: "2025년 6월 ~ 2025년 8월",
    team: [
      { role: "PM", count: 1 },
      { role: "Design", count: 1 },
      { role: "Frontend (React Native)", count: 0 }, // 본인 참여 없음
      { role: "Backend (Node.js)", count: 1 },
    ],
    myRole: ["Backend (Node.js)"],
    keyFeatures: [
      "하자 내역 등록 및 관리",
      "열화상 이미지 업로드",
      "공기질 측정값 입력",
      "임시 저장 및 수동 업로드",
      "자동 리포트 생성 및 발송 (Node.js - Nodemailer)",
      "사용자 및 이력 관리",
      "직관적인 UI/UX 제공",
      "App Store 및 Google Play Store 배포",
    ],
    reflections:
      "프론트엔드와 백엔드를 모두 검토하며 서비스 전반의 이슈를 해결하고, 불안정한 네트워크 환경에서 누락된 데이터를 보완하며 DB 기록을 관리했습니다. 전체 구조를 이해하고 문제를 해결하는 경험을 얻었습니다.",
  },
  {
    id: 2,
    title: "Home Inspector Web",
    description:
      "사전점검 예약 고객에게 예약, 난방 신청, 안내 메시지를 카카오톡 템플릿으로 자동 발송하는 웹 서비스입니다. 단지 및 고객 관리, 금액 자동 계산, 메시지 커스터마이징, 발송 내역 관리 기능을 제공합니다.",
    isPublic: true,
    imageUrl:
      "https://images.unsplash.com/photo-488fcd8d-dbaf-4716-b65e-ba6f1fe03fe3", // 웹 이미지
    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "KakaoTalk API",
      "PostgreSQL",
    ],
    duration: "2025년 6월 ~ 2025년 8월",
    team: [
      { role: "PM", count: 1 },
      { role: "Design", count: 1 },
      { role: "Frontend", count: 0 },
      { role: "Backend (Node.js)", count: 1 },
    ],
    myRole: ["Backend (Node.js)"],
    keyFeatures: [
      "단지 및 고객 등록",
      "평수 기반 금액 자동 계산",
      "템플릿 기반 카카오톡 메시지 발송",
      "메시지 내용 자동 커스터마이징",
      "발송 내역 관리 및 이력 조회",
      "Firebase Hosting 배포",
    ],
    reflections:
      "프론트엔드와 백엔드 역할을 모두 검토하며 전체 시스템 흐름을 이해했습니다. 템플릿 변경, 기능 개선을 수행하며 안정적인 서비스 운영 경험을 얻었습니다.",
  },
  {
    id: 3,
    title: "Group Food Delivery App",
    description:
      "학생들이 단체로 배달 음식을 주문할 수 있는 플랫폼으로, 최소 배달 금액 문제 해결과 효율적 할인 혜택 제공 기능을 갖춘 앱입니다.",
    isPublic: true,
    imageUrl:
      "https://images.unsplash.com/photo-dbe5b1ce-1cfb-4df7-8428-ac379ca932c7", // 앱 이미지
    technologies: ["React Native", "Spring Boot", "PostgreSQL", "Firebase"],
    duration: "2025년 4월 4일 ~ 2025년 6월 5일",
    team: [
      { role: "Frontend (React Native)", count: 1 },
      { role: "Backend (Spring Boot)", count: 1 },
    ],
    myRole: ["Backend (Spring Boot)"],
    keyFeatures: [
      "CI/CD 구축 및 배포",
      "API 설계 및 백엔드 로직 구현",
      "프론트엔드 연동 최적화",
      "데이터 효율적 처리 및 전달",
    ],
    reflections:
      "제한된 시간과 인력 상황에서 백엔드 역할을 수행하며, 프론트엔드와의 원활한 연동을 위해 API 설계와 데이터 전달 최적화에 집중했습니다. 프로젝트 과정에서 소통과 우선순위 설정, 문제 해결 능력을 크게 향상시킬 수 있었습니다.",
  },
  {
    id: 4,
    title: "Ticketing Warrior",
    description:
      "고가용성과 안정성을 갖춘 클라우드 기반 티켓팅 실전 연습 시뮬레이터 앱입니다. 제한된 시간 내 예매, 좌석 선택, 순위 확인, 봇 테스트, 통합 모니터링 등 다양한 기능을 제공합니다.",
    isPublic: true,
    imageUrl:
      "https://images.unsplash.com/photo-52054c31-2fad-4a76-9c56-94d02f00eba2", // 첨부 이미지 URL
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Redis",
      "AWS (ECS, ALB, Aurora, ElastiCache, CloudFront/S3)",
      "Docker",
      "CI/CD",
    ],
    duration: "2025년 11월 25일 ~ 2025년 12월 3일 (9일)",
    team: [
      { role: "PM", count: 1 },
      { role: "Frontend (React, Vite)", count: 2 },
      { role: "Backend (Node.js, Express, MySQL, Redis)", count: 2 },
      { role: "Infra / DevOps (AWS, Docker, CI/CD)", count: 1 },
    ],
    myRole: [
      "Frontend (React, Vite)",
      "Backend (Node.js, Express, MySQL, Redis)",
    ],
    keyFeatures: [
      "제한된 시간 내 예매 연습 (매 분 0초~15초)",
      "좌석 선택 및 예매 기능 구현 (Redis 락 활용)",
      "개인 순위 확인 기능 구현",
      "봇 테스트를 통한 대규모 트래픽 시뮬레이션",
      "통합 모니터링 및 장애 대응 (CloudWatch)",
      "클라우드 기반 고가용성 인프라 구축 (ECS Fargate, ALB, Aurora RDS, ElastiCache, CloudFront/S3)",
      "Secrets Manager 활용 환경 변수 관리",
      "Auto Scaling을 통한 ECS Task 확장",
    ],
    reflections:
      "실제 대규모 트래픽 환경을 고려한 백엔드 시스템 구축이 처음이었으며, Redis 기반 락 처리, ECS 자동 확장, Aurora 트랜잭션 관리 등 새로운 기술 스택을 적용했습니다. 팀원들과 협업하며 문제를 해결하고, 부하 테스트를 통한 성능 최적화 경험을 얻어 문제 해결 능력과 협업 능력을 크게 성장시킬 수 있었습니다.",
  },
  {
    id: 5,
    title: "Music Recommendation App",
    description:
      "하루 한 곡 추천과 관심 아티스트 관리를 지원하며, AI 기반 코멘트 작성과 전용 채널, 추천 기록 달력 등 다양한 기능을 제공합니다.",
    isPublic: true,
    imageUrl:
      "https://images.unsplash.com/photo-1b9a894b-56e4-4962-87c5-efad305985ba", // 첨부 이미지 URL 대체
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "React Native",
      "Firebase",
      "AI API",
    ],
    duration: "2025년 6월 ~ 2025년 8월",
    team: [
      { role: "PM", count: 1 },
      { role: "Design", count: 1 },
      { role: "Frontend (React Native)", count: 4 },
      { role: "Backend (Node.js)", count: 3 },
    ],
    myRole: ["Backend (Node.js)"],
    keyFeatures: [
      "하루 한 곡 추천 수신 / 발신",
      "관심 아티스트 설정",
      "AI 코멘트 작성",
      "아티스트 채널",
      "추천 기록 달력",
    ],
    reflections:
      "첫 주도 프로젝트였으며, 외부 API와 AI 기능 구현 경험을 쌓고, 팀원들과 지속적인 소통을 통해 문제를 해결하며 성장함.",
  },
];
