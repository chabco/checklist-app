import React from 'react';
import SportingGoods from './SportingGoods';
import Electronics from './Electronics';

function List() {
    return(
        
        <div className="bg-info border">
            <div className="row">
                <div className="col-sm">
                    Name
                </div>
                <div className="col-sm">
                    Price
                </div>
            </div>
            <div className="border bg-success text-white">Sporting Goods</div>
            <SportingGoods />
            <div className="border bg-success text-white">Electronics</div>
            <Electronics />
        </div>
    )
}

export default List;