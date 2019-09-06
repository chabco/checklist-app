import React from 'react';
import SportingGoods from './SportingGoods';
import Electronics from './Electronics';

function List() {
    return(
        <div className="container border">
            <div className="row">
                <div className="col-sm">
                    Name
                </div>
                <div className="col-sm">
                    Price
                </div>
            </div>



            <div className="container border">Sporting Goods</div>
            <SportingGoods />
            <div className="container border">Electronics</div>
            <Electronics />
        </div>
    )
}

export default List;