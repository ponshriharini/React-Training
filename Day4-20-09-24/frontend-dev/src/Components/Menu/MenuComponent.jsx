import "./MenuStyles.css";

function MenuComponent() {
    return ( 
        <div className="menu">
            <header>New <span className="menu-head">Organic</span> Add-ons</header>

            <navbar>
                    <div className="menu-nav mt-3">
                        <div className="food-type breakfast">Breakfast</div>
                        <div className="food-type">Fruits</div>
                        <div className="food-type">Salads</div>
                    </div>
            </navbar>

        </div>
     );
}

export default MenuComponent;