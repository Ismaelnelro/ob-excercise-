import Square from "../pure/Square";

const SquareContainer = () => {

    const square = {
        width:'255',
        height: '255',
        color: '#000'
    }

    
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Square square={square} />
        </div>
    );
};
export default SquareContainer;
