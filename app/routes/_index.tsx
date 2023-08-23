import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pettengill Violin Studio" },
    {
      name: "description",
      content:
        "Violinist in the Southern Maine area. Not currently accepting students.",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex flex-col justify-center bg-gradient-to-tr from-slate-100 to-sky-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-5xl">
          Aaron Pettengill
        </h1>
        <h2 className="text-xl font-bold tracking-tight text-sky-700 sm:text-4xl">
          Violin Teacher
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-500">
          Not currently accepting students.
        </p>
      </div>
    </div>
  );
}
