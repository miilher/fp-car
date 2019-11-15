export interface CarOnlyModelReturnFipe {
    nome: string;
    codigo: string;
}


export interface CarModelReturnFipe {
    modelos: {
        nome: string;
        codigo: number;
    };
    anos: {
        nome: string;
        codigo: string;
    };

}


