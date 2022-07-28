const Employee = ({ imgUrl, atWork, firstName, lastName, id }) => {
    return (
        <div className='Employee'>
            <div>
                <div className="Employee-photo">
                    <img src={imgUrl} />
                </div>
                <p className="Employee-status">Status: {atWork}</p>
            </div>
            <div>
                <p className='Employee-name'>{`${firstName} ${lastName}`}</p>
                <p className='Employee-id'>{id}</p>
            </div>
        </div>
    )
}

export default Employee

// dibs
// mamadas y chingadas
// contenedores y chingaderas
// dos contenedores padre
// primer container imagen p, para Offline
// para seg names de p etselente
// 