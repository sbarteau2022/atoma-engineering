import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Architecture } from './pages/Architecture'
import { Runtime } from './pages/Runtime'
import { Topology } from './pages/Topology'
import { Compliance } from './pages/Compliance'
import { Login } from './pages/Login'
import { Demo } from './pages/Demo'
import { Lab } from './pages/Lab'
import { Docs } from './pages/Docs'
import { Enterprise } from './pages/Enterprise'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="runtime" element={<Runtime />} />
        <Route path="topology" element={<Topology />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="docs" element={<Docs />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="demo" element={<Demo />} />
        <Route path="login" element={<Login />} />
        <Route path="lab" element={<Lab />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
