const moneyFormatter = (valor: number) => { 
    // eslint-disable-next-line
    return valor.toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
};

export {
    moneyFormatter
}