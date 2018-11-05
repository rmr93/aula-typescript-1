export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
        if (!this._isWorkingDay(data))
            throw new Error('Somente negociações em dias úteis.');
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    _isWorkingDay(date) {
        return date.getDay() != DiasDaSemana.Domingo && date.getDay() != DiasDaSemana.Sabado;
    }
}
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Domingo"] = 0] = "Domingo";
    DiasDaSemana[DiasDaSemana["Segunda"] = 1] = "Segunda";
    DiasDaSemana[DiasDaSemana["Terca"] = 2] = "Terca";
    DiasDaSemana[DiasDaSemana["Quarta"] = 3] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 4] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 5] = "Sexta";
    DiasDaSemana[DiasDaSemana["Sabado"] = 6] = "Sabado";
})(DiasDaSemana || (DiasDaSemana = {}));
