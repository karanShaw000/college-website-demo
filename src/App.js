import TeacherCarosel from "./components/TeacherCarosel";
import CollegeCorosel from "./components/CollegeCorosel";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import NoticeBoard from "./components/NoticeBoard";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <section className="my-4">
        <CollegeCorosel />
      </section>
      <section className="lg:grid lg:grid-cols-2 lg:place-items-start">
        <AboutUs />
        <NoticeBoard />
      </section>
      <TeacherCarosel />
      <Footer />
    </>
  );
}

export default App;
