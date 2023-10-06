import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Home from './pages/home';
import JobVacancy from './pages/vacancy';
import DetailJob from './pages/detailJob';
import NotFound from './pages/404';
import SignUp from './pages/signup';
import SignIn from './pages/signIn';
import Layout from './layout/layout';
import SigninRoute from './layout/signinRoute';
import Dashboard from './pages/dashboard';
import AdminRoute from './layout/adminRoute';
import TableJob from './components/tableJob';
import Create from './components/createData';
import UserProfile from './components/userProfile';
import ChangePassword from './pages/changePassword';


function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
          <Routes>
            <Route path='/' element={
              <Layout>
                <Home />
              </Layout>
            }/>
            <Route path='/job-vacancy' element={
              <Layout>
                <JobVacancy />
              </Layout>
            }/>
            <Route path='/job-vacancy/:IdData' element={
              <Layout>
                <DetailJob />
              </Layout>
            }/>
            <Route path='/signin' element={
              <SigninRoute>
                <Layout>
                  <SignIn />
                </Layout>
              </SigninRoute>
            }/>
            <Route path='/signup' element={
              <SigninRoute>
                <Layout>
                  <SignUp />
                </Layout>
              </SigninRoute>
            }/>
            <Route path='/dashboard' element={
              <AdminRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </AdminRoute>
            } />
            <Route path='/dashboard/list-job' element={
              <AdminRoute>
                <Layout>
                  <TableJob />
                </Layout>
              </AdminRoute>
            } />
            <Route path='/dashboard/list-job/create' element={
              <AdminRoute>
                <Layout>
                  <Create />
                </Layout>
              </AdminRoute>
            } />
            <Route path='/dashboard/list-job/edit/:IdData' element={
              <AdminRoute>
                <Layout>
                  <Create />
                </Layout>
              </AdminRoute>
            } />
            <Route path='/dashboard/profile' element={
              <AdminRoute>
                <Layout>
                  <UserProfile />
                </Layout>
              </AdminRoute>
            } />
            <Route path='/dashboard/change-password' element={
              <AdminRoute>
                <Layout>
                  <ChangePassword />
                </Layout>
              </AdminRoute>
            } />
            <Route path='*' element={
              <Layout>
                <NotFound />
              </Layout>
            }/>
            <Route path='/dashboard/*' element={
              <Layout>
                <NotFound />
              </Layout>
            }/>
          </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
    
  );
}

export default App;
