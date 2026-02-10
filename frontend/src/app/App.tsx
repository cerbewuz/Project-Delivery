import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MarketingLayout,
  LandingPage,
  FeaturesPage,
  PricingPage,
  AboutPage,
  ContactPage,
  TermsPage,
  PrivacyPage,
  CookiePage,
} from "../features/marketing";
import {
  AuthLayout,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
} from "../features/auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing pages — wrapped in shared Navbar + Footer layout */}
        <Route element={<MarketingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="cookies" element={<CookiePage />} />
        </Route>

        {/* Auth pages — split-screen layout, no Navbar/Footer */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
