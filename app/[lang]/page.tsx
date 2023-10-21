import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Navbar } from "@/components/Navbar";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex flex-col h-[100svh]">
      <Navbar />
      <div>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </div>
    </main>
  );
}
