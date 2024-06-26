const calculateTimeParts = (totalSeconds) => {
    const day = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return { day, hours, minutes, seconds }
}

const timeFormatChanger = (secondsValue = 0, language = 'en-US') => {
    const { day, hours, minutes, seconds } = calculateTimeParts(secondsValue);
    const timeArray = [day, hours, minutes, seconds].map(num => num.toLocaleString(language, { minimumIntegerDigits: 2 }));

    (day === 0) && timeArray.shift((0).toLocaleString(language)); hours === 0 && timeArray.shift((0).toLocaleString(language))

    return timeArray.join(':');
}


export default timeFormatChanger
export { timeFormatChanger }