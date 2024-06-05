import Image from "next/image";
import RequestBar from "@/components/RequestBar";
import TabNavigator from "@/components/TabNavigator";
import Response from "@/components/Response";
import ResponseTab from "@/components/ResponseTab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <RequestBar/>
      <TabNavigator/>
      <Response statusCode={200} time="150ms" size="1.5KB" />
      <ResponseTab/>
    </main>
  );
}
