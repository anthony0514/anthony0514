import React from "react";
import { Mail, Phone, Github } from "lucide-react";

export default function App() {
  return (
    <>
      <style>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            margin: 0;
            size: A4;
          }
          .print-container {
            padding: 0 !important;
            background: transparent !important;
          }
          .print-page {
            box-shadow: none !important;
            margin: 0 !important;
          }
        }
      `}</style>
      <div className="min-h-screen bg-gray-100 py-8 px-4 print-container">
        <div
          className="max-w-[210mm] mx-auto bg-white shadow-lg print-page"
          style={{ minHeight: "297mm" }}
        >
          <div className="flex min-h-[297mm]">
            {/* Left Sidebar */}
            <aside
              className="w-[30%] text-white p-6"
              style={{
                background:
                  "linear-gradient(to bottom, #0a1f1a, #050f0d)",
              }}
            >
              {/* Profile Section */}
              <div className="mb-8">
                <div
                  className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: "#0d2319" }}
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/765525564605071370/1464244255336829115/profile.JPG?ex=6974c33a&is=697371ba&hm=0b3427f96635f2841bd148c4072fad9a7055729a43001180cb4641b1d6e7e864&"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-center mb-1">
                  안재현
                </h1>
                <div
                  className="text-center text-sm mb-2"
                  style={{ color: "#9ca3af" }}
                >
                  ANTHONY
                </div>
                <div
                  className="text-center text-sm"
                  style={{ color: "#86efac" }}
                >
                  Software Developer
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3
                  className="text-xs font-semibold mb-3 uppercase tracking-wide"
                  style={{ color: "#ffffff" }}
                >
                  Contacts
                </h3>
                <div className="space-y-3 text-xs">
                  <div
                    className="flex items-center gap-2"
                    style={{ color: "#d1d5db" }}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>010-5308-2066</span>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    style={{ color: "#d1d5db" }}
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <a
                      href="mailto:anthony0514@naver.com"
                      className="hover:text-white break-all"
                    >
                      anthony0514@naver.com
                    </a>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    style={{ color: "#d1d5db" }}
                  >
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <a
                      href="https://github.com/anthony0514"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white break-all"
                    >
                      github.com/anthony0514
                    </a>
                  </div>
                </div>
              </div>

              {/* Language Usage Chart */}
              <div className="mb-8">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <svg
                    viewBox="0 0 100 100"
                    className="transform -rotate-90"
                  >
                    {/* Python - 68.27% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="20"
                      strokeDasharray="171.7 79.63"
                      strokeDashoffset="0"
                    />
                    {/* Swift - 25.75% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#fb923c"
                      strokeWidth="20"
                      strokeDasharray="64.7 186.63"
                      strokeDashoffset="-171.7"
                    />
                    {/* HTML - 2.91% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="20"
                      strokeDasharray="7.31 243.99"
                      strokeDashoffset="-236.4"
                    />
                    {/* CSS - 1.93% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="20"
                      strokeDasharray="4.85 246.48"
                      strokeDashoffset="-243.71"
                    />
                    {/* C++ - 1.15% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f472b6"
                      strokeWidth="20"
                      strokeDasharray="2.89 248.44"
                      strokeDashoffset="-248.56"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-xs">
                      <div className="font-semibold">
                        Language
                      </div>
                      <div className="font-semibold">Usage</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: "#60a5fa" }}
                      ></div>
                      <span>Python</span>
                    </div>
                    <span style={{ color: "#86efac" }}>
                      68.27%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: "#fb923c" }}
                      ></div>
                      <span>Swift</span>
                    </div>
                    <span style={{ color: "#86efac" }}>
                      25.75%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: "#34d399" }}
                      ></div>
                      <span>HTML</span>
                    </div>
                    <span style={{ color: "#86efac" }}>
                      2.91%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: "#a78bfa" }}
                      ></div>
                      <span>CSS</span>
                    </div>
                    <span style={{ color: "#86efac" }}>
                      1.93%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: "#f472b6" }}
                      ></div>
                      <span>C++</span>
                    </div>
                    <span style={{ color: "#86efac" }}>
                      1.15%
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "#0d2319",
                      color: "#86efac",
                    }}
                  >
                    Python
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "#0d2319",
                      color: "#86efac",
                    }}
                  >
                    Swift
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "#0d2319",
                      color: "#86efac",
                    }}
                  >
                    Flask
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "#0d2319",
                      color: "#86efac",
                    }}
                  >
                    Jenkins
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "#0d2319",
                      color: "#86efac",
                    }}
                  >
                    HTML/CSS
                  </span>
                </div>
              </div>

              {/* Scores */}
              <div>
                <h3
                  className="text-xs font-semibold mb-3 uppercase tracking-wide"
                  style={{ color: "#ffffff" }}
                >
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "#0d2319",
                        color: "#86efac",
                      }}
                    >
                      TOEIC
                    </span>
                    <span className="font-semibold text-sm">
                      850
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "#0d2319",
                        color: "#86efac",
                      }}
                    >
                      TOPCIT
                    </span>
                    <span className="font-semibold text-sm">
                      371
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="w-[70%] p-8">
              {/* Education */}
              <section className="mb-8">
                <h2
                  className="text-2xl font-bold text-slate-800 mb-4 pb-2"
                  style={{ borderBottom: "2px solid #1a3a2e" }}
                >
                  학력
                </h2>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-slate-600 text-sm">
                          중앙대학교
                        </h3>
                        <span className="text-slate-600 text-sm">
                          소프트웨어학부
                        </span>
                        <span className="text-slate-500 text-xs">
                          4학년
                        </span>
                      </div>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#374151",
                      }}
                    >
                      2020 ~
                    </span>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <section className="mb-8">
                <h2
                  className="text-2xl font-bold text-slate-800 mb-4 pb-2"
                  style={{ borderBottom: "2px solid #1a3a2e" }}
                >
                  소개
                </h2>
                <p className="text-slate-700 text-xs leading-relaxed">
                  아이디어를 실제 서비스로 구현하는 과정에서
                  가장 큰 재미를 느끼는 신입 개발자입니다.
                  프론트엔드부터 백엔드, 서버 환경까지 직접
                  다뤄보며 사용자 경험을 중심으로 기능을 설계해
                  왔습니다. 모르는 것은 빠르게 배우고,
                  아이디어를 검증하는 과정을 즐깁니다. 높은
                  적응력과 실행력을 무기로, 팀과 함께 성장하는
                  개발자가 되고 싶습니다.
                </p>
              </section>

              {/* Projects */}
              <section>
                <h2
                  className="text-2xl font-bold text-slate-800 mb-4 pb-2"
                  style={{ borderBottom: "2px solid #1a3a2e" }}
                >
                  프로젝트 경력
                </h2>

                {/* Mixby */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-800">
                        <a
                          href="https://github.com/CAP-team05/Swift-Renewal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: "#1a3a2e" }}
                        >
                          Mixby
                        </a>
                        <span className="text-slate-600 font-normal text-sm">
                          {" "}
                          - AI 기반 퍼스널라이징 칵테일 추천
                          서비스
                        </span>
                      </h3>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#374151",
                      }}
                    >
                      2024.09 - 2025.01
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs mb-2">
                    iOS 클라이언트 및 Flask 백엔드 풀스택 개발,
                    RAG 기반 칵테일 추천 시스템 구현
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-xs mb-2 space-y-1">
                    <li>
                      SwiftUI를 활용한 iOS 네이티브 UI/UX 설계
                      및 구현
                    </li>
                    <li>
                      Flask 기반 RESTful API 서버 개발 및
                      데이터베이스 스키마 설계
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      Flask
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      SwiftUI
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      RAG
                    </span>
                  </div>
                </div>

                {/* GRAFT */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-800">
                        <a
                          href="https://github.com/cv-graft"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: "#1a3a2e" }}
                        >
                          GRAFT
                        </a>
                        <span className="text-slate-600 font-normal text-sm">
                          {" "}
                          - Few-Shot Instance Segmentation
                          프레임워크
                        </span>
                      </h3>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs whitespace-nowrap ml-4"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#374151",
                      }}
                    >
                      2024.09 - 2024.12
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs mb-2">
                    YOLOv8 파인튜닝 및 SAM2 기반 합성 데이터
                    생성 파이프라인 설계, Precision 32-34% 개선
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-xs mb-2 space-y-1">
                    <li>
                      YOLOv8 모델 커스텀 데이터셋 파인튜닝 및
                      하이퍼파라미터 최적화
                    </li>
                    <li>
                      SAM2(Segment Anything Model 2)를 활용한
                      합성 데이터 자동 생성 시스템 구축
                    </li>
                    <li>
                      Few-Shot Learning 환경에서의 모델 성능
                      개선 실험 설계 및 분석
                    </li>
                    <li>
                      데이터 증강 기법 적용을 통한 모델 정확도
                      향상
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      YOLOv8
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      SAM2
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      PyTorch
                    </span>
                  </div>
                </div>

                {/* askai */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-800">
                        <a
                          href="https://github.com/Team-SNSN/askai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: "#1a3a2e" }}
                        >
                          askai
                        </a>
                        <span className="text-slate-600 font-normal text-sm">
                          {" "}
                          - AI CLI Wrapper
                        </span>
                      </h3>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs whitespace-nowrap ml-4"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#374151",
                      }}
                    >
                      창업동아리 Team-SNSN
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs mb-2">
                    AI 기반 CLI Wrapper 개발, 멀티 Provider 통합
                    및 RAG 명령어 학습 시스템 구축
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-xs mb-2 space-y-1">
                    <li>
                      OpenAI, Claude, Gemini 등 멀티 AI Provider
                      통합 아키텍처 설계
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      Rust
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      RAG
                    </span>
                  </div>
                </div>

                {/* Avazon */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-800">
                        <a
                          href="https://github.com/team-double-zero/AVA-FE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: "#1a3a2e" }}
                        >
                          Avazon
                        </a>
                        <span className="text-slate-600 font-normal text-sm">
                          {" "}
                          - AI 콘텐츠 생성 및 관리 플랫폼
                        </span>
                      </h3>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs whitespace-nowrap ml-4"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#374151",
                      }}
                    >
                      창업동아리 Team DoubleZero
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs mb-2">
                    React 프론트엔드 개발 및 성능 최적화, Python
                    기반 GPU 인프라 관리 자동화
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-xs mb-2 space-y-1">
                    <li>
                      ComfyUI 워크플로우 통합 및 이미지 생성
                      파이프라인 구축
                    </li>
                    <li>
                      Python 스크립트를 활용한 GPU 서버 모니터링
                      및 리소스 관리 자동화
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      React
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      Python
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#d1f4e0",
                        color: "#1a3a2e",
                      }}
                    >
                      ComfyUI
                    </span>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}