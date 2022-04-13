import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Currency from '../pages/currency';
import Test from '../pages/teste/test'; // pagina de testes
import Layout from '../components/layout';
import Options from '../pages/options';

const AppRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/currency' element={<Currency />} />
          <Route path='/test' element={<Test />} />
          <Route path='/options' element={<Options />} />
          <Route path='*' element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default AppRoutes;