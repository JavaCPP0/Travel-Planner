import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-white p-8 text-center">
        <h1 className="mb-4 text-5xl font-bold">여행 계획을 더 쉽게</h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-700">
          Travel Planner는 여행 일정을 효율적으로 계획하고 공유할 수 있도록 돕는 서비스입니다.
        </p>
        <Link
          href="/plan"
          className="rounded-md bg-blue-500 px-8 py-3 text-white hover:bg-blue-600"
        >
          여행 계획 시작하기
        </Link>
      </section>

      <section className="bg-white px-8 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">주요 기능</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center gap-2">
            <Image src="/globe.svg" alt="" width={64} height={64} />
            <h3 className="text-xl font-semibold">여행지 탐색</h3>
            <p className="text-gray-600">추천 여행지를 살펴보고 영감을 얻으세요.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Image src="/window.svg" alt="" width={64} height={64} />
            <h3 className="text-xl font-semibold">일정 관리</h3>
            <p className="text-gray-600">하루 단위로 세부 일정을 관리할 수 있습니다.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Image src="/file.svg" alt="" width={64} height={64} />
            <h3 className="text-xl font-semibold">공유 기능</h3>
            <p className="text-gray-600">동행자와 여행 정보를 공유해 보세요.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
