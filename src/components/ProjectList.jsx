import React from 'react';
import { motion } from 'framer-motion';
import { Github, AlertTriangle, Eye, Music, Tv, Link } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'Jabra',
        description: 'Reproductor de música local impulsado por Node.js. Requiere configuración JSON.',
        url: 'https://github.com/crisutf/Jabra',
        demoUrl: 'https://crisutf.github.io/Jabra/index.desktop.html',
        tags: ['Node.js', 'Música', 'Local'],
        icon: <Music size={24} />,
        color: '#1DB954'
    },
    {
        id: 2,
        name: 'GoToWin11',
        description: 'Virus CMD/WinRAR que deshabilita y borra todo el sistema.',
        url: 'https://github.com/crisutf/GoToWin11',
        tags: ['CMD', 'WinRAR', 'Virus'],
        warning: '¡No me hago responsable de su uso!',
        icon: <AlertTriangle size={24} />,
        color: '#ff4757'
    },
    {
        id: 3,
        name: 'Owl-s-eye',
        description: 'Extensión de control parental.',
        url: 'https://github.com/crisutf/Owl-s-eye',
        tags: ['Extensión', 'Seguridad', 'Control'],
        note: 'Configuración de bloqueo viene de fábrica. Puede contener errores.',
        icon: <Eye size={24} />,
        color: '#5352ed'
    },
    {
        id: 4,
        name: 'Crisutf TV+',
        description: 'Plataforma de streaming.',
        url: 'https://github.com/crisutf/crisu-tv',
        tags: ['Streaming', 'React', 'Video'],
        icon: <Tv size={24} />,
        color: '#e056fd'
    },
    {
        id: 5,
        name: 'Ccrisutf',
        description: 'Acortador de enlaces.',
        url: 'https://github.com/crisutf/ccrisu',
        tags: ['URL Shortener', 'Tool'],
        icon: <Link size={24} />,
        color: '#f0932b'
    }
];

const ProjectList = () => {
    return (
        <section className="container" style={{ padding: '4rem 2rem' }}>
            <h2 style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.5px' }}>Proyectos</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
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
                            height: '100%'
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
                                    background: project.color,
                                    padding: '10px',
                                    borderRadius: '14px',
                                    color: 'white',
                                    display: 'flex',
                                    boxShadow: `0 4px 12px ${project.color}40`
                                }}>
                                    {project.icon}
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>{project.name}</h3>
                            </div>

                            <p style={{ color: '#555', marginBottom: '1rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                {project.description}
                            </p>

                            {project.warning && (
                                <div style={{
                                    background: '#ffeaa7',
                                    color: '#d35400',
                                    padding: '0.8rem',
                                    borderRadius: '12px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <AlertTriangle size={16} />
                                    {project.warning}
                                </div>
                            )}

                            {project.note && (
                                <p style={{ fontSize: '0.9rem', color: '#7f8c8d', fontStyle: 'italic', marginBottom: '1rem' }}>
                                    Nota: {project.note}
                                </p>
                            )}
                        </div>

                        <div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        background: 'rgba(0,0,0,0.04)',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '20px',
                                        fontWeight: '600',
                                        color: '#636e72'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{
                                        background: '#0071e3',
                                        color: '#fff',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        padding: '0.8rem',
                                        borderRadius: '14px'
                                    }}>
                                        <Eye size={18} /> Ver Demo
                                    </a>
                                )}
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn" style={{
                                    background: '#2d3436',
                                    color: '#fff',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.8rem',
                                    borderRadius: '14px'
                                }}>
                                    <Github size={18} /> Ver en GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;

