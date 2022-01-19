function NameList() {
    const names = ['Productos', 'Servicios', 'Novedades', 'Ofertas', 'Contacto']
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList
