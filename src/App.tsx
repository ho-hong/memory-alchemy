import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import InputMemory from './pages/InputMemory'
import ModeSelection from './pages/ModeSelection'
import BeautifiedResult from './pages/BeautifiedResult'
import ErasingMemory from './pages/ErasingMemory'
import DeletionFailed from './pages/DeletionFailed'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputMemory />} />
        <Route path="/mode" element={<ModeSelection />} />
        <Route path="/result" element={<BeautifiedResult />} />
        <Route path="/erasing" element={<ErasingMemory />} />
        <Route path="/failed" element={<DeletionFailed />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
