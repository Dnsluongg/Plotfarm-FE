import React, { useState } from 'react';
import PlotCard from '../components/PlotCard';

// template
const initialPlots = [
    { id: '1', plot_code: 'A01', size: 50, rent_price: 200000, status: 'AVAILABLE' },
    { id: '2', plot_code: 'B02', size: 70, rent_price: 350000, status: 'AVAILABLE' },
    { id: '3', plot_code: 'C03', size: 30, rent_price: 150000, status: 'RENTED' },
    { id: '4', plot_code: 'D04', size: 100, rent_price: 500000, status: 'AVAILABLE' },
];

const Home = () => {
    const [showPlots, setShowPlots] = useState(false);
    const [plots, setPlots] = useState(initialPlots);

    // Lọc các ô có trạng thái AVAILABLE
    const availablePlots = plots.filter(p => p.status === 'AVAILABLE');

    const handleRentPlotClick = () => {
        setShowPlots(true);
    };

    const handleRentSuccess = (plotId) => {
        // Cập nhật trạng thái ô thành RENTED / xóa khỏi listt
        setPlots(prevPlots =>
            prevPlots.map(p =>
                p.id === plotId ? { ...p, status: 'RENTED' } : p
            )
        );
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>🌾 PlotFarm</h1>

            {!showPlots ? (
                <button onClick={handleRentPlotClick} style={styles.mainButton}>
                    Rent Plot
                </button>
            ) : (
                <div>
                    <h2 style={styles.subHeading}>Chọn ô đất để thuê</h2>
                    {availablePlots.length === 0 ? (
                        <p style={styles.noPlot}>Hiện không có ô đất nào trống.</p>
                    ) : (
                        <div style={styles.grid}>
                            {availablePlots.map(plot => (
                                <PlotCard key={plot.id} plot={plot} onRentSuccess={handleRentSuccess} />
                            ))}
                        </div>
                    )}
                    <button onClick={() => setShowPlots(false)} style={styles.closeBtn}>
                        Đóng danh sách
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#e8f5e9',
    },
    heading: {
        fontSize: '36px',
        color: '#1b5e20',
        marginBottom: '30px',
    },
    mainButton: {
        padding: '10px 10px',
        fontSize: '15px',
        backgroundColor: '#2e7d32',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        transition: '0.2s',
        marginLeft: '550px',
    },
    subHeading: {
        fontSize: '24px',
        color: '#1b5e20',
        marginBottom: '20px',
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    noPlot: {
        fontSize: '18px',
        color: '#555',
    },
    closeBtn: {
        marginTop: '30px',
        padding: '10px 30px',
        backgroundColor: '#757575',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Home;