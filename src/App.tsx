import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main id="conteudo" className="main-content"><AppRoutes /></main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
