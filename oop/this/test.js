
  const printer = {
    items: [1],
    print() { // важно что внешняя функция имеет контекст
      // Стрелочная функция определяется внутри функции print,
      // но вызывается внутри метода forEach
      this.items.forEach(() => console.log(this.items));
    },
  };
  
  printer.print(); // [1]