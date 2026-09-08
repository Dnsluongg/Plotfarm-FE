import React, { useState } from 'react';

const PlotCard = ({ plot, onRentSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handleRent = () => {
        if (!window.confirm(`Bạn có chắc muốn thuê ô ${plot.plot_code}?`)) return;
        setLoading(true);
        // Giả lập gọi API thành công sau 1 giây
        setTimeout(() => {
            alert(`✅ Thuê ô ${plot.plot_code} thành công!`);
            setLoading(false);
            onRentSuccess(plot.id); // thông báo đã thuê để cập nhật danh sách
        }, 800);
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.code}>{plot.plot_code}</h3>
            <p>📐 Diện tích: <strong>{plot.size} m²</strong></p>
            <p>💰 Giá thuê: <strong>{plot.rent_price.toLocaleString()} VND</strong></p>
            <button
                onClick={handleRent}
                disabled={loading}
                style={styles.rentBtn}
            >
                {loading ? 'Đang xử lý...' : 'Thuê ngay'}
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '20px',
        margin: '10px',
        width: '220px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    code: {
        margin: '0 0 10px 0',
        color: '#1b5e20',
    },
    rentBtn: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#2e7d32',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        fontWeight: 'bold',
    },
};

export default PlotCard;