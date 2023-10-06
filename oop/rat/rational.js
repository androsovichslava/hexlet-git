export default (numer, denom) =>{
    return {
        numer :numer,
        denom:denom,
        setNumer:function (numer) {
         this.numer = numer;
        },
        setDenom: function (denom) {
            this.denom = denom;
        },
        getNumer: function() {
            return this.numer;
        },
        getDenom: function () {
            return this.denom;
        },
        toString: function () {
            return `${this.numer}/${this.denom}`;
        },
        add: function (rat1) {
            this.setNumer(this.getNumer()  * rat1.getDenom() + rat1.getNumer() * this.getDenom() ); 
            this.setDenom (this.getDenom() * rat1.getDenom());
            return this;
        }
    }
  }



  // Сеттер setNumer() - устанавливает числитель
// Сеттер setDenom() - устанавливает знаменатель
// Геттер getNumer() - возвращает числитель
// Геттер getDenom() - возвращает знаменатель
// Геттер toString() - возвращает строковое представление числа
// Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число(не изменяет текущее!)