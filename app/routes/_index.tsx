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
        <div className="text-sm mt-6 text-slate-500 flex justify-center">
          <a
            href="https://www.facebook.com/AaronPettengillViolinStudio"
            aria-label="Go to facebook page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-[#3B5999]"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
