import './code.scss';
import QRCode from 'react-qr-code';

type CodeType = {
    code: string;
}

function Code({ code }: CodeType) {
    return (
        <div className='code-container'>
            <h3>Код получения заказа</h3>
            <QRCode value={code} size={128} />
            <h3>{code}</h3>
        </div>
    );
}

export default Code;