import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Music } from 'lucide-react';

const socialLinks = [
    { id: 1, name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/crisutf', color: '#333' },
    { id: 2, name: 'X (Twitter)', icon: <Twitter size={24} />, url: 'https://x.com/crisu_tf', color: '#000' },
    { id: 3, name: 'Instagram', icon: <Instagram size={24} />, url: 'https://www.instagram.com/tf.crisu/', color: '#E1306C' },
    { id: 4, name: 'TikTok', icon: <Music size={24} />, url: 'https://www.tiktok.com/', color: '#000000' },
];

const Socials = () => {
    return (
        <section style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                style={{
                    display: 'flex',
                    gap: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '1rem 2rem',
                    borderRadius: '24px',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.3)'
                }}
            >
                {socialLinks.map((link) => (
                    <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -10, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50px',
                            height: '50px',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.8)',
                            color: link.color,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                        }}
                        title={link.name}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default Socials;
