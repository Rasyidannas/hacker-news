import SideNav from "../components/Layouts/SideNav";
import Header from "../components/Layouts/Header";
import notFoundImage from "../assets/not_found.svg";

function ErrorPage() {
  return (
    <>
      <main className="flex">
        <SideNav />
        <section className="py-12 px-6 w-full">
          <Header />
          <div className="text-center flex flex-col items-center gap-12 w-80 mx-auto mt-24">
            <img src={notFoundImage} />
            <div className="flex flex-col gap-4">
              <h3>404 Not Found</h3>
              <p className="text-neutral-70">
                Try refining your search or explore our popular categories below
              </p>
            </div>
            <a href="/" className="button-medium bg-primary-50">
              Back To News
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default ErrorPage;
