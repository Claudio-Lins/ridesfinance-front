export default function MesAno(props) {

    const myDate = new Date();
    let mes = myDate.getMonth() + 1;
    let ano = myDate.getFullYear();

    switch (mes) {
        case 1:
            mes = "JANEIRO"
            break;
    
        case 2:
            mes = "FEVEREIRO"
            break;
    
        case 3:
            mes = "MARÇO"
            break;
    
        case 4:
            mes = "ABRIL"
            break;
    
        case 5:
            mes = "MAIO"
            break;
    
        case 6:
            mes = "JUNHO"
            break;
    
        case 7:
            mes = "JULHO"
            break;
    
        case 8:
            mes = "AGOSTO"
            break;
    
        case 9:
            mes = "SETEMBRO"
            break;
    
        case 10:
            mes = "OUTRUBRO"
            break;
    
        case 11:
            mes = "NOVEMBRO"
            break;
    
        case 11:
            mes = "DEZEMBRO"
            break;
    
        default:
            break;
    }

    return (
        <>
            <div className='bg-white shadow rounded-lg mb-0 mt-8 flex justify-center gap-2 max-w-[150px] mx-auto px-4 text-[14px] text-gray-500'>
                <span>{mes}</span>
                <span>{ano}</span>
            </div>
        </>
    )
}