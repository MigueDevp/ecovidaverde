export default function Wallpaper() {
  return (
    <div className="bg-gray-100 ">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5bd8eb] to-[#2be20b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"></div>
        </div>
      </div>
    </div>
  );
}
