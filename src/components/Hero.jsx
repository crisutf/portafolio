import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png';

const Hero = () => {
    return (
        <section className="hero" style={{
            padding: '8rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '2rem' }}
            >
                <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #fff',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    margin: '0 auto'
                }}>
                    <img
                        src={profilePic}
                        alt="Crisutf"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 style={{
                    fontSize: '5rem',
                    marginBottom: '1rem',
                    color: '#fff',
                    letterSpacing: '-2px',
                    fontWeight: '800',
                    textShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                    Crisutf
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: '#555',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    fontFamily: "'Outfit', sans-serif"
                }}>
                    Alguien que hace cosas para no aburirse
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
