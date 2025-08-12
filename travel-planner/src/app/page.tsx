import Link from "next/link";

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Travel Planner</h1>
      <p className="text-lg text-center">
        여행 일정을 계획하고 관리해 보세요.
      </p>
      <Link
        href="/plan"
        className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
      >
        여행 계획 시작하기
      </Link>
    </main>
  );
}
