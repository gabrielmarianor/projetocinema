import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import LancheForm from '@/components/LancheForm';
import LanchesList from '@/components/LanchesList';
import { getLanches } from '@/services/api';
import { LancheCombo } from '@/types';

const Lanches = () => {
  const [lanches, setLanches] = useState<LancheCombo[]>([]);
  const [loading, setLoading] = useState(true);
  const [lancheEditando, setLancheEditando] = useState<LancheCombo | null>(null);

  const fetchLanches = async () => {
    try {
      const response = await getLanches();
      setLanches(response.data);
    } catch (error) {
      console.error('Erro ao carregar lanches:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLanches();
  }, []);

  const handleSuccess = () => {
    fetchLanches();
    setLancheEditando(null);
  };

  const handleCancel = () => {
    setLancheEditando(null);
  };

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container py-4">
        <div className="d-flex align-items-center mb-4">
          {/* MUDANÇA AQUI: Ícone amarelo (text-warning) */}
          <i className="bi bi-cup-straw text-primary display-5 me-3"></i>
          <div>
            <h1 className="text-dark mb-0">Lanches e Combos</h1>
            <p className="text-secondary mb-0">Gerencie a bomboniere do cinema</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="sticky-top" style={{ top: '20px', zIndex: 1 }}>
              <LancheForm onSuccess={handleSuccess} lancheEditando={lancheEditando} onCancel={handleCancel} />
            </div>
          </div>

          <div className="col-lg-8">
            {!loading && <LanchesList lanches={lanches} onDelete={fetchLanches} onEdit={(l) => { setLancheEditando(l); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanches;