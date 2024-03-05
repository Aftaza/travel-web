export const metadata = {
    title: "Situs Trowulan | Virtual Tour",
  };
  
  export default function ExploreTrowulan() {
    return (
      <>
        <iframe
          src="https://eastjava.travel/360asset/trowulan/"
          frameborder="0"
          className="w-[100vw] h-[100vh]"
          allowFullScreen="true"
          allow="true"
        ></iframe>
      </>
    );
  }
  