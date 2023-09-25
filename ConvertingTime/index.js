function to24hourtime(hour, minute, period) {
    // hour will always range from 1 to 12 (inclusive)
    // minute will always range from 0 to 59 (inclusive)
    // period will always be either "am" or "pm"
    let hoursString, minutesString, result;

    switch (period) {
        case 'am':
            if (hour === 12 && minute === 0) return '0000';
            if (hour === 12 && minute > 0) {
                hoursString = '00';
                minutesString = String(minute).padStart(2, '0');
                return hoursString + minutesString;
            };
            hoursString = String(hour).padStart(2, '0');
            minutesString = String(minute).padStart(2, '0');
            return hoursString + minutesString;
        case 'pm':
            if (hour === 12 && minute === 0) return '1200';
            if (hour === 12 && minute > 0) {
                hoursString = '12';
                minutesString = String(minute).padStart(2, '0');
                return hoursString + minutesString;
            };
            hoursString = String(hour + 12).padStart(2, '0');
            minutesString = String(minute).padStart(2, '0');
            return hoursString + minutesString;

    }
}

// assert.strictEqual(to24hourtime( 1,  0, "am"), "0100", "Input =  1:00 am");
// assert.strictEqual(to24hourtime( 1,  0, "pm"), "1300", "Input =  1:00 pm");
// assert.strictEqual(to24hourtime(12,  0, "am"), "0000", "Input = 12:00 am");
// assert.strictEqual(to24hourtime(12,  0, "pm"), "1200", "Input = 12:00 pm");
// assert.strictEqual(to24hourtime( 6, 30, "am"), "0630", "Input =  6:30 am");
// assert.strictEqual(to24hourtime( 9, 45, "pm"), "2145", "Input =  9:45 pm");