import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectfSection = () => {
    return (
        <section style={{ padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                style={{ width: '100%', maxWidth: '1200px' }}
            >
                <h2 style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.5px', color: 'var(--color-primary)' }}>Projectf</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    justifyContent: 'center'
                }}>
                    <motion.div
                        whileHover={{ y: -5 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            padding: '2rem',
                            borderRadius: '24px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            maxWidth: '600px',
                            margin: '0 auto',
                            width: '100%'
                        }}
                    >
                        <div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    background: '#ff6f00',
                                    padding: '10px',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 12px rgba(255, 111, 0, 0.4)',
                                    width: '50px',
                                    height: '50px'
                                }}>
                                    <img
                                        src="https://projectf-crisutf.pages.dev/media/favicon.png"
                                        alt="Logo"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700', color: '#2c3e50' }}>Crisutf TV+</h3>
                            </div>

                            <p style={{ color: '#555', marginBottom: '1rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                Disfruta de canales de televisión de España online y gratis. Una colección completa de enlaces abiertos para una transmisión fluida y sin cortes.
                            </p>

                            <p style={{ fontSize: '0.9rem', color: '#7f8c8d', fontStyle: 'italic', marginBottom: '1rem' }}>
                                Creado por <strong>Crisutf</strong>
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                            <a
                                href="https://projectf-crisutf.pages.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    background: '#0071e3',
                                    color: '#fff',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.8rem',
                                    borderRadius: '14px',
                                    fontWeight: '600',
                                    textDecoration: 'none'
                                }}
                            >
                                <ExternalLink size={18} /> Empezar a Ver
                            </a>
                            <a
                                href="https://github.com/Projec-tf/crisutf-tv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    background: '#2d3436',
                                    color: '#fff',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.8rem',
                                    borderRadius: '14px',
                                    fontWeight: '600',
                                    textDecoration: 'none'
                                }}
                            >
                                <Github size={18} /> Ver Código
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectfSection;
