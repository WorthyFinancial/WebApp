const UserDetailForm = ({users}) => {
    return (
        <div className="tc form center pa3 shadow-5">
            <div>
               <p className='f3'>
                { 'This info is preloaded with what your employer has submitted. Fill in the rest.'} 
                </p>
            </div>  
            <div className="outerContainer center pa4 br3">
                <h2>Profile Details</h2>
                <div className="pa2" >
                    <div className="center">
                        <p className="field">firstname</p>
                        <input className="input" type='text' placeholder="Adrian"/>
                    </div>
                    <div className="center">
                        <p className="field">Last Name</p>
                        <input className="input" type='text' placeholder="Smith"/>
                    </div>
                    <div className="center">
                        <p className="field">Company Name</p>
                        <input className="input" type='text' placeholder="Southwest Airlines"/>
                    </div>
                    <div className="center">    
                        <p className="field">Position</p>
                        <input className="input" type='text' placeholder="Software Engineer" />
                    </div>
                    
                    <h2>Contact Info</h2>      
                    <div className="center">
                        <p className="field">Work Email</p>
                        <input className="input" type='text' placeholder="adrian.smith@southwest.com" />
                    </div>
                    <div className="center">
                        <p className="field">Personal Email</p>
                        <input className="input" type='text' />
                    </div>
                    <div className="center">
                        <p className="field">Phone</p>
                        <input className="input" type='tel' />
                    </div>
                </div>
            </div>
            <button className= 'center w-30 grow f4 link ph3 pv2 dib white bg-black'>Submit</button>
        </div>
    );
}

export default UserDetailForm;