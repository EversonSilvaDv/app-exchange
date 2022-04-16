import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Currency from '../pages/currency';
import Test from '../pages/teste/test'; // pagina de testes
import Layout from '../components/layout';
import Options from '../pages/options';
import Simulator from '../pages/simulator';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/currency' element={<Currency />} />
          <Route path='/simulator' element={<Simulator />} />
          <Route path='/options' element={<Options />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default AppRoutes;