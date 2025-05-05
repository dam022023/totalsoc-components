const getMonthName = (monthIndex: number): string => {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return monthNames[monthIndex];
};

const createBarChartMonthsArray = (): { critical: number, high: number, medium: number, month: string }[] => {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const barChartMonthsArray = [];

    for (let i = 11; i >= 0; i--) {
        const monthIndex = (currentMonthIndex - i + 12) % 12;
        barChartMonthsArray.push({
            critical: 0,
            high: 0,
            medium: 0,
            month: getMonthName(monthIndex),
        });
    }

    return barChartMonthsArray;
};

const barChartMonths = createBarChartMonthsArray();

export default barChartMonths;