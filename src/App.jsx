import { useState } from 'react'
import InscripcionTallerPage from './pages/InscripcionTallerPage'
import RegistroUsuarioPage from './pages/RegistroUsuarioPage'
import PublicarTallerPage from './pages/PublicarTallerPage'
import { EmitirCertificadosPage } from './pages/EmitirCertificadosPage'
import { ButtonGroup } from '@mui/material'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [vista, setVista] = useState('registro');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <ButtonGroup variant="outlined" aria-label="text button group">
          <Button onClick={() => setVista('registro')}>Registro de usuario</Button>
          <Button onClick={() => setVista('inscripcion')}>Inscripcion a talleres</Button>
          <Button onClick={() => setVista('publicar')}>Publicar taller</Button>
          <Button onClick={() => setVista('emitir certificados')}>Emitir Certificados</Button>
        </ButtonGroup>
      </nav>
      {vista === 'registro' && <RegistroUsuarioPage />}
      {vista === 'inscripcion' && <InscripcionTallerPage />}
      {vista === 'publicar' && <PublicarTallerPage />}
      {vista === 'emitir certificados' && <EmitirCertificadosPage/>}
    </div>
  );
}

export default App
