
const FormItem = ({dataForm, handleOnChange, addOrder}) => {
    return (
        <form onSubmit={addOrder}>
            <h3 className="pb-5">Complete los siguientes datos para continuar</h3>

            <div className="form-group row">
                <div>
                    <input type="text" className="form-control" onChange={handleOnChange} name='name' value={dataForm.name}
                    placeholder="Nombres y apellido"/>
                </div>
            </div>
            <div className="form-group row">
                <div>
                <input type="email" className="form-control" onChange={handleOnChange} name='email' value={dataForm.email}
                    placeholder="Email"/>
                </div>
            </div>
            <div className="form-group row">
                <div>
                <input type="email" className="form-control" onChange={handleOnChange} name='confirmEmail' value={dataForm.confirmEmail}
                    placeholder="Repita su email"/>
                </div>
            </div>
            <div className="form-group row">
                <div>
                <input type="text" className="form-control" onChange={handleOnChange} name='phone' value={dataForm.phone}
                    placeholder="Teléfono"/>
                </div>
            </div>

            {dataForm.email === dataForm.confirmEmail && dataForm.name.length > 5 && dataForm.phone.length > 9
                ?
            <button type="submit" className="btn btn-dark m-2 mt-3">Finalizar compra</button>
                :
            <h3>Siganos en nuestras redes sociales</h3>
            }



        </form>
    )
}

export default FormItem