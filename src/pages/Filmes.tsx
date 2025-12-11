import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FilmeForm from '@/components/FilmeForm';
import FilmesList from '@/components/FilmesList';
import { getFilmes } from '@/services/api';
import { Filme } from '@/types';

const Filmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [filmeEditando, setFilmeEditando] = useState<Filme | null>(null);

  const fetchFilmes = async () => {
    try {
      const response = await getFilmes();
      setFilmes(response.data);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  const handleSuccess = () => {
    fetchFilmes();
    setFilmeEditando(null);
  };

  const handleCancel = () => {
    setFilmeEditando(null);
  };

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container py-4">
        <div className="d-flex align-items-center mb-4">
          {/* MUDANÇA AQUI: Ícone amarelo (text-warning) para igualar a Sessões */}
          <i className="bi bi-camera-reels text-primary display-5 me-3"></i>
          <div>
            <h1 className="text-dark mb-0">Filmes</h1>
            <p className="text-secondary mb-0">Gerencie o catálogo de filmes do cinema</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="sticky-top" style={{ top: '20px', zIndex: 1 }}>
              <FilmeForm
                onSuccess={handleSuccess}
                filmeEditando={filmeEditando}
                onCancel={handleCancel}
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-dark mb-0">
                <i className="bi bi-list-ul me-2"></i>
                Filmes Cadastrados
              </h4>
              <span className="badge bg-primary text-white">
                {filmes.length} filme(s)
              </span>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : (
              <FilmesList
                filmes={filmes}
                onDelete={fetchFilmes}
                onEdit={(filme) => {
                  setFilmeEditando(filme);
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

export default Filmes;