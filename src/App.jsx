import { useState } from 'react'
import InscripcionTallerPage from './pages/InscripcionTallerPage'
import RegistroUsuarioPage from './pages/RegistroUsuarioPage'
import RegistroUsuarioPageHero from './pages/RegistroUsuarioPageHero'
import PublicarTallerPage from './pages/PublicarTallerPage'
import { ButtonGroup } from '@mui/material'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [vista, setVista] = useState('registro');

  return (
    <div>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <ButtonGroup variant="outlined" aria-label="text button group">
          <Button onClick={() => setVista('registro')}>Registro de usuario</Button>
          <Button onClick={() => setVista('inscripcion')}>Inscripcion a talleres</Button>
          <Button onClick={() => setVista('publicar')}>Publicar taller</Button>
        </ButtonGroup>
      </nav>
      {vista === 'registro' && <RegistroUsuarioPageHero />}
      {vista === 'inscripcion' && <InscripcionTallerPage />}
      {vista === 'publicar' && <PublicarTallerPage />}
    </div>
  );
}

export default App
