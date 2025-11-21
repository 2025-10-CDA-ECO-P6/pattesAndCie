// accordion cela sert a ouvrir et fermer les onglets dans la page details animal avec framer-motion pour le petit effet d'animation

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styles from './AccordionCard.module.css';

export default function AccordionCard({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.15,
                ease: "linear",
                delay: 0.01
            }}
            whileHover={{ scale: 1.02 }}
        >
            {/* HEADER */}
            <div className={styles.header} onClick={() => setOpen(!open)}>
                <h2>{title}</h2>

                <motion.span
                    className={`${styles.arrow} ${open ? styles.open : ""}`}
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                >
                    ▼
                </motion.span>
            </div>

            {/* CONTENT AVEC MOTION ACCORDÉON */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className={styles.content}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.45,
                            ease: "linear"
                        }}
                        style={{ overflow: "hidden" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: "linear" }}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
