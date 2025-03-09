import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname en un entorno de módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notFoundHandler = (req, res, next) => {
    // Si la ruta no es una API o recursos estáticos, devolver 'index.html'
    const acceptHeader = req.get('Accept');

    // Verificar si la ruta es una ruta de API o recurso estático
    if (!acceptHeader.includes('application/json') && !req.originalUrl.startsWith('/static')) {
        // Ruta desconocida o ruta de frontend, devolver index.html
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html')); // Actualiza la ruta según sea necesario
    } else {
        // Si es una ruta de API o recurso estático, devuelve el error 404
        res.status(404).json({
            error: {
                message: 'Recurso no encontrado',
            },
        });
    }
};

export default notFoundHandler;