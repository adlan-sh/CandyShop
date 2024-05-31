import './field.scss'

type FieldType = {
    head: string, 
    placeholder: string,
    name: string,
    type: string,
    className: string
}

function Field({ head, placeholder, name, type, className } : FieldType) {
    return (
        <div>
            <h4>{head}</h4>
            <input placeholder={placeholder} name={name} type={type} className={className} disabled />
        </div>
    );
}

export default Field;