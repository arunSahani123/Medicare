import { Suspense, lazy, useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { pageTransition } from './utils/animations';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Doctors = lazy(() => import('./pages/Doctors'));
const DoctorDetails = lazy(() => import('./pages/DoctorDetails'));
const Departments = lazy(() => import('./pages/Departments'));
const Services = lazy(() => import('./pages/Services'));
const Appointment = lazy(() => import('./pages/Appointment'));
const PatientPortal = lazy(() => import('./pages/PatientPortal'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageTransition(pageRef.current);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Navbar />
      <main ref={pageRef} className="page-shell">
        <Suspense fallback={<Loader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/portal" element={<PatientPortal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
