import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Navbar } from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user)
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex flex-col h-[100svh]">
      <Navbar />
      {user ? (
        <div className="flex items-center gap-4">
          Hey, {user.email}!
          <LogoutButton />
        </div>
      ) : (
        <Link
          href="/login"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
      )}
      <div>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}{" "}
      </div>
    </main>
  );
}
