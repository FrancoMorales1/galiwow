// Middleware para manejar errores genéricos
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message || 'Error desconocido');
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Error interno del servidor',
        },
    });
};

export default errorHandler;
