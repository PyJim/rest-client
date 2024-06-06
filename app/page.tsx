import Image from "next/image";
import RequestBar from "@/components/RequestBar";
import TabNavigator from "@/components/TabNavigator";
import Response from "@/components/Response";
import ResponseTab from "@/components/ResponseTab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-24 px-4 sm:px-10 md:px-24 text-xs sm:text-sm md:text-base">
      <RequestBar/>
      <TabNavigator/>
      <Response />
      <ResponseTab/>
    </main>
  );
}
