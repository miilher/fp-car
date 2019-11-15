export interface CarOnlyModelReturnFipe {
    nome: string;
    codigo: string;
}


export interface CarModelReturnFipe {
    anos: {
        nome: string;
        codigo: string;
    };
    modelos: {
        CarOnlyModelReturnFipe: any
    };
}


