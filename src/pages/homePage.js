export const Home = () => {
    return (
        <>
            <div className="container-fluid main">
                <div className="mainbox">
                    <div className="row ">
                        <div className="box1">
                            <h1>TO DO LIST</h1>
                        </div>
                    </div>
                </div>
                <div className="mainbox">
                    <div className="row todo">
                        <div className="box2">
                            <div className="d-flex">
                            <input type="text" placeholder="What are you planning today?"/>
                            <button class="Add" role="button">Add</button>
                            </div>
                                                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}