export  function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
};
Money.prototype.getValue = function() {
    return this.value;
};
Money.prototype.getCurrency = function() {
    return this.currency;
};
Money.prototype.exchangeTo = function(currency) {
    if (currency === 'usd' && this.currency === 'eur') return new Money(this.value * 1.2, currency);
    if (currency === 'eur' && this.currency === 'usd') return new Money(this.value * 0.7, currency);
    return new Money(this.value, this.currency);
}
Money.prototype.add = function(money) {
    
    if (money.getCurrency() === this.getCurrency()) return new Money(money.getValue() + this.getValue(), this.getCurrency());

    if (money.getCurrency() === 'usd') {
        const converted = money.exchangeTo('eur');
        return new Money(converted.getValue() + this.getValue(), this.getCurrency());
    }
    if (money.getCurrency() === 'eur') {
        const converted = money.exchangeTo('usd');
        return new Money(converted.getValue() + this.getValue(), this.getCurrency());
    }
}
Money.prototype.format = function() {
    const number = this.getValue();
    const curr = this.getCurrency();
    if (curr === 'eur') return number.toLocaleString(undefined, { style: "currency", currency: "EUR" });
    return number.toLocaleString(undefined, { style: "currency", currency: "USD" });

} 
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода