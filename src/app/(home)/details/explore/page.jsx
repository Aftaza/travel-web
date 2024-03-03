export const metadata = {
  title: "Bromo | Virtual Tour",
};

export default function Explore() {
  return (
    <>
      <iframe
        src="https://eastjava.travel/360asset/bromo/"
        frameborder="0"
        className="w-[100vw] h-[100vh]"
        allowFullScreen="true"
        allow="true"
      ></iframe>
    </>
  );
}
