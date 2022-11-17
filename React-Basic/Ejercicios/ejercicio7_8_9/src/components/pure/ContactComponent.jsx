import '../../styles/task.scss';

const ContactComponent = ({ contact, conectar, remove}) => {
    const { name, status, online } = contact;


    function onLineColor(online) {
        return online ? '#58D68D' : '#ABB2B9';
    }

    function isOnline(online) {
        return online ? '(onLine)' : '(offLine)';
    }


    return (
        <div className="card m-4" style={{ width: '20rem', height:'9rem' }}>
            {/* Name and Online */}
            <div className='card-header d-flex justify-content-between align-items-center'>
                <div className=' d-flex align-items-center gap-2' style={{ width: '10rem', height: '30px' }}>
                    <div className='fw-bold' style={{ fontSize: '21px' }}>{name}</div>
                    <div className='fw-ligth' style={{ fontSize: '11px' }}>{isOnline(online)}</div>
                </div>
                 
                 {/* This div is the online status (green is online, grey is offline) */}
                <div
                    style={{
                        width: '20px', height: '20px',
                        backgroundColor: onLineColor(online),
                        border: '1px solid #808B96 ', borderRadius: '50%',
                        cursor: 'pointer'
                    }}
                    onClick={() => conectar(contact)}
                >

                </div>

            </div>

            {/* Status */}
            <div className='card-body' style={{ height: '3rem' }}>
                <p className='text-start text-success'>
                    {status}
                </p>
            </div>

            <div className='d-flex justify-content-end p-2'>
                <i className="bi bi-trash" id="trash-icon"  onClick={()=> remove(contact)}></i>
            </div>

        </div>
    )
}

export default ContactComponent




