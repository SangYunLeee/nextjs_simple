import Image from "next/image";
import Header from "@/components/header";

interface BlogPageProps {
  params: Promise<{ slug?: string }>;
}

export default async function BlogPage({params}: BlogPageProps) {
  const { slug } = await params;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
        <h1>{slug}</h1>
    </div>
  );
}
