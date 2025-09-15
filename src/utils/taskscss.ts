/** Devuelve la clase de Tailwind CSS según la prioridad */
export const getClassNameForPriority = (priority: string) => {
    switch (priority) {
        case 'high':
            return 'text-red-500';
        case 'medium':
            return 'text-yellow-500';
        case 'low':
            return 'text-green-500';
        default:
            return '';
    }
};

/** Recibe el tiempo en minutos y devuelve el porcentaje de tiempo restante */
export const getPercentageToDeadline = (
    timeToEnd: number,
    timestamp: number
) => {
    if (!timeToEnd) return 0;
    const secondsToDeadline = timeToEnd * 60;
    const secondsElapsed = (Date.now() - timestamp) / 1000;
    const percentage =
        ((secondsToDeadline - secondsElapsed) / secondsToDeadline) * 100;
    // console.log(`Han transcurrido ${secondsElapsed} segundos de ${secondsToDeadline} segundos totales.`);
    // console.log('Obteniendo porcentaje deadline');
    return Math.min(Math.max(percentage, 0), 100);
};

/** Devuelve la clase de Tailwind CSS para el color de fondo según el porcentaje */
export const getBgColorForPercentage = (percentage: number) => {
    if (percentage >= 90 && percentage <= 100) {
        return 'bg-green-600';
    } else if (percentage >= 75 && percentage < 90) {
        return 'bg-blue-600';
    } else if (percentage >= 50 && percentage < 75) {
        return 'bg-yellow-600';
    } else if (percentage >= 25 && percentage < 50) {
        return 'bg-orange-600';
    } else if (percentage >= 0 && percentage < 25) {
        return 'bg-red-600';
    } else {
        return 'bg-gray-600';
    }
};
