import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SalaForm from '@/components/SalaForm';
import SalasList from '@/components/SalasList';
import { getSalas } from '@/services/api';
import { Sala } from '@/types';

const Salas = () => {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [loading, setLoading] = useState(true);
  const [salaEditando, setSalaEditando] = useState<Sala | null>(null);

  const fetchSalas = async () => {
    try {
      const response = await getSalas();
      setSalas(response.data);
    } catch (error) {
      console.error('Erro ao carregar salas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalas();
  }, []);

  const handleSuccess = () => {
    fetchSalas();
    setSalaEditando(null);
  };

  const handleCancel = () => {
    setSalaEditando(null);
  };

  return (
    // Fundo da página branco (bg-light)
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container py-4">
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-door-open text-primary display-5 me-3"></i>
          <div>
            <h1 className="text-dark mb-0">Salas</h1>
            <p className="text-secondary mb-0">Gerencie as salas de exibição do cinema</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="sticky-top" style={{ top: '20px', zIndex: 1 }}>
              <SalaForm
                onSuccess={handleSuccess}
                salaEditando={salaEditando}
                onCancel={handleCancel}
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-dark mb-0">
                <i className="bi bi-list-ul me-2"></i>
                Salas Cadastradas
              </h4>
              <span className="badge bg-primary text-white">
                {salas.length} sala(s)
              </span>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : (
              <SalasList
                salas={salas}
                onDelete={fetchSalas}
                onEdit={(sala) => {
                  setSalaEditando(sala);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salas;